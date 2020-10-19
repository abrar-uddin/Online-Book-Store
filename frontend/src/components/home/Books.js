import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getBooks} from '../../actions/booksorting';
import { addItem } from '../../actions/shopping_cart';

export class Books extends Component {
    static propTypes = {
        booksorting: PropTypes.array.isRequired,
        addItem: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getBooks();
    }

    addItem2(id, quantity, book_id, user, price) {
        this.props.addItem(id, quantity, book_id, user, price);
    }

    //TODO: HARD CODED THE ATTRIBUTES IN addItem2 (quantity don't have to worry about it & remove ID)
    //TODO: REMEMBER TO SET UP ORDERING HREFS FOR EACH SORT BY

    render() {
        return (
            <Fragment>
                <table className="table table-striped">
                    <tr>
                        <td>Sort By: </td>
                        <td><a href="/?ordering=category"><i className="material-icons left">library_books</i>Genre</a></td>
                        <td><a href="#"><i className="material-icons left">fiber_new</i>Top Sellers</a></td>
                        <td><a href="#"><i className="material-icons left">sort_by_alpha</i>Title</a></td>
                        <td><a href="#"><i className="material-icons left">person_outline</i>Author</a></td>
                        <td><a href="#"><i className="material-icons left">attach_money</i>Price</a></td>
                        <td><a href="#"><i className="material-icons left">star</i>Book Rating</a></td>
                        <td><a href="#"><i className="material-icons left">date_range</i>Release Date</a></td>
                    </tr>
                </table>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Book & Author</th>
                            <th>Category</th>
                            <th>Format</th>
                            <th>Price</th>
                            <th>Add Cart</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.booksorting.map(booksorting => (
                        <tr key = {booksorting.id} >
                            <td><img src={booksorting.image} /> </td>
                            <td>
                                <p> <a href = "/#/home">{booksorting.name} by {booksorting.author}</a></p>
                                <p>Rating: <i className="material-icons left">star</i>{booksorting.stars}</p>
                            </td>
                            <td>{booksorting.category}</td>
                            <td>{booksorting.book_format}</td>
                            <td>{booksorting.currency}{booksorting.price}</td>
                            <td><button onClick={this.addItem2.bind(this,1, 1, booksorting.id, 1, booksorting.price)} className="waves-effect waves-light btn"><i
                                className="material-icons center">add_shopping_cart</i></button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    booksorting: state.booksorting.booksorting
});
export default connect(mapStateToProps, {getBooks, addItem})
(Books);