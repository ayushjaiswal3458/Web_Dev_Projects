import React, { ButtonHTMLAttributes } from "react";
import { FC, memo } from "react";
import { ImSpinner9 } from "react-icons/im";
import Solid from "./OutlineButton";


interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: "indigo" | "gray" | "blue" | "green" | "yellow";
  children:string;
  themeClasses:string;
}

const Button: FC<Props> = ({ className,theme,themeClasses,children, ...rest }) => {
//   const themeClasses = "primary "
//     ? "bg-indigoish focus:ring-indigoish "
//     : "bg-grayish focus:ring-grayish ";
if(theme==="indigo"){
    themeClasses="bg-indigoish ";
}else if(theme==="gray"){
    themeClasses="bg-grayish ";
}else if(theme==="blue"){
    themeClasses="bg-blueish ";
}else if(theme==="green"){
    themeClasses="bg-greenish ";
}else if(theme==="yellow"){
    themeClasses="bg-yellowish  ";
}
 
  return (
    <button
      {...rest}
      className={
        "text-white  rounded-md  px-5 py-1.75 hover:shadow-none ease-in-out duration-200  text-sm  shadow-xl transform " +
        themeClasses! +
        className
      }
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: "indigo",
};

export default memo(Button);
