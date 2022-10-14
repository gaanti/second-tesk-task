import React from 'react';
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { useGetPokemonByNameQuery } from '../../app/services/pokemon';
import { PokemonTypeTag } from '../main-page.styles';

function Item(props: { pokemonName: string }) {
  const { data } = useGetPokemonByNameQuery(props.pokemonName);

  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>{/*
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {pokemon.name}
              </Typography>*/}
        <Typography variant='h5' component='div'>
          {data && data.name}
        </Typography>
        <div>
          {data?.types.map((type) => {
            console.log(type);
            return (
              <PokemonTypeTag>
                {type.type.name}
              </PokemonTypeTag>
            );
          })}
        </div>
        <Typography variant='body2'>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default Item;