
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AppContainerPage from "./pages/AppContainer.page";
import AuthPage from "./pages/Auth.page";

import NotFoundPage from "./pages/NotFound.page";




function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact>
          <Redirect to="/login" ></Redirect>
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
