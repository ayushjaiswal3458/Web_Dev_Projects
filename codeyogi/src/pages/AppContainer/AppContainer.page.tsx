
import { FC, memo } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar";

import DashboardPage from "../Dashboard.page";
import LecturePage from "../Lecture.page";

import RecordingPage from "../Recording.page";
import ProfilePage from "../Profile.page";

interface Props {
  
}

const AppContainer: FC<Props> = () => {
  
  return (
    <div className="flex ">
      
      <Sidebar className="mt-13.45" />
      <Switch>
      
        <Route path="/recording">
          <RecordingPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage className="mt-13.45 "  />
        </Route>
        <Route path="/batch/:batchNumber/lecture/:lectureNumber">
            <LecturePage />
        </Route>
        <Route path="/profile">
            <ProfilePage  />
          </Route>
      </Switch>
    </div>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
