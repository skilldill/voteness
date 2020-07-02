import React from "react";
import "./style.scss";

export const RootContainer: React.FC = (props) => {
    const { children } = props;
    return (
        <div className="root-container">
            {children}
        </div>
    )
}