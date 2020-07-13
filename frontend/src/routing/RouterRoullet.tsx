import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { routes } from "./routes";
import { ROUTER_URLS, LOCAL_STORAGE_KEYS } from "shared/constants";
import { FullScreenLoading } from "shared/components";
import { RootContainer } from "core/components";
import { updateHttpClient } from "shared/api/httpClient";

export const RouterRoullet = () => {
    const [goRedirect, setGoRedirect] = useState(false);
    const [redirectPath, setRedirectPath] = useState('');
    const [showLoading, setShowLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const jwt = localStorage.getItem(LOCAL_STORAGE_KEYS.jwt);
        const uid = localStorage.getItem(LOCAL_STORAGE_KEYS.uid);

        if (!!jwt && !!uid) {
            setRedirectPath(ROUTER_URLS.lenta);
            setGoRedirect(true);
            setShowLoading(false);

            //UPDATE JWT
            updateHttpClient({ Authorization: `Bearer ${jwt}` });
        } else {
            setRedirectPath(ROUTER_URLS.auth);
            setGoRedirect(true);
            setShowLoading(false);
        }
    }, [dispatch]);

    return (
        <RootContainer>
            <Router>
                {showLoading && <FullScreenLoading />}
                <Switch>
                    {goRedirect && (
                        <Route exact path="/">
                            <Redirect to={redirectPath} />
                        </Route>
                    )}
                    {routes.map((route, i) =>
                        <Route key={i} {...route} />
                    )}
                </Switch>
            </Router>
        </RootContainer>
    )
}