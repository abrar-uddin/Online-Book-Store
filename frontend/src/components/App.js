import React, {Component, Fragment, } from 'react';
import {render} from 'react-dom';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Header from "./layout/Header";
import HomeApp from "./home/HomeApp";
import Cart from "./shopping_cart/Cart";
import CheckOut from "./shopping_cart/CheckOut";
import Footer from "./layout/Footer";

import {Provider} from 'react-redux'
import store from "../store";

import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from '../../../../../Online-Book-Store/frontend/src/components/register/Dashboard';
import Alerts from '../../../../../Online-Book-Store/frontend/src/components/layout/Alerts';
import Login from "../../../../../Online-Book-Store/frontend/src/components/accounts/Login"
import Register from "../../../../../Online-Book-Store/frontend/src/components/accounts/Register"
import PrivateRoute from "../../../../../Online-Book-Store/frontend/src/components/common/PrivateRoute"

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../../../../../Online-Book-Store/frontend/src/actions/auth'

//Options.
const alertOptions = {
    timeout: 3000,
    position: 'top center'
}

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Fragment>
                        <Header />
                        <div className="container">
                            <Switch>
                                <Route exact path="/home" component={HomeApp}/>
                                <Route exact path="/shopping_cart" component={Cart}/>
                                <Route exact path="/checkout" component={CheckOut}/>

                                <PrivateRoute exact path="/" component={Dashboard} />
                                <Route exact path="/register" component={Register} />
                                <Route exact path="/login" component={Login} />
                            </Switch>
                        </div>

                        <Footer />
                    </Fragment>
                </Router>
            </Provider>
        );
    }
}

render(<App/>, document.getElementById("app"));