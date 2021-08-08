import {  useEffect } from "react";

import { groupAction } from "../actions/groups.action";
import { fetchGroups, fetchSelectedGroups } from "../api/groups";
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import {
  groupIdSelector,
  groupQuerySelector,
  groupsSelector,
} from "../selectors/groups.selectors";
import { useAppSelector } from "../store";

import React from "react";

import {  useHistory } from "react-router-dom";

interface Props {
  className?: string;
}

const GroupsPage: React.FC<Props> = ({ className }) => {
  

  const query = useAppSelector(groupQuerySelector);
  const group = useAppSelector(groupsSelector);
  const selectedGroupId = useAppSelector(groupIdSelector);
  useEffect(() => {
    fetchGroups({
      status: "all-groups",

      query: query,
    }).then((data) => {
      groupAction.queryCompleted(query, data.data);
    });
  }, [query]); //eslint-disable-line  react-hooks/exhaustive-deps

  useEffect(() => {
    if (selectedGroupId === undefined) {
      return;
    }
    fetchSelectedGroups({ id: selectedGroupId }).then((group) => {
      groupAction.selectId(group.id);
      console.log(group.name);
    }); //eslint-disable-line  react-hooks/exhaustive-deps
  }, [selectedGroupId]);

  let rowColour: string;
  const history = useHistory();

  return (
    <div className={`${className}`}>
      <div className="flex m-4">
        <Input
          theme="indigo"
          placeholder="search"
          value={query}
          type="text"
          onChange={(event) => {
            groupAction.query(event.target.value);
          }}
          className="w-30 mr-2"
        />
        <Button theme="indigo" themeClasses="">
          Find
        </Button>
      </div>
      <div className="m-4 ">
        {group!.map((profile, index) => {
          if (index % 2 === 0) {
            rowColour = "bg-gray-200";
          } else {
            rowColour = "bg-gray-400";
          }
          return (
            <div
              onClick={() => {
                 groupAction.selectId(profile.id);
                 history.push("/groups/" + profile.id);
              }}
              className={`flex  border rounded-lg mt-2 h-20 w-96 ` + rowColour}
            >
              <img
                src={profile.group_image_url}
                onError={(e: any) => {
                  e.target.onerror = null;
                  e.target.src = "/avatar.jpg";
                }}
                className="w-12 h-10 mr-2 rounded-full"
                alt=" "
              />
              <div>
                <p className="font-medium">{profile.name}</p>
                <p className="text-sm text-gray-500">{profile.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
GroupsPage.defaultProps = {};

export default React.memo(GroupsPage);
