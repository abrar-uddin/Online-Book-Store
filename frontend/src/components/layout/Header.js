import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getBooks, getBooksCategory} from '../../actions/booksorting';

export class Books extends Component {
    static propTypes = {
        booksorting: PropTypes.array.isRequired,
    }

    componentDidMount() {
        this.props.getBooks();
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper teal">
                    <a href="#" className="brand-logo">Geek Text</a>
                    <a href="#" data-target="mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a onClick = {this.props.getBooks.bind(this)} href="/#/home"><i className="material-icons left">store</i>Home</a></li>
                        <li><a href="/#/profile_management"><i className="material-icons left">person</i>Account</a></li>
                        <li><a href="/#/shopping_cart"><i className="material-icons left">shopping_cart</i>Cart</a></li>
                    </ul>
                </div>
                <ul className="sidenav" id="mobile">
                    <li><a onClick = {this.props.getBooks.bind(this)} href="/#/home"><i className="material-icons left">store</i>Home</a></li>
                    <li><a href="/#/profile_management"><i className="material-icons left">person</i>Account</a></li>
                    <li><a href="/#/shopping_cart"><i className="material-icons left">shopping_cart</i>Cart</a></li>
                </ul>
            </nav>
        );
    }
}


const mapStateToProps = state => ({
    booksorting: state.booksorting.booksorting
});
export default connect(mapStateToProps, {getBooks, })
(Books);