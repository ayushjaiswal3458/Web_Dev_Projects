
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { groupAction } from "../actions/groups.action";
import { fetchSelectedGroups } from "../api/groups";
import {  groupSelector } from "../selectors/groups.selectors";
import { useAppSelector } from "../store";

interface Props{
   
}

const GroupDetailsPage: React.FC<Props>=(props) => {
    
    const group = useAppSelector(groupSelector);
    const {id} = useParams<any>();
   
    console.log(id);
    useEffect(() => {
        
        fetchSelectedGroups({id:id}).then((group) => {
            groupAction.selectGroup(group);

            groupAction.selectId(id)} );
        
    },[id]

    );
    if(group){
    return (
        <div className=" mt-20 mx-4 rounded-lg bg-gray-400 w-full  ">
            
            <div className="rounded-lg bg-white m-4 p-4">
            <h1 className="text-xl font-semibold ">Group information </h1>
            <div className="my-2 flex">
                <img
                src={group.group_image_url}
                onError={(e: any) => {
                  e.target.onerror = null;
                  e.target.src = "/avatar.jpg";
                }}
                className="w-24 h-24  mr-2 rounded-full"
                alt=" "
              />
              <div className="space-y-3">
              <p>Group Id: {group && group.id}</p>
            <p>Group Name : {group && group.name }</p>
            <p>Group Description : {group && group.description}</p>
            </div>
            </div>
            </div>
        </div>
    );}
    else{
        return <div>group not found</div>
    }

};
GroupDetailsPage.defaultProps={
}

export default React.memo(GroupDetailsPage);
