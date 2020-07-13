import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import { useParams } from "react-router-dom";
import { notification } from "antd";

import "./style.scss";
import { ApiService } from "shared/api"
import { MenusContainer } from "core/components";

export const UserInfoForm = () => {
    const [load, setLoad] = useState(false);
    const { id } = useParams();

    const handleSubmit = useCallback(async (values: any) => {
        setLoad(true);

        try {
            await ApiService.createUserInfo({ id, ...values });
            notification.success({
                message: 'Данные успешно обновленны'
            })
        } catch(error) {
            notification.success({
                message: 'Произошла ошибка при обновлении данных'
            })
        } finally {
            setLoad(false);
        }
    }, []);

    return (
        <MenusContainer>
            <div className="user-info-form">
                <Form name="user-info-form" onFinish={handleSubmit}>
                    <Form.Item name="name">
                        <Input 
                            autoComplete="off" 
                            size="large" 
                            placeholder="name" 
                        />
                    </Form.Item>
                    <Form.Item name="surname">
                        <Input 
                            autoComplete="off" 
                            size="large" 
                            placeholder="surname" 
                        />
                    </Form.Item>
                    <Form.Item name="description">
                        <Input 
                            autoComplete="off" 
                            size="large" 
                            placeholder="description..." 
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
                            Update
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </MenusContainer>
    )
}