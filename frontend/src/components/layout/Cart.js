import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {getCart, getCartTotal} from "../../actions/shopping_cart";
import shopping_cart from "../../reducers/shopping_cart";

export class Cart extends Component {
    static propTypes = {
        shopping_cart: PropTypes.array.isRequired,
        shopping_cart_total: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getCart()
        this.props.getCartTotal()
    };

    render() {
        return (
            <div className="container">
                <h2>Cart Items</h2>
                {this.props.shopping_cart.map(shopping_cart => (
                    <div className="row">
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
                                            <div className="input-field col s2  right">
                                                Price
                                                <input disabled value={shopping_cart.price} id="book_price" type="text"
                                                       className="validate"></input>
                                            </div>
                                            <div className="input-field col s2  right">
                                                Quantity
                                                <input value={shopping_cart.quantity} id="book_quantity" type="text"
                                                       className="validate"></input>
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
                <h5 className="right-align">Total: {this.props.shopping_cart_total}</h5>
                <h2>Checkout</h2>
                <div className="row">
                    <form className="col s12">
                        <h5>Billing Information</h5>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate"></input>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="address" type="text" className="validate"></input>
                            </div>
                        </div>
                        <h5>Payment Information</h5>
                        <div className="row">
                            <div className="input-field col s3">
                                <input id="name_on_card" type="text" className="validate"></input>
                            </div>
                            <div className="input-field col s9">
                                <input id="card_number" type="text" className="validate"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s5">
                                <i className="material-icons prefix">date_range</i>
                                <input id="exp_date" type="text" className="datepicker"></input>
                            </div>
                            <div className="input-field col s5">
                                <input id="cvv" type="text" className="validate"></input>
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

export default connect(mapStateToProps, {getCart: getCart, getCartTotal:getCartTotal})(Cart);