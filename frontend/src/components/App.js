import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Header from "./layout/Header";
import Cart from "./layout/Cart";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <Cart />
                </div>

            </Fragment>
        );
    }
}

render(<App />, document.getElementById("app"));