import { Reducer } from "redux";
import { FETCH_ONE_GROUP_COMPLETED, FETCH_ONE_USER, FETCH_ONE_USER_COMPLETED, FETCH_ONE_USER_ERROR, FETCH_USERS, ME_FETCH, ME_LOGIN, SELECT_USERID } from "../actions/actions.constants";
import { Group } from "../models/Group";

import { User } from "../models/User";
import { addMany, addOne, EntityState, initialEntityState, setErrorOne } from "./entity.reducer";


interface UserState extends EntityState<User> {
    
}

const initialState = {
    ...initialEntityState
}

export const userReducer : Reducer<UserState> = (state = initialState,action) => {
    switch (action.type) {
        case ME_FETCH:
        case ME_LOGIN:
            const user = action.payload as User;
            
            // return {...state, byId: {...state.byId, [user.id]:user } };  
            return addOne(state,user) as UserState;  
            case SELECT_USERID:
                return { ...state, selectedId: action.payload };
              case FETCH_USERS:
                  const users = action.payload as User[];
                  
                  return addMany(state,users) as UserState;  
              case FETCH_ONE_USER:
                return {
                  ...state,
                  selectedId: action.payload,
                  loadingOne: true,
                  errorOne: undefined,
                };
              case FETCH_ONE_USER_COMPLETED:
                return addOne(state, action.payload, false) as UserState;
              case FETCH_ONE_USER_ERROR:
                const { id, msg } = action.payload;
          
                return setErrorOne(state, id, msg) as UserState;
              case FETCH_ONE_GROUP_COMPLETED:{
                  const group = action.payload as Group;
                  if(group === undefined ) {
                       return state;
                  }
                const creator = group.creator;
                const participants = group.participants;
                const invitedMembers = group.invitedMembers;
                const participantsById = participants.reduce((prevParticipant, currParticipant) => {
                    return {...prevParticipant, [currParticipant.id]:currParticipant};
                },{});
                const invitedMembersById = invitedMembers.reduce((prevMem, currMem) => {
                    return {...prevMem, [currMem.id]:currMem};
                },{});

                 
                return  {...state, byId:{...state.byId, [creator.id]: creator, ...participantsById, ...invitedMembersById}};    
              }
        default:
            return state;   
        } 

    
}