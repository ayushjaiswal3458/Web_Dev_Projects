
import {FC, memo } from "react";
import { Route, Switch } from "react-router-dom";

import AuthHero from "../../components/AuthHero";
import { User } from "../../models/User";
import LoginPage from "../Login.page";
import SignupPage from "../Signup.page";

interface Props{
    onLogin: (u:User) => void;
}

const Auth: FC<Props> = (props) => (
    <div className="flex">
        <div className="w-full Auth:w-1/2">
        <Switch>
            <Route path="/login">
                <LoginPage onLogin={props.onLogin} />
            </Route>
            <Route path="/signup">
                <SignupPage />
            </Route>
        </Switch>
        </div>
        <AuthHero />
    </div>
);
    
Auth.defaultProps = {

}    

    
export default memo(Auth);