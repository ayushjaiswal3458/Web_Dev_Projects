import { AppState } from "../store";

export const meSelector = (state:AppState) => state.auths.id===undefined ? undefined :  state.users.byId[state.auths.id];