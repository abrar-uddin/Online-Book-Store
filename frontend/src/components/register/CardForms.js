import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addCards } from "../../actions/cards";



export class CardForms extends Component {
    state = {
        cardno: "",
        securityCode: "",
        expmo: "",
        expday: "",
    };

    static propTypes = {
        addCards: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { cardno, securityCode, expmo, expday } = this.state;
        const cards = { cardno, securityCode, expmo, expday };
        this.props.addCards(cards);
        this.setState({
          cardno: "",
          securityCode: "",
          expmo: "",
          expday: "",       
        })
    };

    render() {
        const { cardno, securityCode, expmo, expday } = this.state;
        return (
          <div className="card card-body mt-4 mb-4">
            <h2>Register or Delete Credit Cards</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Card Number</label>
                <input
                  className="form-control"
                  type="text"
                  name="cardno"
                  onChange={this.onChange}
                  value={cardno}
                />
              </div>
              <div className="form-group">
                <label>3 Digit Security Code</label>
                <input
                  className="form-control"
                  type="text"
                  name="securityCode"
                  onChange={this.onChange}
                  value={securityCode}
                />
              </div>
              <div className="form-group">
                <label>Expiration Month</label>
                <input
                  className="form-control"
                  type="text"
                  name="expmo"
                  onChange={this.onChange}
                  value={expmo}
                />
              </div>
              <div className="form-group">
                <label>Expiration Day</label>
                <input
                  className="form-control"
                  type="text"
                  name="expday"
                  onChange={this.onChange}
                  value={expday}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        );
      }
    }

export default connect(null, { addCards })(CardForms);
