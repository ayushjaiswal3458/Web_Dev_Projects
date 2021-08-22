import React from "react";


import { FC, memo } from "react";


import {  useAppSelector,} from "../store";

import { meSelector } from "../selectors/auth.selectors";


interface Props {
  
  className?:string;
}

const Dashboard: FC<Props> = ({ className }) => {
 


  const user = useAppSelector(meSelector);
  
  
  
  
  return (
    
    <div className={`${className}`}>
      {user && <div className="flex text-2xl m-4 font-medium ">
          <img src = {user.profile_pic_url} onError = {(e:any) => {
                e.target.onerror=null;
                e.target.src="/avatar.jpg"
                
              } } className="mx-4 object-cover w-10 h-10 rounded-full" alt="user profile"  />
        <h1>Welcome {user!.first_name + " " + user!.last_name}</h1>
      </div>}
      
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
