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
import axios from "axios";

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