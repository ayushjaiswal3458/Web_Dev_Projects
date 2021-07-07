import React from "react";

interface Props{
    title:string;
    children: React.ReactNode;
}

const Tab: React.FC<Props> = ({children}) => {
    return (
        <>{children}</>
    );
};
    
Tab.defaultProps={

}    

    
export default React.memo(Tab);