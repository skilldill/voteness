import React, { useState } from "react";
import { Button } from "antd";

import { LoginForm, SigninForm } from "./forms";

import "./style.scss";

export const Authorization = () => {
    const [form, setForm] = useState(<LoginForm />);
    const [toggleBtnText, setToggleBtnText] = useState('Регистрация');

    const handleToggleForm = () => {
        if (toggleBtnText === 'Регистрация') {
            setToggleBtnText('Вход');
            setForm(<SigninForm />);
        } else {
            setToggleBtnText('Регистрация');
            setForm(<LoginForm />);
        }
    }

    return (
        <div className="authorization">
            {form}
            <Button type="link" onClick={handleToggleForm} block>
                {toggleBtnText}
            </Button>
        </div>
    )
}