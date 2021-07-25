import axios from "axios";

axios.interceptors.request.use( ( config) => {
        const token = localStorage.getItem(LS_LOGIN_TOKEN);

        if(!token) {
            return config;
        }
        return {...config, header: {...config.headers, Authorization : token}};
    }
)

interface LoginRequest {
    email: string;
    password: string;
}
interface LoginResponse {
    data: {
        is_2fa_enabled: boolean;
    };
    token: string;
    user: User;
}
export interface User {
    user: {
        id: number,
        first_name: string;
        last_name: string;
        role: "staff" | "admin";

    }
}

const BASE_URL = "https://api-dev.domecompass.com";

export const LS_LOGIN_TOKEN = "login_token";

export const login = (data: LoginRequest) => {
    const url = BASE_URL + "/login";
    console.log(data);
    // return fetch(url, {
    //     method: "POST",
    //     body: JSON.stringify(data),
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    // }).then(
    //     (response) => {
    //         response.json().then((data) => console.log("Response in json format", data));

    //         return response;
    //     }
    // );
    return axios.post < LoginResponse > (url, data).then((response) => {
        console.log(response.data.token);
        localStorage.setItem(LS_LOGIN_TOKEN, response.data.token);
        return response.data.user;


    });
};

export const logout = () => {
    localStorage.removeItem(LS_LOGIN_TOKEN);
}

interface GroupRequest {
    limit ? : number;
    iffset ? : number;
    query ? : string;
    status: "all-groups" | "favourite" | "archived";
}

export interface GroupResponse {
    data: Datum[];
}

export interface Datum {
    id:                   number;
    name:                 string;
    description:          string;
    group_image_url:      string;
}

export const fetchGroups = (data ? : GroupRequest) => {
    const url = BASE_URL + "/groups";

    const token = localStorage.getItem(LS_LOGIN_TOKEN);
    return axios.get<GroupResponse>(url, {
        params: data , headers:{ Authorization : token }
    }).then((response) => {

        console.log(response.data);
    return response.data;});
}