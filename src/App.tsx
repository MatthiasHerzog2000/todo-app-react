import React, {Component, Fragment} from 'react';
import './App.css';

import {Route, Switch} from 'react-router';
import Details from './Views/Details';
import Navbar from './Components/Navbar';
import AppointmentProvider from './Context/AppointmentProvider';
import ConnectHomeWithContext from './Views/Home';
const routes = [
  {
    path: '/',
    component: ConnectHomeWithContext
  }, {
    path: '/list-details/:id',
    component: Details
  }
]
class App extends Component {

  render() {
    return (
      <AppointmentProvider>
        <Fragment>
          <Navbar></Navbar>
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} exact path={route.path} component={route.component}></Route>
            ))}
          </Switch>
        </Fragment>
      </AppointmentProvider>
    );
  }
}

export default App;
