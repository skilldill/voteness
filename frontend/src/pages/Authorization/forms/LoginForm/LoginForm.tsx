import React, { useCallback, useState, memo } from "react";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

import { ApiService } from "shared/api";
import { LOCAL_STORAGE_KEYS, ROUTER_URLS } from "shared/constants";
import { useHistory } from "react-router-dom";

export const LoginForm = memo(() => {
    const [load, setLoad] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleSubmit = useCallback(async (values) => {
        const { login, password } = values;

        if (!!login && !!password) {
            setLoad(true);

            try {
                const response = await ApiService.login(login, password);
                const {jwt, user} = response.data;

                // SAVE AUTH DATA
                localStorage.setItem(LOCAL_STORAGE_KEYS.jwt, jwt);
                localStorage.setItem(LOCAL_STORAGE_KEYS.uid, user.id);

                // REDIRECT
                history.push(ROUTER_URLS.lenta);
            } catch (error) {
                message.error('Ошибка при авторизации');
            } finally {
                setLoad(false);
            }
        }
    }, [dispatch]);

    return (
        <Form name="login-form" onFinish={handleSubmit}>
            <Form.Item name="login">
                <Input 
                    autoComplete="off" 
                    size="large" 
                    placeholder="login" 
                    prefix={<UserOutlined />}
                />
            </Form.Item>
            <Form.Item name="password">
                <Input 
                    type="password" 
                    size="large" 
                    placeholder="pass" 
                    prefix={<KeyOutlined />}
                />
            </Form.Item>
            <Form.Item>
                <Button 
                    size="large" 
                    type="primary" 
                    htmlType="submit"
                    loading={load} 
                    block
                >
                    Login
                </Button>
            </Form.Item>
        </Form>
    )
})