import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";

export const LoginForm = () => {
    
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(userActions.fetchUser('skilldill.dev@yandex.ru', '7543221'));
    // }, [])

    return (
        <Form name="login-form">
            <Form.Item name="login">
                <Input size="large" placeholder="login" prefix={<UserOutlined />}/>
            </Form.Item>
            <Form.Item name="password">
                <Input size="large" placeholder="pass" prefix={<KeyOutlined />}/>
            </Form.Item>
            <Form.Item>
                <Button size="large" type="primary" htmlType="submit" block>
                    Log in
                </Button>
            </Form.Item>
        </Form>
    )
}