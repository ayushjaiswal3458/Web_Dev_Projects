
import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { SIDEBAR_BOOLEAN, useAppSelector } from "./store";

interface Props{
   
}

const NavTwo: React.FC<Props>=(props) => {
    const isSidebar = useAppSelector((state) => state.isSidebarOpen);
    const dispatch = useDispatch();
    return (
        <nav className="fixed py-2.5 bg-white h-14 z-20 shadow-lg w-screen top-13.45">
            <button onClick={ () => dispatch({type:SIDEBAR_BOOLEAN,payload:!isSidebar})}>
                <IoReorderThreeOutline className="w-8 h-8 mr-6 ml-8 " />
            </button>
        </nav>
    );

};
NavTwo.defaultProps={
}

export default React.memo(NavTwo);
