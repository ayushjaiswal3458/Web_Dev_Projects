import React from "react";
import {FC, memo } from "react";

interface Props{
    email:any;
    gender:any;
}

const UserRow: FC<Props> = ({email,gender} ) => {
    return (
        <div className="grid grid-cols-2 gap-10 p-2 m-1 font-semibold bg-green-400 rounded-sm">
            <p>{email}</p>
            <p>{gender}</p>
        </div>
    );
};
    
UserRow.defaultProps = {

}    

    
export default memo(UserRow);