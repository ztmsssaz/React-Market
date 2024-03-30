import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        "Content-Type": "application/json",
    },
});


// define the api
const api = instance;
export async function getRequest(url, params) {
    return api.get(url, {
        params: params
    });
}
export async function postRequest(url, body) {
    return api.post(url, body);
}
export async function patchRequest(url, body) {
    return api.patch(url, body);
}
export async function putRequest(url, params = null) {
    return api.put(url, params);
}
export async function deleteRequest(url) {
    return api.delete(url);
}
