import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useGetPokemonByNameQuery } from '../../app/services/pokemon';
import { PokemonImage } from '../main-page.styles';
import ItemTag from './item-tag';
import { FullPokemon } from '../../app/types/full-pokemon';
import { useDispatch, useSelector } from 'react-redux';
import { activePokemonSelector, setActivePokemon } from '../../app/slices/pokemon';

const Item = (props: { pokemonName: string}) => {
  const dispatch = useDispatch()
  const skip = useRef(false);
  const pokemon = useSelector(activePokemonSelector)
  const { data } = useGetPokemonByNameQuery(props.pokemonName);
  useEffect(() => {
    if (!pokemon && data) {
        dispatch(setActivePokemon(data));
    }
  }, [data]);
  if (data) {
    return (
      <Card sx={{ maxWidth: 275 }} onClick={() => dispatch(setActivePokemon(data))}>
        <CardContent>
          <PokemonImage src={data?.sprites.front_default} alt='' />
          <Typography variant='h5' component='div'>
            {data && data.name}
          </Typography>
          <div>
            {data?.types.map((type) => {
              return (
                <ItemTag type={type.type.name} />
              );
            })}
          </div>
          <Typography variant='body2'>
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
      </Card>
    );
  }
  return <div/>;
}

export default React.memo(Item);