import React, { Component } from 'react';
import { 
    Link,
  } from 'react-router-dom';
import PokeItem from './PokeItem.js';
import { getPokemon } from './api.js';

export default class List extends Component {

    state = { pokeDex: [], page: this.props.match.params.page, pokemon: this.props.match.params.pokemon}
    

    async componentDidMount() {

        if(isNaN(this.props.match.params.page)){
            this.props.match.params.page = 1;
        }

        if (!this.props.match.params.pokemon){
            this.props.match.params.pokemon = '';

        }
       
        this.setState({ page: this.props.match.params.page })
        this.setState({ pokemon: this.props.match.params.pokemon})

        const pokeOnline = await getPokemon(this.props.match.params.pokemon, this.props.match.params.page);
        this.setState({ pokeDex: pokeOnline.body.results });
      }

    async handlePageChange(incre) {
        const currentPage = Number(this.state.page);
        this.props.match.params.page = currentPage + incre;
        this.setState({ page: this.props.match.params.page })

        const pokeOnline = await getPokemon(this.state.pokemon, this.props.match.params.page);
        this.setState({ pokeDex: pokeOnline.body.results });
    }


    handleSearchClick = async e => {
        e.preventDefault();

        this.props.match.params.pokemon = this.state.pokemon;
        this.props.match.params.page = 1;
        this.state.page = 1;
        
        const newPokemonOnline = await getPokemon(this.props.match.params.pokemon, 1);
        this.setState({ pokeDex: newPokemonOnline.body.results });
        
        this.props.history.push(this.props.match.params.pokemon.toString());
    }


    handleChange = e => {
        this.setState({ pokemon: e.target.value });
    }

    render() {
        const pokeNode = this.state.pokeDex.map(pokemon => <Link to={`detail/${pokemon._id}`}> <PokeItem pokemon={pokemon} /> </Link>)
        
        return (
            <div>
                <div className="search">
                    <form id="form-submit" onSubmit={this.handleSearchClick}>
                        <input onChange={e => this.setState({ pokemon: e.target.value })}></input>
                        <button id="submit">search</button>
                    </form>
                    </div>
                <div>
                    <button className="paging-button" onClick={e => this.handlePageChange(-1)} disabled={this.state.page === 1}>LAST</button>
                    <button className="paging-button" onClick={e => this.handlePageChange(1)}>NEXT</button>
                </div>  
                
                <ul className="pokes">{pokeNode}
                </ul> 
                <div>
                    <button className="paging-button" onClick={e => this.handlePageChange(-1)} disabled={this.state.page === 1}>LAST</button>
                    <button className="paging-button" onClick={e => this.handlePageChange(1)}>NEXT</button>
                </div>  
                             
            </div>
        )
    }
}
