import {
  FETCH_ONE_GROUP,
  FETCH_ONE_GROUP_COMPLETED,
  FETCH_ONE_GROUP_ERROR,
} from "./../actions/actions.constants";
import { Reducer } from "redux";
import {
  GROUPS_QUERY_CHANGED,
  GROUPS_QUERY_COMPLETED,
  SELECT_GROUPID,
} from "../actions/actions.constants";

import { Group } from "../models/Group";
import {
  addMany,
  addOne,
  EntityState,
  getIds,
  initialEntityState,
  select,
  setErrorOne,
} from "./entity.reducer";

interface GroupState extends EntityState<Group> {
  query: string;

  queryMap: { [query: string]: number[] };

  creators: { [groupId: number]: number };
  participants: { [groupId: number]: number[] };
  invitedMembers: { [groupId: number]: number[] };
  //one to many
  // members: { [groupId : number] : number[]}; //many to many User<>Group
}

const initialState = {
  ...initialEntityState,
  query: "",
  queryMap: {},
  creators: {},
  participants: {},
  invitedMembers: {},
};

export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUPS_QUERY_CHANGED:
      const query = action.payload;
      return { ...state, query: query, loadingList: true };
    case GROUPS_QUERY_COMPLETED:
      const groups = action.payload.groups as Group[];

      const groupIds = getIds(groups);

      const newState = addMany(state, groups) as GroupState;
      return {
        ...newState,
        queryMap: {
          ...newState.queryMap,
          [action.payload.query]: groupIds,
        },
        loadingList: false,
      };
    case SELECT_GROUPID:
      return { ...state, selectedId: action.payload };

    case FETCH_ONE_GROUP:
      const currId = action.payload as number;
      if (state.selectedId === currId) {
        
        return state;
      }
      let nextId = currId;
      let prevId = currId;
      try {
        const groupIdsArray = state.queryMap[state.query];
        
        const currIndex = groupIdsArray.indexOf(currId);
        if (currIndex !== 0) {
          prevId = groupIdsArray[currIndex - 1];
        }
        if (currIndex !== groupIdsArray.length - 1) {
          nextId = groupIdsArray[currIndex + 1];
        }
      } catch (e) {
        console.log("page reloaded query deleted so next and previous wont work");
      }
      console.log("new state");
      return select(state, currId, nextId, prevId) as GroupState;

    case FETCH_ONE_GROUP_COMPLETED:
      const group = action.payload as Group;
      
      const creatorId = group.creator!.id;
      const participantsIds = group.participants.map(
        (participant) => participant.id
      );
      const invitedMembersIds = group.invitedMembers.map((member) => member.id);
      const newGroupState = addOne(state, group, false) as GroupState;
      return {
        ...newGroupState,
        creators: { ...newGroupState.creators, [group.id]: creatorId },
        participants: {
          ...newGroupState.participants,
          [group.id]: participantsIds,
        },
        invitedMembers: {
          ...newGroupState.invitedMembers,
          [group.id]: invitedMembersIds,
        },
      };
    case FETCH_ONE_GROUP_ERROR:
      const { id, msg } = action.payload;

      return setErrorOne(state, id, msg) as GroupState;

    default:
      return state;
  }
};
