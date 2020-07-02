import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Anchor, Tabs } from "antd";

import { userActions } from "store/userState/userState.actions";
import { LoginForm, SigninForm } from "./forms";

import "./style.scss";

export const Authorization = () => {
    return (
        <div className="authorization">
            <Tabs defaultActiveKey="1" tabPosition="top">
                <Tabs.TabPane tab="Login" key="1">
                    <LoginForm />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Signin" key="2">
                    <SigninForm />
                </Tabs.TabPane>
            </Tabs>
        </div>
    )
}