import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getCart, getCartTotal, deleteItem, updateItem} from "../../actions/shopping_cart";
import shopping_cart from "../../reducers/shopping_cart";

export class Cart extends Component {
    static propTypes = {
        shopping_cart: PropTypes.array.isRequired,
        shopping_cart_total: PropTypes.number.isRequired,
        getCart: PropTypes.func.isRequired,
        getCartTotal: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired,
        updateItem: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getCart()
        this.props.getCartTotal()
    };

    updateQuantity(item_id, book_id, user, name) {
        let new_quantity = document.getElementById(name).value
        this.props.updateItem(item_id, new_quantity, book_id, user)
    }

    render() {
        return (
            <div className="container">
                <h2>Cart Items</h2>
                {this.props.shopping_cart.map(shopping_cart => (
                    <div key={shopping_cart.id} className="row">
                        <div className="col s12">
                            <div className="card horizontal" style={{height: 150}}>
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img className="activator"
                                         src={shopping_cart.image}
                                         height="150px"></img>
                                </div>
                                <div className="card-stacked">
                                    <div className="card-content">
                                        <div className="row">
                                            <div className="col s8">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante
                                                    eros,
                                                    tincidunt
                                                    vitae tellus quis, euismod pharetra felis.....
                                                </p>
                                            </div>
                                            <div className="col s2  right">
                                                Price
                                                <input disabled value={shopping_cart.price} id="book_price" type="text"
                                                       className="validate"></input>
                                            </div>
                                            <div className="col s2  right">
                                                Quantity
                                                <input defaultValue={shopping_cart.quantity}
                                                       onChange={this.updateQuantity.bind(this, shopping_cart.item_id, shopping_cart.id, shopping_cart.user, shopping_cart.name)}
                                                       id={shopping_cart.name} type="text"
                                                       className="validate"></input>
                                            </div>
                                            <div className="col offset-s11">
                                                <a className="btn-floating btn-small waves-effect waves-light red"
                                                   onClick={this.props.deleteItem.bind(this, shopping_cart.item_id, shopping_cart.price)}><i
                                                    className="material-icons">delete</i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{shopping_cart.name}<i
                                    className="material-icons right">close</i></span>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante eros,
                                        tincidunt
                                        vitae
                                        tellus quis, euismod pharetra felis. Maecenas quis nulla ut augue feugiat
                                        facilisis.
                                        Sed
                                        blandit urna in nisi consequat finibus. Mauris scelerisque, arcu eu mattis
                                        laoreet,
                                        nunc
                                        leo elementum nisi, non euismod neque dolor nec nibh. Etiam et nisi ut turpis
                                        efficitur
                                        ornare in ac dolor. Maecenas ac aliquet lorem. Aliquam ut rhoncus ante. Nunc
                                        suscipit
                                        ante magna, porta venenatis arcu dictum ac. Nam posuere massa non aliquet
                                        auctor.
                                        Nulla
                                        dapibus metus quam, eu cursus mauris bibendum in. Duis ipsum augue, gravida
                                        vitae mi
                                        sed, convallis pellentesque est. Vestibulum a hendrerit dui, sed placerat ante.
                                        Nunc
                                        tristique, mi ut feugiat facilisis, libero tellus egestas diam, vel vestibulum
                                        lorem
                                        lorem quis eros. Donec vitae felis sed justo volutpat pulvinar.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <h5 className="right-align">Total: ${this.props.shopping_cart_total}</h5>
                <h2>Checkout</h2>
                <div className="row">
                    <form className="col s12">
                        <h5>Billing Information</h5>
                        <div className="row">
                            <div className="input-field col s6">
                                <input placeholder="Eric" id="first_name" type="text" className="validate"></input>
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input placeholder="Tu" id="last_name" type="text" className="validate"></input>
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input placeholder="11200 SW 8th St, Miami, FL 33199" id="address" type="text" className="validate"></input>
                                <label htmlFor="address">Address</label>
                            </div>
                        </div>
                        <h5>Payment Information</h5>
                        <div className="row">
                            <div className="input-field col s3">
                                <input placeholder="Eric Tu" id="full_name" type="text" className="validate"></input>
                                <label htmlFor="full_name">Full Name</label>
                            </div>
                            <div className="input-field col s9">
                                 <input placeholder="5555555555554444" id="card_number" type="text" className="validate"></input>
                                <label htmlFor="card_number">Card Number</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s5">
                                <i className="material-icons prefix">date_range</i>
                                <input id="exp_date" type="text" className="datepicker"></input>
                                <label htmlFor="exp_date">Expiration Date</label>
                            </div>
                            <div className="input-field col s5">
                                <input id="cvv" type="text" className="validate"></input>
                                <label htmlFor="cvv">CVV</label>
                            </div>
                            <div className="col s2">
                                <p>
                                    <label>
                                        <input type="checkbox" className="filled-in" checked="checked"/>
                                        <span>Shipping address same as billing</span>
                                    </label>
                                </p>
                            </div>
                        </div>
                        <button className="btn waves-effect waves-light pulse" type="submit" name="action">Checkout
                            <i className="material-icons right">send</i>
                        </button>
                    </form>
                </div>
            </div>
    );
    }
    }

    const mapStateToProps = state => ({
        shopping_cart: state.shopping_cart.shopping_cart,
        shopping_cart_total: state.shopping_cart.shopping_cart_total
    })

    export default connect(mapStateToProps, {
        getCart: getCart,
        getCartTotal: getCartTotal,
        deleteItem: deleteItem,
        updateItem: updateItem,
    })(Cart);