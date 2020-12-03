import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


export class Alerts extends Component {
    static propTypes = {
        errors: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    };

    componentDidUpdate(prevProps){
        const { error, alert, message } = this.props;
        if(error !== prevProps.error){
            if(error.msg.streetOne) alert.error(`Street One: ${error.msg.streetOne.join()}`);
            if(error.msg.streetTwo) alert.error(`Street Two: ${error.msg.streetTwo.join()}`);
            if(error.msg.city) alert.error(`city: ${error.msg.city.join()}`);
            if(error.msg.state) alert.error(`state: ${error.msg.state.join()}`);
            if(error.msg.zipcode) alert.error(`zipcode: ${error.msg.zipcode.join()}`);
            if(error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
            if(error.msg.username) alert.error(error.msg.username.join());
        }

        if(message !== prevProps.message) {
           if(message.profileDeleted) alert.success(message.profileDeleted);
           if(message.profileCreated) alert.success(message.profileCreated);
           if(message.passwordNotMatch) alert.error(message.passwordNotMatch)
        }
    }


    render() {
        return <Fragment />;
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
