import React from "react";

import "./style.scss";
import { BottomMenu } from "../BottomMenu";

export const MenusContainer: React.FC = (props) => {
    const { children } = props;

    return (
        <div className="menus-container">
            {children}
            <BottomMenu />
        </div>
    )
}