import { createAction } from "redux-actions";
import { Dispatch } from "redux";

import { ApiService } from "shared/api";

export enum USER_ACTION_TYPES {
    SET_USER = "USER.SET_USER"
}

export const userActions = {
    setUser: createAction(USER_ACTION_TYPES.SET_USER),

    fetchUser: (login: string, password: string) => async (dispatch: Dispatch) => {
        try {
            const response = await ApiService.login(login, password);
            dispatch(userActions.setUser(response.data));
        } catch (error) {
            console.log(error.message);
        }
    }
}