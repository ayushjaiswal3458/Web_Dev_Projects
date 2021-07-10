import React, { useState } from "react";
import logo from "./logo.svg";
import UserList from "./UserInformation/UserList";

interface Props {
  
}
const App: React.FC<Props> =(props)=> {
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("Favourite");

  return (
      <div className="flex flex-col items-start p-5 space-y-8 bg-white">
        <UserList page={page} title={title} />
        <button
          className="px-2 py-2 text-white bg-indigo-700"
          onClick={() => setPage(page + 1)}
        >
          Go to Next page
        </button>

        
      </div>
  );
}

export default App;
