import React from "react";
import { HtmlHTMLAttributes } from "react";
import {FC, memo } from "react";

interface Props extends HtmlHTMLAttributes<HTMLImageElement>{
className:string;
src:string;
}

const Avatar: FC<Props> = ({className,src}) => {
    return (
        <img src={src} className={"object-cover w-10 rounded-full h-10"+ className} />
            
        
    );
};
    
Avatar.defaultProps = {

}    

    
export default memo(Avatar);