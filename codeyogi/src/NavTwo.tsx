
import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useAppSelector } from "./store";




interface Props{
   
}

const NavTwo: React.FC<Props>=(props) => {
   
    const isSidebar = useAppSelector((state) => state.sidebar.isSidebarOpen );
    const dispatch = useDispatch();
    return (
        <nav className="sticky py-2.5  bg-white h-14 z-10 shadow-lg w-full top-13.45"  onClick={() => dispatch({type:"sidebar/boolean",payload:!isSidebar}) }>
            <button>
                <IoReorderThreeOutline className="w-8 h-8 mr-6 ml-8 "  />
            </button>
        </nav>
    );

};
NavTwo.defaultProps={
}

export default React.memo(NavTwo);
