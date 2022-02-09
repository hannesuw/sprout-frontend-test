import {
  SET_POKEMONS,
  SET_POKEMONS_LOADING,
  SET_POKEMONS_ERROR,
  SET_POKEMON_DETAIL,
  SET_POKEMON_DETAIL_LOADING,
  SET_POKEMON_DETAIL_ERROR,
} from "../actionTypes";
import { pokemonApi } from "../../api/pokemonApi";

// Pokemons
const setPokemons = (payload) => {
  return { type: SET_POKEMONS, payload };
};

const setPokemonsLoading = (payload) => {
  return { type: SET_POKEMONS_LOADING, payload };
};

const setPokemonsError = (payload) => {
  return { type: SET_POKEMONS_ERROR, payload };
};

export const fetchPokemons = () => {
  return async (dispatch) => {
    dispatch(setPokemonsLoading(true));
    dispatch(setPokemonsError(null));
    try {
      const { data: pokemons } = await pokemonApi.get("/pokemon/?limit=12");
      dispatch(setPokemons(pokemons.results));
    } catch (error) {
      dispatch(setPokemonsError(error));
    } finally {
      dispatch(setPokemonsLoading(false));
    }
  };
};

// Pokemon Detail

const setPokemonDetail = (payload) => {
  return { type: SET_POKEMON_DETAIL, payload };
};

const setPokemonDetailLoading = (payload) => {
  return { type: SET_POKEMON_DETAIL_LOADING, payload };
};

const setPokemonDetailError = (payload) => {
  return { type: SET_POKEMON_DETAIL_ERROR, payload };
};

export const fetchPokemonDetail = (id) => {
  return async (dispatch) => {
    dispatch(setPokemonDetailLoading(true));
    dispatch(setPokemonDetailError(null));
    try {
      const { data: pokemon } = await pokemonApi.get(`pokemon/${id}`);
      dispatch(setPokemonDetail(pokemon));
    } catch (error) {
      dispatch(setPokemonDetailError(error));
    } finally {
      dispatch(setPokemonDetailLoading(false));
    }
  };
};
