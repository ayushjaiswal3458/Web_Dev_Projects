import React from "react";
import {
  Switch,
  Route,
  // Link,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
// import Avatar from "./components/Avatar/Avatar";
// import AppContainerPage from "./pages/AppContainer.page";
// import AuthPage from "./pages/Auth.page";
import NotFoundPage from "./pages/NotFound.page";

import { Suspense } from "react";
import AppContainerPageLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthPageLazy from "./pages/Auth/Auth.lazy.page";

import { useEffect } from "react";
import { LS_AUTH_TOKEN } from "./api/base";
import { me } from "./api/auth";
import Nav from "./NavBar";

import {  useDispatch, useSelector } from "react-redux";
import  { AppState} from "./store";
import { User } from "./models/User";
import NavTwo from "./NavTwo";

// import DashboardPage from "./pages/Dashboard.page";
// import LoginPage from "./pages/Login.page";
// import RecordingsPage from "./pages/Recordings.page";
// import SignupPage from "./pages/Signup.page";

// const AppContainerPageLazy=React.lazy(()=>import("./pages/AppContainer/AppContainer.page"));

// const AuthPageLazy=lazy(()=>import("./pages/Auth/Auth.page"));

interface Props {}

const App: React.FC<Props> = (props) => {
  
  const token = localStorage.getItem(LS_AUTH_TOKEN);
 
  const user = useSelector<AppState , User | undefined>((state) => state.me);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      return;
    }

    me().then((u) => dispatch({ type: "me/login", payload: u }));
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  if (token && !user) {
    return (<div className="bg-indigoish h-screen">
      <img src="svg-loaders/puff.svg" className="w-44  m-auto h-screen "  alt="" />
    </div>);
  }
  return (
    <>
    
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route path={["/login", "/signup"]}>
            {user ? (
              <Redirect to="/dashboard" />
            ) : (
              <Suspense
                fallback={
                  <div className="text-red-500">Loading Auth page....</div>
                }
              >
                {" "}
                <AuthPageLazy  />
              </Suspense>
            )}
          </Route>
          <Route
            path={[
              "/dashboard",
              "/recordings",
              "/profile",
              "/batch/:batchNumber/lecture/:lectureNumber",
            ]}
          >
            <Nav  />
            <NavTwo />
            <Suspense
              fallback={
                <div className="text-red-500">
                  Loading APP CONTAINER PAGE...
                </div>
              }
            >
              {user ? (
                <AppContainerPageLazy  />
              ) : (
                <Redirect to="/login" />
              )}
            </Suspense>
          </Route>

          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </>
  );
};
App.defaultProps = {};

export default React.memo(App);
