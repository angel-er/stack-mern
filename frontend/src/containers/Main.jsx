import React, {Component, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import {HomeNavBar} from '../components/HomeNavBar';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <HomeNavBar />
        <Switch>
          <Route exatc path='/register' component={Register} />;
          <Route exatc path='/' component={Login} />;
        </Switch>
      </Fragment>
    );
  }
}

export default Main;
