import { createSelector } from "reselect";
// import { AppState } from "../store";
import { groupsStateSelector } from "./app.selectors";

// export const groupQuerySelector = (state: AppState) => {
//     const groupState = groupStateSelector(state);
//     return groupState.query;
// };

// export const groupsSelector=(state:AppState)=>{
//     const groupIds=state.groups.queryMap[state.groups.query] || [];
//     const groups=groupIds.map(id=>state.groups.byId[id]);
//     return groups;
// }


export const groupQuerySelector = createSelector([groupsStateSelector],
    (groupState) => groupState.query);


export const groupQueryMapSelector = createSelector([groupsStateSelector],(groupState)=>groupState.queryMap);

export const groupByIdSelector = createSelector([groupsStateSelector],(groupState)=>groupState.byId);

export const groupIdSelector = createSelector([groupsStateSelector] , (groupState) => {
    console.log("id slected");
    return groupState.selectedId;
});

// export const groupSelector = (state: AppState) => {
//     const query = groupQuerySelector(state);

//     const queryMap=groupQueryMapSelector(state);
//     const byId=groupByIdSelector(state)

//     const groupsIds = queryMap[query] || [];
//     const groups = groupsIds.map((id)=>byId[id]);
//     return groups;
// }
export const groupsLoadingSelector = createSelector([groupsStateSelector] , (groupState) => groupState.loadingList);



export const groupsSelector = createSelector(
    [groupQuerySelector, groupByIdSelector, groupQueryMapSelector], (query, byId, queryMap) => {

        const groupsIds = queryMap[query] || [];
        const groups = groupsIds.map((id) => byId[id]);
        
        return groups;
    })

export const groupSelector = createSelector([groupIdSelector,groupByIdSelector] ,(id, byId ) =>  id && byId[id]);

 
export const nextIdSelector = createSelector([groupsStateSelector] ,(groupState) => groupState.nextId);
export const prevIdSelector = createSelector([groupsStateSelector] ,(groupState) => groupState.prevId);

export const groupLoadingSelector = createSelector([groupsStateSelector],(state) => state.loadingOne);
export const groupOneErrorSelector = createSelector([groupsStateSelector], (state) => state.errorOne);