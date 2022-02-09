import {
  SET_POKEMONS,
  SET_POKEMONS_LOADING,
  SET_POKEMONS_ERROR,
  SET_POKEMON_DETAIL,
  SET_POKEMON_DETAIL_LOADING,
  SET_POKEMON_DETAIL_ERROR,
} from "../actionTypes";

const initialState = {
  pokemons: [],
  pokemonsLoading: true,
  pokemonsError: null,
  pokemonDetail: {},
  pokemonDetailLoading: true,
  pokemonDetailError: null,
};

export const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_POKEMONS:
      return { ...state, pokemons: payload };

    case SET_POKEMONS_LOADING:
      return { ...state, pokemonsLoading: payload };

    case SET_POKEMONS_ERROR:
      return { ...state, pokemonsError: payload };

    case SET_POKEMON_DETAIL:
      return { ...state, pokemonDetail: payload };

    case SET_POKEMON_DETAIL_LOADING:
      return { ...state, pokemonDetailLoading: payload };

    case SET_POKEMON_DETAIL_ERROR:
      return { ...state, pokemonDetailError: payload };

    default:
      return state;
  }
};
