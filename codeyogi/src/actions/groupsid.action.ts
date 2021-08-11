import { bindActionCreators } from 'redux';
import store from '../store';
import { Group } from './../models/Group';
import { SELECT_GROUP, SELECT_GROUPID } from './actions.constants';

export const selectId = (id:number) => (
    {type:SELECT_GROUPID,payload: id}
);
export const selectedGroup = (group:Group) => (
    {type:SELECT_GROUP , payload: group}
);
export const groupAction = bindActionCreators({

    selectId:selectId,
    selectGroup:selectedGroup
}, store.dispatch);
