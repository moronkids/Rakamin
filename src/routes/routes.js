import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from 'pages/landing';
// eslint-disable-next-line import/no-unresolved
import TempConversionPage from 'pages/tempConversion';

const Routes = () => (
    <>
        <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route exact path="/convert-temp">
                <TempConversionPage />
            </Route>
        </Switch>
    </>
);

export default Routes;
