import { StoreState } from "shared/models/stateModel";
import { userActions } from "./userState.actions";
import { userReducer } from "./userState.reducer";

export const userModule: StoreState = {
    actions: userActions,
    reducer: userReducer
}