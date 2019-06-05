import React, { Component } from "react";
import Input from "../Input";
import "../styles/SignUpForm.css";

class SignUpForm extends Component {
  state = {
    input: ""
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
        <div class="card-body">
          <form className="search">
            <h1 className="text-center">Sign-Up</h1>
            <div className="form-group">
              <label htmlFor="artwork">First Name:</label>
              <Input style={{ width: "50px" }} />
              <label htmlFor="artwork">Last Name:</label>
              <Input />
              <label htmlFor="artwork">Email:</label>
              <Input />
              <label htmlFor="artwork">Password:</label>
              <Input />
              <label htmlFor="artwork">Favorite Art Mediums:</label>
              <Input />
              <label htmlFor="artwork">Bio:</label>
              <Input />

              <div class="col-md-12 text-center">
              <button
                type="submit"
                onClick={this.handleFormSubmit}
                className="btn btn-dark"
              >
                Submit
              </button>
              </div>
            </div>
          </form>
        </div>
    );
  }
}

export default SignUpForm ;
