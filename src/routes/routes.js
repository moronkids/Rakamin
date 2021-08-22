import React from 'react';
import { Switch, Route } from 'react-router-dom';
<<<<<<< HEAD
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
=======
import LandingPage from 'pages/landing'

const Routes = () => {
    return (
        <>
            <Switch>
                <Route path="/">
                    <LandingPage />
                </Route>
            </Switch>
        </>
    )
}

export default Routes
>>>>>>> 84a14fc (feat: section1)
