import { AppState } from "../store";

export const groupStateSelector = (state: AppState) => state.groups;

export const userStateSelector = (state:AppState) => state.users;
export const authsStateSelector = (state:AppState) => state.auths;