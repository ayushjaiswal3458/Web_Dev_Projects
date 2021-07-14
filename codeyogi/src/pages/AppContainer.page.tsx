import React from "react";
import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import RecordingPage from "./Recording.page";

interface Props {}

const AppContainer: FC<Props> = (props) => {
  return (
    <div className="flex ">
      <Sidebar />
      <Switch>
        <Route path="/recording">
          <RecordingPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/batch/:batchNumber/lecture/:lectureNumber">
            <LecturePage />
        </Route>
      </Switch>
    </div>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
