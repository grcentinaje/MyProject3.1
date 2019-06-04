import React from "react";

function LogInModal(props) {
  return (
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Welcome Back!
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form className="search">
              <div className="form-group">
                <input
                  onChange={props.handleInputChange} //
                  type="First Name"
                  className="form-control"
                  id="artwork"
                />
                 <input
                  onChange={props.handleInputChange} //
                  type="Last Name"
                  className="form-control"
                  id="artwork"
                />
                 <input
                  onChange={props.handleInputChange} //
                  type="Email"
                  className="form-control"
                  id="artwork"
                />
                <input
                  onChange={props.handleInputChange} //
                  type="Password"
                  className="form-control"
                  id="artwork"
                />
                 <input
                  onChange={props.handleInputChange} //
                  type="Favorite Art Medium 1"
                  className="form-control"
                  id="artwork"
                />
                 <input
                  onChange={props.handleInputChange} //
                  type="Favorite Art Medium 2"
                  className="form-control"
                  id="artwork"
                />
                 <input
                  onChange={props.handleInputChange} //
                  type="Favorte Art Medium 3"
                  className="form-control"
                  id="artwork"
                />
                <button
                  type="submit"
                  onClick={props.handleFormSubmit}
                  className="btn btn-dark"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInModal;
