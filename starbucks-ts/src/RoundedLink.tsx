import React from "react";
import { AnchorHTMLAttributes } from "react";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
    theme: 'white' | 'black';
    
}

const RoundedLink: React.FC<Props> =(props,theme, ...rest) => {
    const themeClass =
       theme === "white" ? " border-white text-white" : "text-primary-500 border-black";
      
    return (
      <a {...rest}
       className={
           "flex-shrink-0 px-4 py-2 text-sm font-semi border rounded-full "
           + props.className + themeClass
           }
           >{props.children}   
      </a>
    );
  }

  RoundedLink.defaultProps={
      theme:'black',
  }
  
  export default RoundedLink;
  