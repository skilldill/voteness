import { createAction } from "redux-actions";
import { Dispatch } from "redux";

export enum USER_ACTION_TYPES {
    SET_USER = "USER.SET_USER"
}

export const userActions = {
    setUser: createAction(USER_ACTION_TYPES.SET_USER),

    fetchUser: (login: string, password: string) => (dispatch: Dispatch) => {
        
    }
}