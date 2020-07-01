import { combineReducers } from "redux";

import { userModule } from "./userState";

export const reducer = combineReducers({
    user: userModule.reducer
})