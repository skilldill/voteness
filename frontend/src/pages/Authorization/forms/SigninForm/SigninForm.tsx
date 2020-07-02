import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, KeyOutlined } from "@ant-design/icons";

export const SigninForm = () => {
    return (
        <Form name="signin-form">
            <Form.Item name="email">
                <Input size="large" placeholder="email" prefix={<UserOutlined />}/>
            </Form.Item>
            <Form.Item name="password">
                <Input size="large" placeholder="pass" prefix={<KeyOutlined />}/>
            </Form.Item>
            <Form.Item name="repeat-password">
                <Input size="large" placeholder="repeat pass" prefix={<KeyOutlined />}/>
            </Form.Item>
            <Form.Item>
                <Button size="large" type="primary" htmlType="submit" block>
                    Sigin
                </Button>
            </Form.Item>
        </Form>
    )
}