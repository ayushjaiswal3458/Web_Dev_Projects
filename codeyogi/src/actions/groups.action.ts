
import { Group } from "../models/Group";

import { FETCH_ONE_GROUP, FETCH_ONE_GROUP_COMPLETED, GROUPS_QUERY_CHANGED, GROUPS_QUERY_COMPLETED,  SELECT_GROUPID} from "./actions.constants";



export const queryChangedAction = (query : string) => ({
    type:GROUPS_QUERY_CHANGED,
    payload : query
}
);

export const queryCompletedAction = (query: string, groups: Group[] ) => (
    {
        type:GROUPS_QUERY_COMPLETED,
        payload:{query, groups}
    }
);
export const selectId = (id:number) => (
    {type:SELECT_GROUPID,payload: id}
);
export const fetchOneGroup = (id:number) => (
    {type:FETCH_ONE_GROUP , payload: id}
);

export const fetchOneGroupCompleted = (group:Group) => (
    {type:FETCH_ONE_GROUP_COMPLETED, payload:group}
);
