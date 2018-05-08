import React, { Component } from 'react'
import './App.css'
import NavBar from "./NavBar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import {Container} from "semantic-ui-react";



class App extends Component {
  render() {
    return (
      <div>
          <BrowserRouter>
              <Container>
                  <NavBar/>
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                  </Switch>
              </Container>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
