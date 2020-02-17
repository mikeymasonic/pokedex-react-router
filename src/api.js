import request from 'superagent';

export function getPage(page){
    return request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?page=${page}`);
}

export function getPokemon(pokemon, page){
    return request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${pokemon}&page=${page}`);
}

export function getPokemonById(uniqueId){
    return request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${uniqueId}`);
}