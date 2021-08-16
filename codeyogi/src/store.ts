import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore, Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/auth.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { peopleReducer } from "./reducers/people.reducer";

import { userReducer } from "./reducers/user.reducer";
import { rootSaga, sagaMiddleware } from "./sagas";


//   me?: User;
//   groupQuery: string;
//   groupQueryMap: { [query: string]: number[] };
//   groups: { [id: number]: Group };
//   isSidebarOpen:boolean;
// }

interface SidebarState {
  isSidebarOpen: boolean;
}
const initialState = {
  isSidebarOpen: false,
};
export const sidebarReducer: Reducer<SidebarState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "sidebar/boolean":
      return { ...state, isSidebarOpen: action.payload };
    default:
      return state;
  }
};

const reducer = combineReducers({
  users: userReducer,
  groups: groupReducer,
  people:peopleReducer,
  auths: authReducer,
  sidebar: sidebarReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);


export type AppState = ReturnType<typeof reducer>; //or type AppState = ReturnType<typeof store.getState>;

export default store;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
