
import { peopleStateSelector } from './app.selectors';
import { createSelector } from 'reselect';
export const usersByIdSelector = createSelector([peopleStateSelector],(state) => state.byId);
export const usersSelector = createSelector([usersByIdSelector],(byId) => {
    const idsArray = Object.keys(byId);
    console.log(idsArray);
    const ids:number[] = [];
    idsArray.map((id,index) => {
        return ids.push(+id);
    })
    return ids.map((id) => byId[id]);
});
export const userIdSelector = createSelector([peopleStateSelector], (state) => state.selectedId);

export const userSelector = createSelector([userIdSelector,usersByIdSelector] ,(id,byId) => id && byId[id] );
