import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

import "./style.scss";

export const FullScreenLoading = () => {
    const iconSpin = <LoadingOutlined style={{ fontSize: 40 }} spin />;
    return (
        <div className="full-screen-loading">
            <Spin indicator={iconSpin} />
        </div>
    )
}