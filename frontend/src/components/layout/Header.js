import React, {Component} from 'react';

export class Header extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper teal">
                    <a href="/#/home" className="brand-logo">Geek Text</a>
                    <a href="#" data-target="mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="/#/home"><i className="material-icons left">store</i>Home</a></li>
                        <li><a href="/#/shopping_cart"><i className="material-icons left">shopping_cart</i>Cart</a></li>
                    </ul>
                </div>
                <ul className="sidenav" id="mobile">
                    <li><a href="/#/home"><i className="material-icons left">store</i>Home</a></li>
                    <li><a href="/#/shopping_cart"><i className="material-icons left">shopping_cart</i>Cart</a></li>
                </ul>
            </nav>
        );
    }
}


export default Header;