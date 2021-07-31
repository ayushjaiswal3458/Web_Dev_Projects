import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../api/groups";
import Input from "../components/Input/Input";
import { Group } from "../models/Group";
import { User } from "../models/User";
import Button from "../components/Button/Button"

interface Props {
  user: User;
  className?:string;
}

const Dashboard: FC<Props> = ({ user,className }) => {
  const [group, setGroup] = useState<Group[]>([]);
  const [query, setQuery] = useState("");
  const [value,setValue] = useState("");
  
  useEffect(() => {
    fetchGroups({
      status: "all-groups",
      
      query: query,
    }).then((data) => {
      setGroup(data.data);
      console.log(query);
    });
  }, [query]);
  
  


  return (
    
    <div className={`${className}`}>
      <div className="flex text-2xl font-medium ">
          <img src = {user.profile_pic_url} className="object-cover w-10 h-10 rounded-full" alt="user profile"  />
        <h1>Welcome {user.first_name! + " " + user.last_name!}</h1>
      </div>
      <div className="flex">
      <Input
        theme="indigo"
        placeholder="search"
        onChange={(event) => {
        setValue(event.target.value);}}
        className="w-30"
      />
      <Button theme="indigo"  themeClasses="" onClick={() => setQuery(value)}>Find</Button>
      </div>
      {group.map((profile) => {
        return (
          <div className="flex w-screen border rounded-sm bg-gray-50 hover:bg-gray-200 h-14">
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
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
