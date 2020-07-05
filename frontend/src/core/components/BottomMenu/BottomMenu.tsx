import React, { useMemo } from "react";
import { useHistory } from "react-router-dom";
import Icon, { HomeOutlined, PlusSquareOutlined, UserOutlined, SettingOutlined, SearchOutlined } from "@ant-design/icons";

import "./style.scss";
import { ROUTER_URLS, LOCAL_STORAGE_KEYS } from "shared/constants";

export const BottomMenu = () => {
    const history = useHistory();

    const items = useMemo(() => {
        const uid = localStorage.getItem(LOCAL_STORAGE_KEYS.uid);
        const pathToProfileVotes = uid ? ROUTER_URLS.user.replace(':id', uid) : '';

        return [
            { path: ROUTER_URLS.lenta, icon: <HomeOutlined /> },
            { path: pathToProfileVotes, icon: <UserOutlined /> },
            { path: ROUTER_URLS.addForm, icon: <PlusSquareOutlined /> },
            { path: ROUTER_URLS.search, icon: <SearchOutlined /> },
            { path: ROUTER_URLS.settings, icon: <SettingOutlined /> }
        ]
    }, []);

    return (
        <div className="bottom-menu">
            {items.map((item, i) => 
                <div key={i} className="menu-item" onClick={() => history.push(item.path)}>
                    {item.icon}
                </div>
            )}
        </div>
    )
}