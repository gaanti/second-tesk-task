import React, { useState } from 'react';
import { ChoosedItem, ContentContainer, ItemsContainer, MainPageContainer, Title } from './main-page.styles';
import { Button, CardActions, CardContent, Typography } from '@mui/material';
import { useGetPokemonsQuery } from '../app/services/pokemon';
import Item from './item/item';
import { FullPokemon } from '../app/types/full-pokemon';
import { activePokemonSelector, setActivePokemon } from '../app/slices/pokemon';
import { useDispatch, useSelector } from 'react-redux';

function MainPage() {
  const { data } = useGetPokemonsQuery();
  const pokemon = useSelector(activePokemonSelector)


  return (
    <MainPageContainer>
      <Title>Pokedex</Title>
      <ContentContainer>
        <ItemsContainer>
          {data?.map(pokemon => {
            return (
              <Item key={pokemon.name} pokemonName={pokemon.name}/>
            );
          })}</ItemsContainer>
        <ChoosedItem>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
              {pokemon?.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              adjective
            </Typography>
            <Typography variant='body2'>
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </ChoosedItem>
      </ContentContainer>
    </MainPageContainer>
  );
}

export default MainPage;