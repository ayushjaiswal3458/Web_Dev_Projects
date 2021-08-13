import { all, fork } from '@redux-saga/core/effects';
import createSagaMiddleware from "redux-saga";
import { watchAuth } from './auths.sagas';
import { watchGroupQuerychanged } from "./groups.sagas";

export const sagaMiddleware = createSagaMiddleware();

export function* rootSaga() {
    yield all([fork(watchGroupQuerychanged),fork(watchAuth)])
}