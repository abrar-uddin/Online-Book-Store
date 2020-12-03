import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDetails, deleteDetails } from '../../actions/details';

export class Details extends Component {
    static PropTypes = {
        details: PropTypes.array.isRequired,
        getDetails: PropTypes.func.isRequired,
        deleteDetails: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getDetails();
    }

    render() {
        return (
            <Fragment>
                <h2>Personal Details</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Nickname</th>
                            <th>Email</th>
                            <th>homeStreetOne</th>
                            <th>homeStreetOne</th>
                            <th>homeCity</th>
                            <th>homeState</th>
                            <th>homeZipcode</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.details.map(details => (
                            <tr key={details.id}>
                                <td>{details.id}</td>
                                <td>{details.nickname}</td>
                                <td>{details.email}</td>
                                <td>{details.homeStreetOne}</td>
                                <td>{details.homeStreetTwo}</td>
                                <td>{details.homeCity}</td>
                                <td>{details.homeState}</td>
                                <td>{details.homeZipcode}</td>
                                <td><button onClick={this.props.deleteDetails.bind(this, details.id)} className="btn btn-danger btn-sm">EDIT</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    details: state.details.details
});

export default connect(mapStateToProps, { getDetails, deleteDetails })(Details);
