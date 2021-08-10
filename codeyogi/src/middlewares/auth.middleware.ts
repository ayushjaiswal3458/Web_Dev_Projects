import { authActions } from "../actions/auth.action";
import {me as meAPI } from "../api/auth";

export const me = () => {
    // authActions.fetching();
    meAPI().then((u) => authActions.fetch(u));
};