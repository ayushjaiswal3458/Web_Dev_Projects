
import {FC, memo } from "react";
import { Link } from "react-router-dom";


interface Props{
    className?:string;
}

const Sidebar: FC<Props> = ({className}) => {
    
    return (
        <div>
        <div className={`h-screen w-48 pr-5 flex flex-col   bg-gray-200  ${className}` }>
        <button className=" mt-6 rounded-lg hover:bg-indigoish hover:text-white " ><Link to ="/dashboard" >Dashboard</Link></button>
            <button className=" mt-6 block rounded-lg hover:bg-indigoish hover:text-white " ><Link to ="/groups" >groups</Link></button>
            
        </div>
        </div>
    );
};
    
Sidebar.defaultProps = {

}    

    
export default memo(Sidebar);