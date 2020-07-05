import { RouteProps } from "react-router-dom";

import { ROUTER_URLS } from "shared/constants";
import { Authorization, Lenta, UserPage } from "pages";

export const routes: RouteProps[] = [
    { path: ROUTER_URLS.auth, component: Authorization, exact: true },
    { path: ROUTER_URLS.lenta, component: Lenta, exact: true },
    { path: ROUTER_URLS.user, component: UserPage, exact: true }
]