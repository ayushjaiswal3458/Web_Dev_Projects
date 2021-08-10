import { bindActionCreators } from "redux";
import { Group } from "../models/Group";
import store from "../store";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED, SELECT_GROUP, SELECT_GROUPID } from "./actions.constants";



export const queryAction = (query : string) => ({
    type:GROUPS_QUERY,
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
export const selectedGroup = (group:Group) => (
    {type:SELECT_GROUP , payload: group}
);
export const groupAction = bindActionCreators({
    query : queryAction,
    queryCompleted: queryCompletedAction,
    selectId:selectId,
    selectGroup:selectedGroup
}, store.dispatch);
