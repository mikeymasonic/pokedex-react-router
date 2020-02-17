import React, { Component } from 'react';
import './App.css';

export default class PokeItem extends Component {
    render() {
        return (
            <li>
            <div className="info-container">
                <h2>{this.props.pokemon.pokemon}</h2>
                <p className="poke-hp"><b>HP:</b> {this.props.pokemon.hp} / <b>XP:</b> {this.props.pokemon.base_experience}</p>
            </div>

            <div className="image-container">
                <img
                    alt={this.props.pokemon.url_image}
                    src={this.props.pokemon.url_image} />
            </div>
            
            <p className="attributes-class">
                <span id="type" style={{ backgroundColor: this.props.pokemon.color_1}}><b>Type: {this.props.pokemon.type_1}</b> </span><br></br>
                <b>Attack:</b> {this.props.pokemon.attack} / 
                <b> Defense:</b> {this.props.pokemon.defense}<br></br>
                <b> Special Attack:</b> {this.props.pokemon.special_attack} /
                <b> Special Defense:</b> {this.props.pokemon.special_defense}<br></br>
                <b> Speed:</b> {this.props.pokemon.speed}<br></br>
                <b> Height:</b> {this.props.pokemon.height}" / 
                <b> Weight:</b> {this.props.pokemon.weight} oz
            </p>
        </li>

            
        );
    }
}