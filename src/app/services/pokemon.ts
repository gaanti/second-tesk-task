import {api} from "../@api/api";
import {Pokemon} from "../types/pokemon";
import {PokemonTypes} from "../types/pokemonTypes";

export const pizzaApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getPokemons: builder.query<Pokemon[], number|void>({
            // It is possible to specify limit of items with ?limit={{value}}
            query: (queryArg) => ({
                url: `/pokemon${queryArg && `?limit=${queryArg}`}`,
                method: 'GET',
            }),
        }),
        getPokemonById: builder.query<Pokemon, number>({
            query: (queryArg) => ({
                url: `/pokemon/${queryArg}`,
                method: 'GET',
            }),
        }),
        getPokemonTypes: builder.query<PokemonTypes, number|void>({
            // It is possible to specify limit of items with ?limit={{value}}
            query: (queryArg) => ({
                url: `/type${queryArg && `?limit=${queryArg}`}`,
                method: 'GET',
            }),
        })

    })
});