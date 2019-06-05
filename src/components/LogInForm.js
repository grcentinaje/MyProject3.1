import React, { Component } from "react";
import Input from "./Input";
import "../components/styles/LogInForm.css";

class LogInForm extends Component {
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
            <h1 className="text-center">Log-In</h1>
            <div className="form-group">
              <label htmlFor="artwork">Email:</label>
              <Input style={{ width: "50px" }} />
              <label htmlFor="artwork">Password:</label>
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

export default LogInForm ;
