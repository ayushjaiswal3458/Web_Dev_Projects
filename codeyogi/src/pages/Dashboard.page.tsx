import React from "react";
import { useEffect } from "react";

import { FC, memo } from "react";

import { fetchGroups } from "../api/groups";
import Input from "../components/Input/Input";


import Button from "../components/Button/Button"

import { AppState, GROUP_FETCH, GROUP_FETCH_COMPLETED, ME_FETCH, useAppSelector,} from "../store";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../models/User";

interface Props {
  
  className?:string;
}

const Dashboard: FC<Props> = ({ className }) => {
  const query = useAppSelector((state) => state.groupQuery);
  const group = useAppSelector((state) => {
    const groupIds= state.groupQueryMap[state.groupQuery] || [];
    const groups = groupIds.map((id) => state.groups[id]);
    return groups;
  });
  

  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.me);
  
  useEffect(() => {
    fetchGroups({
      status: "all-groups",
      
      query: query,
    }).then((data) => {
      dispatch({type:GROUP_FETCH_COMPLETED, payload:{groups:data.data , query} });
      
    });
  }, [query]); //eslint-disable-line  react-hooks/exhaustive-deps
  let rowColour:string;
  
  
  
  return (
    
    <div className={`${className}`}>
      <div className="flex text-2xl m-4 font-medium ">
          <img src = {user!.profile_pic_url} className="mx-4 object-cover w-10 h-10 rounded-full" alt="user profile"  />
        <h1>Welcome {user!.first_name + " " + user!.last_name}</h1>
      </div>
      <div className="flex m-4">
      <Input
        theme="indigo"
        placeholder="search"
        value={query}
        type="text"
        onChange={(event) => {

        dispatch({type:GROUP_FETCH, payload:event.target.value});}}
        className="w-30 mr-2"
      />
      <Button theme="indigo"  themeClasses="" >Find</Button>
      </div>
      <div className="m-4 ">
      {group!.map((profile,index) => {
        if(index%2 === 0 ){
          rowColour="bg-gray-200";
        } else{
          rowColour="bg-gray-400"
        }
        return (
          <div className={`flex  border rounded-lg mt-2 h-20 w-96 ` + rowColour }>
            <img
              src={profile.group_image_url}
              onError = {(e:any) => {
                e.target.onerror=null;
                e.target.src="/avatar.jpg"
                
              } }
              className="w-12 h-10 mr-2 rounded-full"
              alt=" "
            />
            <div>
              <p className="font-medium">{profile.name}</p>
              <p className="text-sm text-gray-500">{profile.description}</p>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
