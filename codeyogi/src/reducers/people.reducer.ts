import {
  FETCH_ONE_GROUP_COMPLETED,
  FETCH_ONE_USER,
  FETCH_ONE_USER_COMPLETED,
  FETCH_ONE_USER_ERROR,
  FETCH_USERS,
} from "./../actions/actions.constants";
import { Reducer } from "redux";
import { SELECT_USERID } from "../actions/actions.constants";

import { People } from "../models/People";
import {
    addMany,
  addOne,
  EntityState,
  
  initialEntityState,
  setErrorOne,
} from "./entity.reducer";

interface PeopleState extends EntityState<People> {}

const initialState = {
  ...initialEntityState,

};

export const peopleReducer: Reducer<PeopleState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SELECT_USERID:
      return { ...state, selectedId: action.payload };
    case FETCH_USERS:
        const users = action.payload as People[];
        
        return addMany(state,users) as PeopleState;  
    case FETCH_ONE_USER:
      return {
        ...state,
        selectedId: action.payload,
        loadingOne: true,
        errorOne: undefined,
      };
    case FETCH_ONE_USER_COMPLETED:
      return addOne(state, action.payload, false) as PeopleState;
    case FETCH_ONE_USER_ERROR:
      const { id, msg } = action.payload;

      return setErrorOne(state, id, msg) as PeopleState;
    case FETCH_ONE_GROUP_COMPLETED:
      return addOne(state,action.payload.creator) as PeopleState;  
    default:
        return state;  
  }
};
