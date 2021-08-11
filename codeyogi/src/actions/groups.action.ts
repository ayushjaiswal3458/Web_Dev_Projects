import { bindActionCreators } from "redux";
import { Group } from "../models/Group";
import store from "../store";
import { GROUPS_QUERY_CHANGED, GROUPS_QUERY_COMPLETED, SELECT_GROUP, SELECT_GROUPID } from "./actions.constants";



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
