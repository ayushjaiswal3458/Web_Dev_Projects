import { groupAction } from "../actions/groups.action";
import { GroupRequest,fetchGroups as fetchGroupApi } from "../api/groups";
import { groupQueryLoadingSelector } from "../selectors/groups.selectors";
import store from "../store";

export const fetchGroups = ( request : GroupRequest) => {
    const queryLoading = groupQueryLoadingSelector(store.getState());
    const query = request.query;
    const loading = queryLoading[query];
    groupAction.query(query);

    if(loading ){
        return;
    }
    fetchGroupApi(request).then((response) => {
        groupAction.queryCompleted(query,response.data);
    });
};