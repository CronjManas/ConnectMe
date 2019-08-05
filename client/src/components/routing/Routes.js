import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Otp from '../auth/Otp';
import NotFound from '../layout/NotFound';
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from './PrivateRoutes';

class Routes extends Component {
    render(){
        return (
            <Fragment>
                <Alert/>
                <Switch>
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} /> 
                  <PrivateRoute exact path='/otp' component={Otp} />
                  <PrivateRoute exact path='/dashboard' component={Dashboard}/>
                  <Route component={NotFound}/>
                  
                </Switch>
                </Fragment>    
        )
    }
    
};

export default Routes;