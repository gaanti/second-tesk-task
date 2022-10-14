import React from 'react';
import { ChoosedItem, ContentContainer, ItemsContainer, MainPageContainer, Title } from './main-page.styles';
import { Box, Button, CardActions, CardContent, Typography } from '@mui/material';
import { useGetPokemonsQuery } from '../app/services/pokemon';
import Item from './item/item';

function MainPage() {
  const { data } = useGetPokemonsQuery();

  const bull = (
    <Box
      component='span'
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  return (
    <MainPageContainer>
      <Title>Pokedex</Title>
      <ContentContainer>
        <ItemsContainer>{data?.map(pokemon => {
          return (
            <Item pokemonName={pokemon.name} />
          );
        })}</ItemsContainer>
        <ChoosedItem>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
              Word of the Day
            </Typography>
            <Typography variant='h5' component='div'>
              be{bull}nev{bull}o{bull}lent
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