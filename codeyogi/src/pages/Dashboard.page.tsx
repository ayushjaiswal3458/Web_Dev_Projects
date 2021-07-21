import React from "react";
import {FC, memo } from "react";
import { Link } from "react-router-dom";
import Avatars from "../components/Card.tsx/Avatars";

interface Props{

}

const Dashboard: FC<Props> = (props) => {
    const avatars=["\avatar.jpg","\avatar.jpg","\avatar.jpg","\avatar.jpg","\avatar.jpg","\avatar.jpg","\avatar.jpg","\avatar.jpg","\avatar.jpg"];
    return (
        <div>
            This is a dashboard <Link to="/recording"><span className="text-indigo-400 hover:underline">Got to Recordings</span></Link>
        <Avatars theme="indigo"  profiles={avatars} />
        </div>
        
    );
};
    
Dashboard.defaultProps = {

}    

    
export default memo(Dashboard);