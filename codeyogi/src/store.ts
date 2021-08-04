import { group } from "console";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AnyAction, createStore, Reducer } from "redux";
import { Group } from "./models/Group";
import { User } from "./models/User";

export const ME_FETCH = "me/fetch";
export const ME_LOGIN = "me/login";
export const GROUP_FETCH = "group/query";
export const GROUP_FETCH_COMPLETED = "groups/query_completed";
export const SIDEBAR_BOOLEAN ="sidebar/boolean"
export interface AppState {
  me?: User;
  groupQuery: string;
  groupQueryMap: { [query: string]: number[] };
  groups: { [id: number]: Group };
  isSidebarOpen:boolean;
}

const initialState: AppState = {
  me: undefined,
  groupQuery: "",
  groupQueryMap: {},
  groups: {},
  isSidebarOpen:false
};

const reducer: Reducer<AppState, AnyAction> = (
  state = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case ME_FETCH:

    case ME_LOGIN:
      return { ...state, me: action.payload };
    case GROUP_FETCH:
      return { ...state, groupQuery: action.payload };
    case GROUP_FETCH_COMPLETED:
      const groups: Group[] = action.payload.groups;
      const groupIds = groups.map((g) => g.id);

      const groupMap = groups.reduce((prev, group) => {
        return { ...prev, [group.id]: group };
      }, {});
      return {
        ...state,
        groupQueryMap: { ...state.groupQueryMap, [action.payload.query]: groupIds },
        groups: { ...state.groups, ...groupMap },
      };
    case SIDEBAR_BOOLEAN:
        return {...state, isSidebarOpen:action.payload};  
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

export const meFetchAction = (u: User) => ({ type: ME_FETCH, payload: u });

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
