import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getBooks} from '../../actions/booksorting';
import {getBooksCategory} from '../../actions/booksorting';
import {getBooksTitle} from '../../actions/booksorting';
import {getBooksAuthor} from '../../actions/booksorting';
import {getBooksPrice} from '../../actions/booksorting';
import {getBooksStars} from '../../actions/booksorting';
import {getBooksTopSellers} from '../../actions/booksorting';
import {addItem} from '../../actions/shopping_cart';


export class Books extends Component {
    static propTypes = {
        booksorting: PropTypes.array.isRequired,
        addItem: PropTypes.func.isRequired,
        getBooksCategory: PropTypes.func.isRequired,
        getBooksTitle: PropTypes.func.isRequired,
        getBooksAuthor: PropTypes.func.isRequired,
        getBooksPrice: PropTypes.func.isRequired,
        getBooksStars: PropTypes.func.isRequired,
        getBooksTopSellers: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getBooks();
    }

    getBooksCategory1(name) {
        this.props.getBooksCategory(name);
    }

      getBooksTopSellers1(stars) {
        this.props.getBooksTopSellers(stars);
    }

    addItem2(id, quantity, book_id, user, price) {
        this.props.addItem(id, quantity, book_id, user, price);
    }

    //TODO: HARD CODED THE ATTRIBUTES IN addItem2 (quantity don't have to worry about it & remove ID)
    //TODO: REMEMBER TO SET UP ORDERING HREFS FOR EACH SORT BY

    render() {
        return (
            <div >
                <h5>Sort By: </h5>
                <a className='dropdown-trigger btn' data-target='dropdown1' onLoad={this.props.getBooks.bind(this)}><i className="material-icons left">library_books</i>Genre</a>

                <ul id='dropdown1' className='dropdown-content'>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Art-Photography")}>Art-Photography</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Biography")}>Biography</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Business-Finance-Law")}>Business-Finance-Law</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Childrens-Books")}>Childrens-Books</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Computing")}>Computing</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Crafts-Hobbies")}>Crafts-Hobbies</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Crime-Thriller")}>Crime-Thriller</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Dictionaries-Languages")}>Dictionaries-Languages</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Entertainment")}>Entertainment</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Food-Drink")}>Food-Drink</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Graphic-Novels-Anime-Manga")}>Graphic-Novels-Anime-Manga</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Health")}>Health</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "History-Archaeology")}>History-Archaeology</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Home-Garden")}>Home-Garden</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Humour")}>Humour</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Medical")}>Medical</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Mind-Body-Spirit")}>Mind-Body-Spirit</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Natural-History")}>Natural-History</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Personal-Development")}>Personal-Development</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Poetry-Drama")}>Poetry-Drama</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Reference")}>Reference</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Religion")}>Religion</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Romance")}>Romance</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Science-Fiction-Fantasy-Horror")}>Science-Fiction-Fantasy-Horror</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Science-Geography")}>Science-Geography</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Society-Social-Sciences")}>Society-Social-Sciences</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Sport")}>Sport</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Stationery")}>Stationery</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Teaching-Resources-Education")}>Teaching-Resources-Education</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Technology-Engineering")}>Technology-Engineering</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Teen-Young-Adult")}>Teen-Young-Adult</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Transport")}>Transport</a></li>
                    <li><a onClick={this.getBooksCategory1.bind(this, "Travel-Holiday-Guides")}>Travel-Holiday-Guides</a></li>
                </ul>

                <a onClick={this.props.getBooksTitle.bind(this)} className="waves-effect waves-light btn"><i className="material-icons left">sort_by_alpha</i>Title</a>

                <a onClick={this.getBooksTopSellers1.bind(this, "5")} className="waves-effect waves-light btn"><i className="material-icons left">import_contacts</i>Top Sellers</a>

                <a onClick={this.props.getBooksAuthor.bind(this)} className="waves-effect waves-light btn"><i className="material-icons left">person_outline</i>Author</a>

                <a onClick={this.props.getBooksPrice.bind(this)} className="waves-effect waves-light btn"><i className="material-icons left">attach_money</i>Price</a>

                <a onClick={this.props.getBooksStars.bind(this)} className="waves-effect waves-light btn"><i className="material-icons left">star</i>Book Rating</a>

                <a onClick={this.props.getBooks .bind(this)} className="waves-effect waves-light btn"><i className="material-icons left">date_range</i>Release Date</a>

                <a onClick={this.props.getBooks.bind(this)} className="waves-effect waves-light btn"><i className="material-icons left">cancel</i>Clear Filter</a>

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
                        <tr key={booksorting.id}>
                            <td><img src={booksorting.image}/></td>
                            <td>
                                <p><a href="/#/home">{booksorting.name} by {booksorting.author}</a></p>
                                <p>Rating: <i className="material-icons left">star</i>{booksorting.stars}</p>
                            </td>
                            <td>{booksorting.category}</td>
                            <td>{booksorting.book_format}</td>
                            <td>{booksorting.currency}{booksorting.price}</td>
                            <td>
                                <button onClick={this.addItem2.bind(this, 1, 1, booksorting.id, 1, booksorting.price)}
                                        className="waves-effect waves-light btn"><i
                                    className="material-icons center">add_shopping_cart</i></button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    booksorting: state.booksorting.booksorting
});
export default connect(mapStateToProps, {getBooks, addItem, getBooksCategory, getBooksTitle, getBooksAuthor, getBooksPrice, getBooksStars, getBooksTopSellers})
(Books);