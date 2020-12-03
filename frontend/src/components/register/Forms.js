import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addProfiles } from "../../actions/profiles";



export class Forms extends Component {
    state = {
        streetOne: "",
        streetTwo: "",
        city: "",
        state: "",
        zipcode: ""
    };

    static propTypes = {
        addProfiles: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { streetOne, streetTwo, city, state, zipcode } = this.state;
        const profiles = { streetOne, streetTwo, city, state, zipcode };
        this.props.addProfiles(profiles);
        this.setState({
          streetOne: "",
          streetTwo: "",
          city: "",
          state: "",
          zipcode: ""        
        })
    };

    render() {
        const { streetOne, streetTwo, city, state, zipcode } = this.state;
        return (
          <div className="card card-body mt-4 mb-4">
            <h2>Register or Delete Addresses</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Street One</label>
                <input
                  className="form-control"
                  type="text"
                  name="streetOne"
                  onChange={this.onChange}
                  value={streetOne}
                />
              </div>
              <div className="form-group">
                <label>Street Two</label>
                <input
                  className="form-control"
                  type="text"
                  name="streetTwo"
                  onChange={this.onChange}
                  value={streetTwo}
                />
              </div>
              <div className="form-group">
                <label>City</label>
                <input
                  className="form-control"
                  type="text"
                  name="city"
                  onChange={this.onChange}
                  value={city}
                />
              </div>
              <div className="form-group">
                <label>State</label>
                <input
                  className="form-control"
                  type="text"
                  name="state"
                  onChange={this.onChange}
                  value={state}
                />
              </div>
              <div className="form-group">
                <label>Zipcode</label>
                <input
                  className="form-control"
                  type="text"
                  name="zipcode"
                  onChange={this.onChange}
                  value={zipcode}
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

export default connect(null, { addProfiles })(Forms);
