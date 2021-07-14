import React from "react";
import {FC, memo } from "react";

interface Props{
    stepNumber:number;
    title:string;
    children: React.ReactNode;
}

const Step: FC<Props> = (props) => {
    return (
        <div>
            <div className="p-1 rounded-full">{props.stepNumber}</div>
        <div>{props.title}</div>
        <div>{props.children}</div>
        </div>
    );
};
    
Step.defaultProps = {

}    

    
export default memo(Step);