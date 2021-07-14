import React from "react";
import {FC, memo } from "react";

interface Props{

}

const Login: FC<Props> = (props) => {
    return (
        <div>
            this is login page
            
        </div>
    );
};
    
Login.defaultProps = {

}    

    
export default memo(Login);