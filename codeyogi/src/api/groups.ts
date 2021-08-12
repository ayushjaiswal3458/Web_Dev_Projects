import axios, { CancelToken } from "axios";
import { Group } from "../models/Group";


import { BASE_URL, get} from "./base";

export interface GroupRequest {
    limit ? : number;
    offset ? : number;
    query  : string;
    status: "all-groups" | "favourite" | "archived";
    
}

export interface GroupResponse {
    data: Group[];
}

export interface GroupRequestById {
    id:number;
}
export interface GroupResponseById {
    data:Group;
}


export const fetchGroups = (data ? : GroupRequest, token?: CancelToken) => {
    const url = BASE_URL + "/groups";
    return get<GroupResponse>(url, {
        params: data ,cancelToken:token
    });
}

export const fetchSelectedGroups = (data : GroupRequestById ) => {
    const url = BASE_URL + "/groups/" + data.id;
    return axios.get<GroupResponseById>(url,{params:data}).then((response) => response.data.data);
}