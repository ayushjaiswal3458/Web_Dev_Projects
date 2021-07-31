
import {FC, memo } from "react";

import { logout } from "../api/auth";
import Button from "./Button/Button";


interface Props{
    className?:string;
}

const Sidebar: FC<Props> = ({className}) => {
    
    return (
        <div>
        <div className={`h-screen w-48 pr-5   bg-gray-200  ${className}` }>
            This is sidebar
            <Button theme="indigo"  themeClasses=" " onClick={() => {logout();
            window.location.href = "/login";}}>Log out</Button>
        </div>
        </div>
    );
};
    
Sidebar.defaultProps = {

}    

    
export default memo(Sidebar);