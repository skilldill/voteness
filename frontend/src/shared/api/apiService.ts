import axios from "axios";

import { httpClient } from "./httpClient";
import { API_URLS } from "shared/constants";
import { UserInfo } from "shared/models/userModel";

export class ApiService {
    static login(login: string, password: string) {
        return httpClient.post(API_URLS.auth, { identifier: login, password });
    }

    static getUserInfo(uid: string) {
        const url = `${API_URLS.userInfo}/${uid}`;
        return httpClient.get(url);
    }

    static createUserInfo(userInfo: UserInfo) {
        return httpClient.post(API_URLS.userInfo, { ...userInfo });
    }

    static updateUserInfo(userInfo: UserInfo) {
        const url = `${API_URLS.userInfo}/${userInfo.id}`;
        return httpClient.put(url, { ...userInfo });
    }
}