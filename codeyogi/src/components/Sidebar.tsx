
import {FC, memo } from "react";
import { Link } from "react-router-dom";


interface Props{
    className?:string;
}

const Sidebar: FC<Props> = ({className}) => {
    
    return (
        <div>
        <div className={`h-screen w-48 pr-5   bg-gray-200  ${className}` }>
            <button className="px-5 py-2 bg-white m-10 rounded-lg hover:bg-indigoish hover:text-white " ><Link to ="/groups" >groups</Link></button>
        </div>
        </div>
    );
};
    
Sidebar.defaultProps = {

}    

    
export default memo(Sidebar);