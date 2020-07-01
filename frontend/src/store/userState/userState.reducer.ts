import { handleActions, Action } from "redux-actions";

import { USER_ACTION_TYPES } from "./userState.actions";
import { UserState } from "./userState.model";

export const initialState: UserState = {
    user: null
}

const mapReducers = {   
    [USER_ACTION_TYPES.SET_USER]: (state: UserState, action: Action<any>) => ({
        ...state, user: action.payload
    }),
}

export const userReducer = handleActions(mapReducers, initialState);