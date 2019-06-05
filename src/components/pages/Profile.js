import React, { Component } from "react";
import "../styles/Profile.css";

class Profile extends Component {
    state = {
      input: ""
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
    };
  
    render() {
      return (
          <>
            <div className="my-container">
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://via.placeholder.com/150" className="card-img" alt="pic"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">Welcome User!</h1>
        <h3 className="card-text"><strong>Name:</strong> John Doe</h3>
        <h3 className="card-text"><strong>Email:</strong> user@email.com</h3>
        <h3 className="card-text"><strong>Favorite Art Mediums:</strong> Watercolors, pencils, charcoal</h3>
        <h3 className="card-text"><small class="text-muted">Last updated 3 mins ago</small></h3>
      </div>
    </div>
  </div>
  </div>
          </>
      );
    }
  }

  export default Profile ;