import axios from "axios";
import { Group } from "../models/Group";

import { BASE_URL, LS_AUTH_TOKEN } from "./base";

interface GroupRequest {
    limit ? : number;
    offset ? : number;
    query ? : string;
    status: "all-groups" | "favourite" | "archived";
    
}

export interface GroupResponse {
    data: Group[];
}



export const fetchGroups = (data ? : GroupRequest) => {
    const url = BASE_URL + "/groups";

    const token = localStorage.getItem(LS_AUTH_TOKEN);
    return axios.get<GroupResponse>(url, {
        params: data 
    }).then((response) => {

        console.log(response.data);
    return response.data;});
}