/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Routes from 'routes/routes';
import 'assets/scss/style.scss';

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route component={Routes} />
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
