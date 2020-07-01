import { createStore } from "redux";

import { middlewares } from "./middlewares";
import { reducer } from "./reducers";

export const store = createStore(reducer, middlewares);