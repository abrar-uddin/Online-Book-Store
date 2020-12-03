import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addDetails } from "../../actions/details";



export class DetailForms extends Component {
    state = {
        nickname: "",
        email: "",
        homeStreetOne: "",
        homeStreetTwo: "",
        homeCity: "",
        homeState: "",
        homeZipcode: ""
    };

    static propTypes = {
        addDetails: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { nickname, email, homeStreetOne, homeStreetTwo, homeCity, homeState, homeZipcode } = this.state;
        const details = { nickname, email, homeStreetOne, homeStreetTwo, homeCity, homeState, homeZipcode };
        this.props.addDetails(details);
        this.setState({
            nickname: "",
            email: "",
            homeStreetOne: "",
            homeStreetTwo: "",
            homeCity: "",
            homeState: "",
            homeZipcode: "" 
        })
    };

    render() {
        const { nickname, email, homeStreetOne, homeStreetTwo, homeCity, homeState, homeZipcode } = this.state;
        return (
          <div className="card card-body mt-4 mb-4">
            <h2>Manage Details</h2>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Nickname</label>
                <input
                  className="form-control"
                  type="text"
                  name="nickname"
                  onChange={this.onChange}
                  value={nickname}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  onChange={this.onChange}
                  value={email}
                />
              </div>
              <div className="form-group">
                <label>Home Street Line One</label>
                <input
                  className="form-control"
                  type="text"
                  name="homeStreetOne"
                  onChange={this.onChange}
                  value={homeStreetOne}
                />
              </div>
              <div className="form-group">
                <label>Home Street Line Two</label>
                <input
                  className="form-control"
                  type="text"
                  name="homeStreetTwo"
                  onChange={this.onChange}
                  value={homeStreetTwo}
                />
              </div>
              <div className="form-group">
                <label>Home City</label>
                <input
                  className="form-control"
                  type="text"
                  name="homeCity"
                  onChange={this.onChange}
                  value={homeCity}
                />
              </div>
              <div className="form-group">
                <label>Home State</label>
                <input
                  className="form-control"
                  type="text"
                  name="homeState"
                  onChange={this.onChange}
                  value={homeState}
                />
              </div>
              <div className="form-group">
                <label>Home Zipcode</label>
                <input
                  className="form-control"
                  type="text"
                  name="homeZipcode"
                  onChange={this.onChange}
                  value={homeZipcode}
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

export default connect(null, { addDetails })(DetailForms);
