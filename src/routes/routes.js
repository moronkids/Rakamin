import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from 'pages/landing';

const Routes = () => (
    <>
        <Switch>
            <Route path="/">
                <LandingPage />
            </Route>
        </Switch>
    </>
);

export default Routes;
