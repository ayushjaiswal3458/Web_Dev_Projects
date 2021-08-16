import { FETCH_ONE_USER, FETCH_ONE_USER_COMPLETED, FETCH_ONE_USER_ERROR, SELECT_USERID, FETCH_USERS, FETCH_PEOPLE } from './actions.constants';
import { People } from './../models/People';






export const selectId = (id:number) => (
    {type:SELECT_USERID,payload: id}
);
export const fetchOneUser = (id:number) => (
    {type:FETCH_ONE_USER , payload: id}
);

export const fetchOneUserCompleted = (User:People) => (
    {type:FETCH_ONE_USER_COMPLETED, payload:User}
);

export const fetchOneUserError = (id:number, msg:string) => ({
    type:FETCH_ONE_USER_ERROR,payload:{id,msg}
});

export const fetchUsersAction = (users:People[]) => ({
    type:FETCH_USERS , payload:users
});

export const fetchPeople = () => ({
    type:FETCH_PEOPLE
})

