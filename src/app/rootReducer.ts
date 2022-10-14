import { api } from './@api/api';
import pokemon from './slices/pokemon';

export default {
  [api.reducerPath]: api.reducer,
  pokemon: pokemon
};
