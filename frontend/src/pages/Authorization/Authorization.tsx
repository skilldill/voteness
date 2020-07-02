import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { userActions } from "store/userState/userState.actions";

import "./style.scss";

export const Authorization = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.fetchUser('skilldill.dev@yandex.ru', '7543221'));
    }, [])

    return (
        <div className="authorization">
            <h1>Start Page</h1>
        </div>
    )
}