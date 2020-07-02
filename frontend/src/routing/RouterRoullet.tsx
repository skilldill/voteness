import React, { useEffect, useState } from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { routes } from "./routes";
import { ROUTER_URLS } from "shared/constants";
import { FullScreenLoading } from "shared/components";
import { RootContainer } from "core/components";

export const RouterRoullet = () => {
    const [goAuth, setGoAuth] = useState(false);
    const [showLoading, setShowLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        if (!!token && !!userId) {

        } else {
            setGoAuth(true);
            setShowLoading(false);
        }
    }, [dispatch]);

    return (
        <RootContainer>
            <Router>
                {showLoading && <FullScreenLoading />}
                <Switch>
                    {goAuth && (
                        <Route exact path="/">
                            <Redirect to={ROUTER_URLS.auth} />
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