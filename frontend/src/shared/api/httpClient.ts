import axios from "axios";

import { API_URLS } from "shared/constants";

export let httpClient = axios.create({
    baseURL: API_URLS.base
})

export const updateHttpClient = (headers: any) => {
    httpClient = axios.create({
        baseURL: API_URLS.base,
        headers
    })
}