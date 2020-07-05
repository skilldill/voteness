import React from "react";
import { useParams } from "react-router-dom";

import "./style.scss";
import { MenusContainer } from "core/components";

export const UserPage = () => {
    const { id } = useParams();

    return (
        <MenusContainer>
            <div className="user-page">
                {id}
            </div>
        </MenusContainer>
    )
}