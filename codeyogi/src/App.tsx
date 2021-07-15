import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppContainerPage from "./pages/AppContainer.page";
import AuthPage from "./pages/Auth.page";
import DashboardPage from "./pages/Dashboard.page";
import LoginPage from "./pages/Login.page";
import NotFoundPage from "./pages/NotFound.page";
import RecordingPage from "./pages/Recording.page";
import SignupPage from "./pages/Signup.page";



function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" >
          <Redirect to="/login" ></Redirect>
        </Route>
        <Route path={["/login","/signup"]} exact>
          <AuthPage />
        </Route>
         <Route path={["/dashboard","/recording","/batch/:batchNumber/lecture/:lectureNumber"]} exact > 
         <AppContainerPage />
         </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
