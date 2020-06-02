import React, { Component } from "react";

export default class Header extends Component {
  
  render() {
    return (
      <div>
        <header>
          <a href = "../"><img className="logo" src="https://i.ebayimg.com/images/g/8bMAAOSwxp9W-TVs/s-l400.jpg" alt="Pokemon" /></a>
          <h1>Pokedex</h1>
          </header>
      </div>   
    );
  }
}
