import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const baseQuery = fetchBaseQuery({ baseUrl: 'http://hope-it-will-work.eu-north-1.elasticbeanstalk.com' });
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://pokeapi.co/api/v2',
  headers: {
    accepts: 'application/json',
  },
});
// const baseQuery = fetchBaseQuery();
export const api = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
