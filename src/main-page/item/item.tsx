import React, { useEffect } from 'react';
import { Box, Card, CardContent, LinearProgress, Typography } from '@mui/material';
import { useGetPokemonByNameQuery } from '../../app/services/pokemon';
import { PokemonImage } from '../main-page.styles';
import ItemTag from './item-tag';
import { useDispatch, useSelector } from 'react-redux';
import { activePokemonSelector, setActivePokemon } from '../../app/slices/pokemon';

const Item = (props: { pokemonName: string }) => {
  const dispatch = useDispatch();
  const pokemon = useSelector(activePokemonSelector);
  const { data, isLoading } = useGetPokemonByNameQuery(props.pokemonName);
  useEffect(() => {
    if (data) {
      if (!pokemon) {
        dispatch(setActivePokemon(data));
      }
    }
  }, [data]);
  if (data) {
    return (
      <Card sx={{ maxWidth: 275, cursor: 'pointer' }} onClick={() => dispatch(setActivePokemon(data))}>
        <CardContent>
          <PokemonImage src={data?.sprites.front_default} alt='' />
          <Typography variant='h5' component='div'>
            {data.name}
          </Typography>
          <div>
            {data.types.map((type) => {
              return (
                <ItemTag type={type.type.name} />
              );
            })}
          </div>
        </CardContent>
      </Card>
    );
  } else if (isLoading) return <Box sx={{ width: '100%' }}>
    <LinearProgress />
  </Box>;
  return <div />;
};

export default React.memo(Item);