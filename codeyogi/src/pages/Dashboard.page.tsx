import React from "react";
import {FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props{

}

const Dashboard: FC<Props> = (props) => {
    return (
        <div>
            This is a dashboard <Link to="/recording"><span className="text-indigo-400 hover:underline">Got to Recordings</span></Link>
        </div>
    );
};
    
Dashboard.defaultProps = {

}    

    
export default memo(Dashboard);