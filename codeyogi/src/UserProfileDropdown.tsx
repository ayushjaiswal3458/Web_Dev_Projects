import { Menu } from "@headlessui/react";
import React, { Fragment } from "react";
import {FC, memo } from "react";
import { FiInbox, FiLock, FiUser } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";


import { Link } from "react-router-dom";
import { logout } from "./api/auth";


import {   useAppSelector} from "./store";

interface Props{
className?:string;

}


const UserProfileDropdown: FC<Props> = ({className}) => {
    
    const user = useAppSelector((state) => state.users.byId[state.auths.id]);
    console.log(user);
    
    return (
        <Menu as="div" className={` ${className}`}>
            <Fragment >
            <Menu.Button className="bg-white "  >
                <img src={user!.profile_pic_url} alt="" className="object-cover rounded-lg w-7 h-7" />
            </Menu.Button>
            <Menu.Items className="absolute right-0 w-48 h-40 bg-white rounded-lg shadow-lg outline-none">
                <Menu.Item>
                    { ({active }) => (
                        <Link to="/profile" className={`py-2 flex px-3.5 ${active ? "text-indigoish" : "text-black" } `} >
                            <FiUser className = {`w-4 h-4 mt-2 ${active ? "text-indigoish" : "text-black" } `} />
                            Profile
                        </Link>
                            
                    ) }
                </Menu.Item>
                <Menu.Item>
                    { ({active }) => (
                        <a href="google.com" className={`py-2 flex px-3.5 ${active ? "text-indigoish" : "text-black" } `} >
                            <FiInbox className = {`w-4 h-4 mt-2 ${active ? "text-indigoish" : "text-black" } `} />
                            Inbox
                        </a>
                            
                    ) }
                </Menu.Item>
                <Menu.Item>
                    { ({active }) => (
                        <a href="google.com" className={`py-2 flex px-3.5 ${active ? "text-indigoish" : "text-black" } `} >
                            <FiLock className = {`w-4 h-4 mt-2 ${active ? "text-indigoish" : "text-black" } `} />
                            Lock screen
                        </a>
                            
                    ) }
                </Menu.Item>
                <Menu.Item>
                    { ({active }) => (
                        <button  onClick={() => { logout();
                            window.location.href = "/login";}} className={`py-2 flex px-3.5 ${active ? "text-indigoish" : "text-black" } `} >
                            <IoExitOutline className = {`w-4 h-4 mt-2 ${active ? "text-indigoish" : "text-black" } `} />
                            Sign Out
                        </button>
                            
                    ) }
                </Menu.Item>
                
            </Menu.Items>
            </Fragment>
        </Menu>
    );
};
    
UserProfileDropdown.defaultProps = {

}    

    
export default memo(UserProfileDropdown);