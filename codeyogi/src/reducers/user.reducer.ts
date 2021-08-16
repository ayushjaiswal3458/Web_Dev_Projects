import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/actions.constants";

import { User } from "../models/User";
import { addOne, EntityState, initialEntityState } from "./entity.reducer";


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

            
        default:
            return state;   
        } 

    
}