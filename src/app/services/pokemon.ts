import { api } from '../@api/api';
import { Pokemon } from '../types/pokemon';
import { PokemonTypes } from '../types/pokemonTypes';
import { FullPokemon } from '../types/full-pokemon';


export interface getPokemonsResponse {
  count
    :
    number;
  next
    :
    string;
  previous
    :
    any;
  results
    : Pokemon[];
}

export interface getPokemonsRequest {
  limit: number;
  offset: number;

}

export interface getPokemonTypesRequest {
  limit?: number;
}

export const pokemonApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPokemons: builder.query<Pokemon[], getPokemonsRequest>({
      query: (queryArg: getPokemonsRequest) => ({
        url: `/pokemon/${queryArg != undefined ? `?limit=${queryArg.limit}&offset=${queryArg.offset}` : ''}`,
        method: 'GET',
      }),
      transformResponse: (response: { results: Pokemon[] }) => response.results,
    }),
    getPokemonById: builder.query<FullPokemon, number>({
      query: (queryArg: number) => ({
        url: `/pokemon/${queryArg}`,
        method: 'GET',
      }),
    }),
    getPokemonByName: builder.query<FullPokemon, string>({
      query: (queryArg: string) => ({
        url: `/pokemon/${queryArg}`,
        method: 'GET',
      }),
    }),
    getPokemonTypes: builder.query<PokemonTypes, getPokemonTypesRequest>({
      query: (queryArg: getPokemonTypesRequest) => ({
        url: `/type${queryArg && `?limit=${queryArg}`}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokemonApi;
