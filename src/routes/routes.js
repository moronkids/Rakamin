import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from 'pages/landing';
// eslint-disable-next-line import/no-unresolved
import TempConversionPage from 'pages/tempConversion';
import Todo from 'components/todoListPage';
import Header from 'components/layouts/headers';
// import Body from "components/layouts/body"
import Footer from 'components/layouts/footer';

const Routes = () => (
    <>
        <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route exact path="/convert-temp">
                <Header />
                <TempConversionPage />
                <Footer />
            </Route>
            <Route exact path="/todo">
                <Header />
                <Todo />
                <Footer />
            </Route>
        </Switch>
    </>
);

export default Routes;
