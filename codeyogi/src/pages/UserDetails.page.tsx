import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneUser } from "../actions/Users.actions";
import { userSelector } from "../selectors/users.selectors";
import { useAppSelector } from "../store";

interface Props {
  className?: string;
}

const UserDetailsPage: React.FC<Props> = ({ className }) => {
  const id = +useParams<{ id: string }>().id;
  const user = useAppSelector(userSelector);
  const dispatch = useDispatch();
  console.log(id);
  useEffect(() => {
    dispatch(fetchOneUser(id));
  }, [id]);//eslint-disable-line  react-hooks/exhaustive-deps
  return (
    <div className="m-4 mt-13.45 p-20 bg-gray-400 w-full">
      {user && (
        <div className="p-4 relative shadow-2xl h-64 bg-indigo-400 rounded-lg ">
          <div className=" absolute -top-14 -left-10 ">
            <img
              src={user.profile_pic_url}
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src = "/avatar.jpg";
              }}
              className="w-48 h-48 shadow-2xl mr-2 rounded-lg"
              alt=" "
            />
          </div>
          <div className="flex   font-medium text-lg text-white mt-10  items-end justify-end ">
            <div className="flex flex-col space-y-2">
              <p className=" p-1 rounded-lg   shadow-2xl">UserId: {user.id}</p>
              <p className=" p-1 rounded-lg   shadow-2xl"> 
                Name:{" "}
                {user.first_name +
                  " " +
                  user.middle_name +
                  " " +
                  user.last_name}{" "}
              </p>
              <p className=" p-1 rounded-lg   shadow-2xl">contact:  {user.phone_number}</p>
             
            </div>
          </div>
          <p className="font-medium mt-4 text-white p-1 rounded-lg   shadow-2xl text-lg ">Created At : {user.created_at}</p>

        </div>
      )}
    </div>
  );
};
UserDetailsPage.defaultProps = {};

export default React.memo(UserDetailsPage);
