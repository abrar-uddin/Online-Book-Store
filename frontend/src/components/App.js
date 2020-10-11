import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from "./layout/Header";
import Cart from "./layout/Cart";

import { Provider } from 'react-redux'
import store from "../store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                <Header />
                <div className="container">
                    <Cart />
                </div>

            </Fragment>
            </Provider>
        );
    }
}

render(<App />, document.getElementById("app"));