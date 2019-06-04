import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./components/styles/App.css";
import LogIn from "./components/pages/LogIn";
import Profile from "./components/pages/Profile";
import MyArt from "./components/pages/MyArt";
import ArtTips from "./components/pages/ArtTips";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <div className="container">
  
    <Router>
      <Wrapper>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/myprofile" component={Profile} />
        <Route exact path="/myart" component={MyArt} />
        <Route exact path="/arttips" component={ArtTips} />
        <Route exact path="/logout" component={LogIn} />
      </Wrapper>
    </Router>
    
    </div>
  );
}

export default App;
