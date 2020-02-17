import React, { Component } from 'react';
import { 
  Route, 
  Switch,
  Link,
  BrowserRouter as Router, 
} from 'react-router-dom';
import List from './List.js';
import Detail from './Detail.js';
import About from './About.js';
import Header from './Header.js';
import Footer from './Footer.js';

export default class App extends Component {
  render() {
    return (
        <div id="things">
      <Router>
      <main id="links">
          <Link to="/">home</Link><span> / </span>
          <Link to="/about-me/about">about</Link>
          </main>
          <Header />
         
          <Switch>
              <Route exact path=":pokemon?/:page?" component={List} />  
              <Route exact path="/about-me/about" component={About} />
              <Route exact path="/detail/:pokeid?/" component={Detail} />
          </Switch>
  </Router>
  <Footer />
  </div>

    )
  }
}
