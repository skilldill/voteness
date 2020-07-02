import axios from "axios";

import { API_URLS } from "shared/constants";

export const httpClient = axios.create({
    baseURL: API_URLS.base
})