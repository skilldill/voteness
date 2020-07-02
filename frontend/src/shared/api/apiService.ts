import { httpClient } from "./httpClient";
import { API_URLS } from "shared/constants";

export class ApiService {
    static login(login: string, password: string) {
        return httpClient.post(API_URLS.auth, { identifier: login, password });
    }
}