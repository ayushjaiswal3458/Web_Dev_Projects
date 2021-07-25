
import {FC, memo } from "react";

import { logout } from "../apit";
import Button from "./Button/Button";


interface Props{

}

const Sidebar: FC<Props> = (props) => {
    
    return (
        <div>
        <div className="h-screen bg-gray-300 w-80 ">
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