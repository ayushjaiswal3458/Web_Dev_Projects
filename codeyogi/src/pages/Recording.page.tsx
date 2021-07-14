import React from "react";
import {FC, memo } from "react";

interface Props{

}

const Recordings: FC<Props> = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/login">
                    <LoginPage></LoginPage>
                </Route>
                <Route path = "/signup">
                    <SignupPage></SignupPage>
                </Route>
                <Route path = "/dashboard">
                    <DashboardPage></DashboardPage>
                </Route>
                <Route path = "/recordings">
                    <RecordingPage></RecordingPage>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
    
Recordings.defaultProps = {

}    

    
export default memo(Recordings);