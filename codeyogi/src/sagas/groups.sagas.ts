
import { GROUPS_QUERY_CHANGED } from "../actions/actions.constants";
import {call, put, takeEvery } from "@redux-saga/core/effects"
import { fetchGroups as fetchGroupsAPI } from "../api/groups";
import { AnyAction } from "redux";
import { queryCompletedAction } from "../actions/groups.action";

export function* fetchGroups(action: AnyAction): Generator<any> {
    const output:any = yield call(fetchGroupsAPI,{query:action.payload, status:"all-groups"});

    yield put(queryCompletedAction(action.payload,output));
}

export function* watchGroupQuerychanged() {
    console.log("watchGroupChanged called");
    yield takeEvery(GROUPS_QUERY_CHANGED,fetchGroups);
}