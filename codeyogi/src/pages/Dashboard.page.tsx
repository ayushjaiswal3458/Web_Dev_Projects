import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {FC, memo } from "react";
import { Link } from "react-router-dom";
import { Datum, fetchGroups } from "../apit";


interface Props{

}

const Dashboard: FC<Props> = (props) => {
    
     const [user,setUser] = useState<Datum[]>([]);
    useEffect(() => {
        fetchGroups( {status: "all-groups"}).then((data) => {
            setUser(data.data);
        });
    }, []);
    
    return (
        
        <div>
            This is a dashboard <Link to="/recording"><span className="text-indigo-400 hover:underline">Got to Recordings</span></Link>
        
        {user.map((profile) =>{
            return (
                <div className="flex w-screen border rounded-sm bg-gray-50 hover:bg-gray-200 h-14">
                    <img alt="" src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg" className="object-cover w-12 h-10 mt-2 mr-2 rounded-full" />
                    <div>
                    <p className="font-medium">{profile.name}</p>
                    <p className="text-sm text-gray-500">{profile.description}</p>
                    </div>
                </div>
            )
        })}
        </div>
        
    );
};
    
Dashboard.defaultProps = {

}    

    
export default memo(Dashboard);