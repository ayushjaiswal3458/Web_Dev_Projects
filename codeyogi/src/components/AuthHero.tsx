
import { useEffect } from "react";
import {FC, memo } from "react";
import Auth from "../shield.webp";

interface Props{

}

const AuthHero: FC<Props> = (props) => {
    console.log("authpage rendering");
    useEffect(() => {
        console.log("authpage rendering for the first time");
    })
    return (
        <div className="hidden w-1/2 h-screen Auth:inline bg-AuthHero ">
            <img src={Auth} className="object-cover mx-auto my-24 h-96 w-96" />
            
        </div>
    );
};
    
AuthHero.defaultProps = {

}    

    
export default memo(AuthHero);