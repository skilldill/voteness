import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { routes } from "./routes";
import { ROUTER_URLS } from "shared/constants";

export const RouterRoullet = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to={ROUTER_URLS.auth} />
                </Route>
                {
                    routes.map((route, i) =>
                        <Route key={i} {...route} />
                    )
                }
            </Switch>
        </Router>
    )
}