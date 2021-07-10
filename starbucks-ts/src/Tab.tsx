import React from "react";

export interface Props{
    title:string | React.ReactNode;
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