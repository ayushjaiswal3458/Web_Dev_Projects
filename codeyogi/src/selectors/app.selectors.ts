import { AppState } from "../store";

export const groupsStateSelector = (state: AppState) => state.groups;
export const peopleStateSelector = (state:AppState) => state.people;
export const userStateSelector = (state:AppState) => state.users;
export const authsStateSelector = (state:AppState) => state.auths;