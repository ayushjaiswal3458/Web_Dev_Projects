import { Reducer } from "redux";
import { GROUPS_QUERY, GROUPS_QUERY_COMPLETED, SELECT_GROUP, SELECT_GROUPID } from "../actions/actions.constants";

import { Group } from "../models/Group";
import { addMany, addOne, EntityState, getIds } from "./entity.reducer";

interface GroupState extends EntityState<Group>{
  
  query: string;
  loading:boolean;
  queryMap: { [query: string]: number[] };
  selectedId?:number;
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
  loading:false
  
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUPS_QUERY:
      const query = action.payload;
      return { ...state, query: query ,loading: true};
    case GROUPS_QUERY_COMPLETED:
      const groups = action.payload.groups as Group[];

      const groupIds = getIds(groups);

      const newState = addMany(state, groups) as GroupState
      ;
      return {
        ...newState , 
        queryMap: {
          ...newState.queryMap,
          [action.payload.query] : groupIds ,
        },
        loading : false
      }
    case SELECT_GROUPID:
      return {...state, selectedId:action.payload};  

    case SELECT_GROUP:
      const group = action.payload as Group;
      return addOne(state, group ) as GroupState; 
    default:
        return state;  
  }
};
