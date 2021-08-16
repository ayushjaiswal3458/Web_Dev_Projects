import { FETCH_ONE_GROUP, FETCH_ONE_GROUP_COMPLETED, FETCH_ONE_GROUP_ERROR } from './../actions/actions.constants';
import { Reducer } from "redux";
import { GROUPS_QUERY_CHANGED, GROUPS_QUERY_COMPLETED, SELECT_GROUPID } from "../actions/actions.constants";

import { Group } from "../models/Group";
import { addMany, addOne, EntityState, getIds, initialEntityState, select, setErrorOne} from "./entity.reducer";

interface GroupState extends EntityState<Group>{
  
  query: string;
  
  queryMap: { [query: string]: number[] };
  
}

const initialState = {
 ...initialEntityState,
  query: "",
  queryMap: {},
  
  
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUPS_QUERY_CHANGED:
      const query = action.payload;
      return { ...state, query: query ,loadingList: true};
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
        loadingList : false
      }
    case SELECT_GROUPID:
      
      
      return {...state, selectedId:action.payload};  

    case FETCH_ONE_GROUP:
      const currId = action.payload as number;;
      let nextId= currId;
      let prevId= currId;
      try{
      const groupIdsArray = state.queryMap[state.query];
      console.log(state.selectedId,currId);
      if(state.selectedId===currId){
        return state;
      }
      const currIndex = groupIdsArray.indexOf(currId);
      if(currIndex!==0){
        prevId = groupIdsArray[currIndex - 1];
      }if(currIndex !== groupIdsArray.length -1 ){
        nextId = groupIdsArray[currIndex + 1];
      }
    }catch(e){
      console.log(e);
    }
      return   select(state,currId, nextId, prevId) as GroupState;

    case FETCH_ONE_GROUP_COMPLETED:
      
      return addOne(state,action.payload,false) as GroupState; 
    case FETCH_ONE_GROUP_ERROR:
      const {id, msg} =action.payload;
      
      return setErrorOne(state,id,msg) as GroupState;
    default:
        return state;  
  }
};
