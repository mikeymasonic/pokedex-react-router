// import React, { Component } from 'react';
// import { getCharacter } from './api.js'
// import CharacterItem from './CharacterItem.js';

// export default class Detail extends Component {
//     state = { character: {} }

//     async componentDidMount() {
//         const data = await getCharacter(this.props.match.params.charId);
        
//         if (data.body.results) {


//         this.setState({ character: data.body.results[0] })
            
//         }
//     }

//     render() {
//         const { character } = this.state;

//         return (
//             <CharacterItem character={ character } />
//       );
//     }
// }

import React, { Component } from 'react'
import { getPokemonById } from './api.js';
import PokeItem from './PokeItem.js';

export default class Detail extends Component {

    state = { pokemonChosen: {} }

    async componentDidMount() {
        const pokeOnline = await getPokemonById(this.props.match.params.pokeid);
        this.setState({ pokemonChosen: pokeOnline.body });
    }

    render() {
        return (
            <div>
                <ul className="pokes">
                    <PokeItem pokemon={this.state.pokemonChosen} />
                </ul>
            </div>
        )
    }
}
