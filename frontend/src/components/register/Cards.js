import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCards, deleteCards } from '../../actions/cards';

export class Cards extends Component {
    static PropTypes = {
        cards: PropTypes.array.isRequired,
        getCards: PropTypes.func.isRequired,
        deleteCards: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getCards();
    }

    render() {
        return (
            <Fragment>
                <h2>Credit Cards</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Card ID</th>
                            <th>Card Number</th>
                            <th>Security Code</th>
                            <th>Expiration Month</th>
                            <th>Expiration Day</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.cards.map(cards => (
                            <tr key={cards.id}>
                                <td>{cards.id}</td>
                                <td>{cards.cardno}</td>
                                <td>{cards.securityCode}</td>
                                <td>{cards.expmo}</td>
                                <td>{cards.expday}</td>
                                <td><button onClick={this.props.deleteCards.bind(this, cards.id)} className="btn btn-danger btn-sm">DELETE</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    cards: state.cards.cards
});

export default connect(mapStateToProps, { getCards, deleteCards })(Cards);
