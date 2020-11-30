import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getBooks} from '../../actions/booksorting';
import {getBooksCategory} from '../../actions/booksorting';
import {getBooksTitle} from '../../actions/booksorting';
import {getBooksAuthor} from '../../actions/booksorting';
import {getBooksPrice} from '../../actions/booksorting';
import {getBooksStars} from '../../actions/booksorting';
import {getBooksRelease} from '../../actions/booksorting';
import {getBooksTopSellers} from '../../actions/booksorting';
import {getBooksPage} from '../../actions/booksorting';
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
        getBooksTopSellers: PropTypes.func.isRequired,
        getBooksRelease: PropTypes.func.isRequired,
        getBooksPage: PropTypes.func.isRequired
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

    getBooksStars(stars) {
        this.props.getBooksTopSellers(stars)
    }

     getBooksPage(page, size) {
        this.props.getBooksPage(page, size);
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

                <a className='dropdown-trigger btn' data-target='dropdown2' onLoad={this.props.getBooks.bind(this)}><i className="material-icons left">star</i>Book Rating</a>
                <ul id='dropdown2' className='dropdown-content'>
                    <li><a onClick={this.getBooksTopSellers1.bind(this, "0")}>0 Star</a></li>
                    <li><a onClick={this.getBooksTopSellers1.bind(this, "1")}>1 Star</a></li>
                    <li><a onClick={this.getBooksTopSellers1.bind(this, "2")}>2 Stars</a></li>
                    <li><a onClick={this.getBooksStars.bind(this, "3")}>3 Stars</a></li>
                    <li><a onClick={this.getBooksTopSellers1.bind(this, "4")}>4 Stars</a></li>
                    <li><a onClick={this.getBooksTopSellers1.bind(this, "5")}>5 Stars</a></li>
                </ul>

                <a onClick={this.props.getBooksRelease.bind(this)} className="waves-effect waves-light btn"><i className="material-icons left">date_range</i>Release Date</a>

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
                                <p>Release Date: <i className="material-icons left">date_range</i>{booksorting.release_date}</p>
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
                <ul className="pagination">
                    <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
                    <li className="active"><a onClick={this.getBooksPage.bind(this, "1", "20")}>1</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "2", "20")}>2</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "3", "20")}>3</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "4", "20")}>4</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "5", "20")}>5</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "6", "20")}>6</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "7", "20")}>7</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "8", "20")}>8</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "9", "20")}>9</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "10", "20")}>10</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "11", "20")}>11</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "12", "20")}>12</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "13", "20")}>13</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "14", "20")}>14</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "15", "20")}>15</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "16", "20")}>16</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "17", "20")}>17</a></li>
                    <li className="waves-effect"><a onClick={this.getBooksPage.bind(this, "${page+1}", "${size+1}")}><i className="material-icons">chevron_right</i></a></li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    booksorting: state.booksorting.booksorting
});
export default connect(mapStateToProps, {getBooks, addItem, getBooksCategory, getBooksTitle, getBooksAuthor, getBooksPrice, getBooksStars, getBooksTopSellers, getBooksRelease, getBooksPage, })
(Books);