
import { GROUPS_QUERY_CHANGED } from "../actions/actions.constants";
import {call, put, takeLatest,delay} from "@redux-saga/core/effects"
import { fetchGroups as fetchGroupsAPI } from "../api/groups";
import { AnyAction } from "redux";
import { queryCompletedAction } from "../actions/groups.action";

export function* fetchGroups(action: AnyAction): Generator<any> {
    
    yield delay(1000);
    const groupRes:any = yield call(fetchGroupsAPI,{query:action.payload, status:"all-groups"});

    yield put(queryCompletedAction(action.payload, groupRes.data.data));
}

export function* watchGroupQuerychanged() {
    console.log("watchGroupChanged called");
    yield takeLatest(GROUPS_QUERY_CHANGED,fetchGroups);
}