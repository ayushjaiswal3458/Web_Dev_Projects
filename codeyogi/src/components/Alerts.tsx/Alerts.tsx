
import { ButtonHTMLAttributes } from "react";
import {FC, memo } from "react";
import { IoClose } from "react-icons/io5";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
strong:string;
children:string;
theme: "indigo" | "gray" | "blue" | "green" | "yellow";
themeClasses:string;

}

const Alert: FC<Props> = ({strong,theme,themeClasses,children,className,...rest}) => {
    if(theme==="indigo"){
        themeClasses="bg-indigoish text-indigoish ";
    }else if(theme==="gray"){
        themeClasses="bg-grayish text-grayish ";
    }else if(theme==="blue"){
        themeClasses="bg-blueish text-blueish ";
    }else if(theme==="green"){
        themeClasses="bg-greenish text-greenish ";
    }else if(theme==="yellow"){
        themeClasses="bg-yellowish text-yellowish ";
    }
    return ( 
        <div className={"p-3.74 bg-opacity-10 flex " + themeClasses + className } >
            <strong>{strong}</strong>{children}
            <button
            {...rest}
            >
                <IoClose />
            </button>
        </div >
    );
};
    
Alert.defaultProps = {
theme:"indigo"
}    

    
export default memo(Alert);