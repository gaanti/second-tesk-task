import { api } from '../@api/api';
import { Pokemon } from '../types/pokemon';
import { PokemonTypes } from '../types/pokemonTypes';

export interface getPokemonsRequest {
  limit?: number;
}
export interface getPokemonRequest {
  id: number;
}
export interface getPokemonTypesRequest {
  limit?: number;
}

export const pizzaApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPokemons: builder.query<Pokemon[], getPokemonsRequest>({
      // It is possible to specify limit of items with ?limit={{value}}
      query: (queryArg: getPokemonsRequest) => ({
        url: `/pokemon${queryArg && `?limit=${queryArg}`}`,
        method: 'GET',
      }),
    }),
    getPokemonById: builder.query<Pokemon, getPokemonRequest>({
      query: (queryArg: getPokemonRequest) => ({
        url: `/pokemon/${queryArg}`,
        method: 'GET',
      }),
    }),
    getPokemonTypes: builder.query<PokemonTypes, getPokemonTypesRequest>({
      // It is possible to specify limit of items with ?limit={{value}}
      query: (queryArg: getPokemonTypesRequest) => ({
        url: `/type${queryArg && `?limit=${queryArg}`}`,
        method: 'GET',
      }),
    }),
  }),
});
