import { RouteProps } from "react-router-dom";

import { ROUTER_URLS } from "shared/constants";
import { Authorization, Lenta } from "pages";

export const routes: RouteProps[] = [
    { path: ROUTER_URLS.auth, component: Authorization, exact: true },
    { path: ROUTER_URLS.lenta, component: Lenta, exact: true }
]