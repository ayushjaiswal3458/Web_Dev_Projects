import React, { useEffect, useState } from "react";
import {FC, memo } from "react";
import axios from 'axios';
import UserRow from "./UserRow";


interface Props{
    page:number;
    title:string;

}

const UserList: FC<Props> = ({page,title}) => {

    const [users, setUsers] = useState<any>([]);

    console.log("userlist rerendering with data with page: " +page + " and title :" + title)
    useEffect(()=> {
        console.log("before request trigger")

    axios.get(
        "https://randomuser.me/api/?inc=id,name,gender,email&page=" + page + "&results=20" 
    ).then((response) => {
        console.log("After response arrival");
        console.log(response.data.results);
        setUsers(response.data.results);
    } );

    console.log("After Request trigger");
    }, [page])
    
    console.log("After effect")
    return <div className="bg-white rounded-md">
        
        <div className="grid grid-cols-2 gap-10 p-4 bg-blue-400 rounded-md">
            <h2 className="text-lg font-bold text-white">Email</h2>
            <h2 className="text-lg font-bold text-white" >Gender</h2>
        </div>
        {users.map((u:any) =><div>
        
        <UserRow email={u.email} gender={u.gender} />
    </div>)}</div>;
};
    
UserList.defaultProps = {

}    

    
export default memo(UserList);