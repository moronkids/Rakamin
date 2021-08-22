<<<<<<< HEAD
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
=======
import React, { useEffect, useState, useContext } from "react";
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Routes from "routes/routes";
import 'assets/scss/style.scss'
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
>>>>>>> 84a14fc (feat: section1)
}

export default App;
