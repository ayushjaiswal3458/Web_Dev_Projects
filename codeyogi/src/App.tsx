
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LS_LOGIN_TOKEN } from "./apit";
import AppContainerPage from "./pages/AppContainer.page";
import AuthPage from "./pages/Auth.page";

import NotFoundPage from "./pages/NotFound.page";




function App() {
  const token = localStorage.getItem( LS_LOGIN_TOKEN);
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact>
          {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>
        <Route path={["/login","/signup"]} exact>
          <AuthPage />
        </Route>
         <Route path={["/dashboard","/recording","/batch/:batchNumber/lecture/:lectureNumber"]}  > 
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
