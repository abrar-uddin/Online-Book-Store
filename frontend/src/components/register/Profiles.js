import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProfiles, deleteProfiles } from '../../actions/profiles';

export class Profiles extends Component {
    static PropTypes = {
        profiles: PropTypes.array.isRequired,
        getProfiles: PropTypes.func.isRequired,
        deleteProfiles: PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getProfiles();
    }

    render() {
        return (
            <Fragment>
                <h2>Addresses</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Street One</th>
                            <th>Street Two</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Zipcode</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.profiles.map(profiles => (
                            <tr key={profiles.id}>
                                <td>{profiles.streetOne}</td>
                                <td>{profiles.streetTwo}</td>
                                <td>{profiles.city}</td>
                                <td>{profiles.state}</td>
                                <td>{profiles.zipcode}</td>
                                <td><button onClick={this.props.deleteProfiles.bind(this, profiles.id)} className="btn btn-danger btn-sm">DELETE</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    profiles: state.profiles.profiles
});

export default connect(mapStateToProps, { getProfiles, deleteProfiles })(Profiles);
