
import { useEffect } from "react";
import {FC, memo } from "react";

interface Props{

}

const AuthHero: FC<Props> = (props) => {
    console.log("authpage rendering");
    useEffect(() => {
        console.log("authpage rendering for the first time");
    })
    return (
        <div className="w-1/2 h-screen bg-blue-500 ">
            <p className="text-white">This is AuthHero</p>
        </div>
    );
};
    
AuthHero.defaultProps = {

}    

    
export default memo(AuthHero);