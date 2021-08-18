import {
  FETCH_ONE_GROUP,
  GROUPS_QUERY_CHANGED,
} from "../actions/actions.constants";
import {
  call,
  put,
  takeLatest,
  delay,
  takeEvery,
  all,
} from "@redux-saga/core/effects";
import { fetchGroups as fetchGroupsAPI, fetchOneGroup } from "../api/groups";
import { AnyAction } from "redux";
import {
  fetchOneGroupCompleted,
  fetchOneGroupError,
  queryCompletedAction,
} from "../actions/groups.action";

function* fetchGroups(action: AnyAction): Generator<any> {
  yield delay(1000);
  
  const groupRes: any = yield call(fetchGroupsAPI, {
    query: action.payload,
    status: "all-groups",
  });
  
  yield put(queryCompletedAction(action.payload, groupRes.data.data));
}

function* fetchOne(action: AnyAction): Generator<any> {
  try {
    
    const groupRes: any = yield call(fetchOneGroup, action.payload);
    
    yield put(fetchOneGroupCompleted(groupRes.data.data));
    
  } catch (e) {
    const error = e.response?.data?.message || "Some error occured";

    yield put(fetchOneGroupError(action.payload, error));
  }
}

export function* watchGroupQuerychanged() {
  yield all([
    takeLatest(GROUPS_QUERY_CHANGED, fetchGroups),
    takeEvery(FETCH_ONE_GROUP, fetchOne),
  ]);
}
