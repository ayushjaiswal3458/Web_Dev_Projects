import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOneGroup } from "../actions/groups.action";
import Alerts from "../components/Alerts.tsx/Alerts";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

import {
  groupCreatorSelector,
  groupLoadingSelector,
  groupOneErrorSelector,
  groupSelector,
  nextIdSelector,
  prevIdSelector,
} from "../selectors/groups.selectors";
import { useAppSelector } from "../store";

interface Props {}

const GroupDetailsPage: React.FC<Props> = (props) => {
  const group = useAppSelector(groupSelector);
  const groupId = +useParams<{ groupId: string }>().groupId;
  console.log(groupId);

  const nextId = useAppSelector(nextIdSelector);
  const prevId = useAppSelector(prevIdSelector);
  const groupLoading = useAppSelector(groupLoadingSelector);
  const groupError = useAppSelector(groupOneErrorSelector);
  const groupCreator = useAppSelector(groupCreatorSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("this");
    dispatch(fetchOneGroup(groupId));
  }, [groupId]); //eslint-disable-line

  if (groupError) {
    return (
      <div>
        <Alerts strong="" theme="blue" className="z-30 mt-20 ml-10 w-148.8985">
          {groupError}
        </Alerts>
      </div>
    );
  }

  return (
    <div className=" mt-20 mx-4 rounded-lg bg-gray-400 w-full  ">
      {groupLoading && (
        <Alerts strong="Group Loading " theme="indigo">
          Please wait...
        </Alerts>
      )}
      <div className="rounded-lg shadow-lg bg-white m-4 p-4">
        <h1 className="text-xl font-semibold ">Group information </h1>
        {group && (
          <div className="my-2 flex">
            <img
              src={group.group_image_url}
              onError={(e: any) => {
                e.target.onerror = null;
                e.target.src = "/avatar.jpg";
              }}
              className="w-24 h-24  mr-2 rounded-full"
              alt=" "
            />
            <div className="space-y-3">
              <p>Group Id: {group && group.id}</p>
              <p>Group Name : {group && group.name}</p>
              <p>Group Description : {group && group.description}</p>
              <Link to={`/groups/${prevId}`}>
                <button onClick={() => dispatch(fetchOneGroup(prevId!))}>
                  <GrFormPrevious className="p-2 rounded-full text-black w-10 h-10 bg-gray-200 shadow-2xl" />
                </button>
              </Link>
              <Link to={`/groups/${nextId}`}>
                <button onClick={() => dispatch(fetchOneGroup(nextId!))}>
                  <GrFormNext className="p-2 rounded-full text-black w-10 h-10 bg-gray-200 shadow-2xl" />
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div className="p-2 rounded-lg m-4 bg-white ">group creator:{groupCreator && groupCreator.first_name}</div>
    </div>
  );
};
GroupDetailsPage.defaultProps = {};

export default React.memo(GroupDetailsPage);
