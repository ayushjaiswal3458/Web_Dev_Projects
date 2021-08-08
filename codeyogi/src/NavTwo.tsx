
import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";




interface Props{
   
}

const NavTwo: React.FC<Props>=(props) => {
   
    
    return (
        <nav className="sticky py-2.5  bg-white h-14 z-10 shadow-lg w-screen top-13.45">
            <button>
                <IoReorderThreeOutline className="w-8 h-8 mr-6 ml-8 "  />
            </button>
        </nav>
    );

};
NavTwo.defaultProps={
}

export default React.memo(NavTwo);
