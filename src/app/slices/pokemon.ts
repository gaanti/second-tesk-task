import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FullPokemon } from '../types/full-pokemon';
import { pokemonApi } from '../services/pokemon';
import { RootState } from '@reduxjs/toolkit/dist/query/core/apiState';

interface initialState {
  pokemons: FullPokemon[] ;
  active_pokemon: FullPokemon | undefined;
}

const initialState: initialState = {
  pokemons: [],
  active_pokemon: undefined
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setActivePokemon: (state, action:PayloadAction<FullPokemon>) => {
      state.active_pokemon = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(pokemonApi.endpoints.getPokemonByName.matchFulfilled, (state, action) => {
      console.log(action.payload);
      state.pokemons = [ ...state.pokemons , action.payload];
    });
  },
});

// @ts-ignore
export const activePokemonSelector = (state: RootState) => state.pokemon.active_pokemon;
// @ts-ignore
export const pokemonsSelector = (state: RootState) => state.pokemon.pokemons;
export const { setActivePokemon} = pokemonSlice.actions;

export default pokemonSlice.reducer;