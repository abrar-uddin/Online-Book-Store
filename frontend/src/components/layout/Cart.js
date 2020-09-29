import React, {Component} from 'react';

export class Cart extends Component {
    render() {
        return (
            <div className="container">
                <h2>Cart Items</h2>
                <div className="row">
                    <div className="col s12">
                        <div className="card horizontal" style={{height:150}}>
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator"
                                     src="https://images-na.ssl-images-amazon.com/images/I/51jtWIqJzML._SX352_BO1,204,203,200_.jpg"
                                     height="150px"></img>
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <div className="row">
                                        <div className="col s8">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante eros,
                                                tincidunt
                                                vitae tellus quis, euismod pharetra felis.....
                                            </p>
                                        </div>
                                        <div className="input-field col s2  right">
                                            Price
                                            <input disabled value="$10.99" id="book_price" type="text"
                                                   className="validate"></input>
                                        </div>
                                        <div className="input-field col s2  right">
                                            Quantity
                                            <input value="1" id="book_quantity" type="text" className="validate"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Book Title<i
                                    className="material-icons right">close</i></span>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ante eros, tincidunt
                                    vitae
                                    tellus quis, euismod pharetra felis. Maecenas quis nulla ut augue feugiat facilisis.
                                    Sed
                                    blandit urna in nisi consequat finibus. Mauris scelerisque, arcu eu mattis laoreet,
                                    nunc
                                    leo elementum nisi, non euismod neque dolor nec nibh. Etiam et nisi ut turpis
                                    efficitur
                                    ornare in ac dolor. Maecenas ac aliquet lorem. Aliquam ut rhoncus ante. Nunc
                                    suscipit
                                    ante magna, porta venenatis arcu dictum ac. Nam posuere massa non aliquet auctor.
                                    Nulla
                                    dapibus metus quam, eu cursus mauris bibendum in. Duis ipsum augue, gravida vitae mi
                                    sed, convallis pellentesque est. Vestibulum a hendrerit dui, sed placerat ante. Nunc
                                    tristique, mi ut feugiat facilisis, libero tellus egestas diam, vel vestibulum lorem
                                    lorem quis eros. Donec vitae felis sed justo volutpat pulvinar.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
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


export default Cart;