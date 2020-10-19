import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getCart, getCartTotal, deleteItem, updateItem, deleteCart} from "../../actions/shopping_cart";
import {Link} from 'react-router-dom';

export class Cart extends Component {
    static propTypes = {
        shopping_cart: PropTypes.array.isRequired,
        shopping_cart_total: PropTypes.number.isRequired,
        getCart: PropTypes.func.isRequired,
        getCartTotal: PropTypes.func.isRequired,
        deleteItem: PropTypes.func.isRequired,
        updateItem: PropTypes.func.isRequired,
        deleteCart: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.getCart()
        this.props.getCartTotal()
    };

    updateQuantity(item_id, book_id, user, name, price) {
        let new_quantity = document.getElementById(name).value
        this.props.updateItem(item_id, new_quantity, book_id, user, price)
    };

    checkRequired() {
        let allAreFilled = true;
        document.getElementById("checkout_form").querySelectorAll("[required]").forEach(function (i) {
            if (!allAreFilled) return;
            if (!i.value) allAreFilled = false;
        })

        // console.log(allAreFilled)
        let submit = document.getElementById("checkout_btn")
        // let total = this.props.getCartTotal()
        // console.log(total)
        if (allAreFilled) {
            submit.disabled = false;
        } else {
            submit.disabled = true;
        }
    }

    // TODO: Check input fields
    // TODO: Disable checkout button if cart empty
    // TODO: Save book for later
    checkOut(e) {
        // console.log('delete')
        this.props.deleteCart()
    };

    showShippingField() {
        let shipping_info = document.getElementById("shipping_info");
        let shipping_first_name = document.getElementById("shipping_first_name");
        let shipping_last_name = document.getElementById("shipping_last_name");
        let shipping_address = document.getElementById("shipping_address");
        let check_box = document.getElementById("shipping_box")
        let is_checked = check_box.checked;
        if (is_checked === false) {
            shipping_info.style.visibility = "visible";
            shipping_first_name.required = true;
            shipping_last_name.required = true;
            shipping_address.required = true;
        } else {
            shipping_info.style.visibility = "hidden";
            shipping_first_name.required = false;
            shipping_last_name.required = false;
            shipping_address.required = false;
            this.checkRequired()
        }
    };

    render() {
        return (
            <div className="container" onLoad={this.checkRequired.bind(this)}>
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
                                                <label htmlFor="book_price">Price</label>
                                                <input disabled value={shopping_cart.unit_price}
                                                       type="text"
                                                       className="validate"></input>
                                            </div>
                                            <div className="col s2  right">
                                                <label htmlFor={shopping_cart.name}>Quantity</label>
                                                <input defaultValue={shopping_cart.quantity}
                                                       onChange={this.updateQuantity.bind(this, shopping_cart.item_id, shopping_cart.id, shopping_cart.user, shopping_cart.name, shopping_cart.unit_price)}
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
                <h5 id='total' className="right-align">Total: ${this.props.shopping_cart_total}</h5>
                <div className="row">
                    <h2>Checkout</h2>
                    <form id="checkout_form" className="col s12">
                        <div className="row">
                            <h5>Billing Information</h5>
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" onKeyUp={this.checkRequired.bind(this)}
                                       required></input>
                                <label htmlFor="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" onKeyUp={this.checkRequired.bind(this)}
                                       required></input>
                                <label htmlFor="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="address" type="text"
                                       className="validate" onKeyUp={this.checkRequired.bind(this)} required></input>
                                <label htmlFor="address">Address</label>
                            </div>
                        </div>
                        <div className="row">
                            <h5>Payment Information</h5>
                            <div className="input-field col s3">
                                <input id="full_name" type="text" className="validate" onKeyUp={this.checkRequired.bind(this)}
                                       required></input>
                                <label htmlFor="full_name">Full Name</label>
                            </div>
                            <div className="input-field col s9">
                                <input id="card_number" type="tel"
                                       className="validate" onKeyUp={this.checkRequired.bind(this)} required></input>
                                <label htmlFor="card_number">Card Number</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s5">
                                <i className="material-icons prefix">date_range</i>
                                <input id="exp_date" type="text" className="datepicker" onChange={this.checkRequired.bind(this)}
                                       required></input>
                                <label htmlFor="exp_date">Expiration Date</label>
                            </div>
                            <div className="input-field col s5">
                                <input id="cvv" type="tel" className="validate" onKeyUp={this.checkRequired.bind(this)}
                                       required></input>
                                <label htmlFor="cvv">CVV</label>
                            </div>
                            <div className="col s2">
                                <p>
                                    <label>
                                        <input id="shipping_box" type="checkbox"
                                               onChange={this.showShippingField.bind(this)}/>
                                        <span>Shipping address same as billing</span>
                                    </label>
                                </p>
                            </div>

                        </div>
                        <div className="row" id="shipping_info">
                            <h5>Shipping Information</h5>
                            <div className="row" visibility="hidden">
                                <div className="input-field col s6">
                                    <input id="shipping_first_name" type="text" className="validate"
                                           onKeyUp={this.checkRequired.bind(this)} required></input>
                                    <label htmlFor="shipping_first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="shipping_last_name" type="text" className="validate"
                                           onKeyUp={this.checkRequired.bind(this)} required></input>
                                    <label htmlFor="shipping_last_name">Last Name</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="shipping_address" type="text"
                                           className="validate" onKeyUp={this.checkRequired.bind(this)} required></input>
                                    <label htmlFor="shipping_address">Address</label>
                                </div>
                            </div>
                        </div>
                        <Link to="/checkout">
                            <button type="submit" id="checkout_btn"
                                    className="btn waves-effect waves-light pulse"
                                    onClick={this.checkOut.bind(this)}>Checkout
                                <i className="material-icons right">send</i>
                            </button>
                        </Link>
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
    deleteCart: deleteCart,
})(Cart);