import React from "react";
import { useEffect } from "react";

import { FC, memo } from "react";

import { fetchGroups } from "../api/groups";
import Input from "../components/Input/Input";


import Button from "../components/Button/Button"

import {  useAppSelector,} from "../store";
import { useDispatch} from "react-redux";

import { groupAction } from "../actions/groups.action";
import { groupQuerySelector, groupSelector } from "../selectors/groups.selectors";

interface Props {
  
  className?:string;
}

const Dashboard: FC<Props> = ({ className }) => {
  const query = useAppSelector(groupQuerySelector);
  const group = useAppSelector(groupSelector);
  

  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.users.byId[state.auths.id]);
  
  useEffect(() => {
    fetchGroups({
      status: "all-groups",
      
      query: query,
    }).then((data) => {
      dispatch(groupAction.queryCompleted(query,data.data));
      
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

        dispatch(groupAction.query(event.target.value))
      }}
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
