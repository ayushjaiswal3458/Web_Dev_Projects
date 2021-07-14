import React from "react";
import {FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props{

}

const Recordings: FC<Props> = (props) => {
    return (
        <div>
            This is recording page 
        </div>
    );
};
    
Recordings.defaultProps = {

}    

    
export default memo(Recordings);