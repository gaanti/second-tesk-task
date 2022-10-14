import React, { useEffect, useState } from 'react';
import { ContentContainer, ItemsContainer, MainPageContainer, Title } from './main-page.styles';
import { Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import { getPokemonsRequest, useGetPokemonsQuery } from '../app/services/pokemon';
import Item from './item/item';
import { pokemonsSelector } from '../app/slices/pokemon';
import { useSelector } from 'react-redux';
import { Pokemon } from '../app/types/pokemon';
import ChoosedItem from './choosed-item';

function MainPage() {
  const pokemons = useSelector(pokemonsSelector);
  const limit = 12;
  const [offset, setOffset] = useState(0);
  const page: getPokemonsRequest = {
    limit: 12, offset: offset,
  };
  const { data, isLoading, status } = useGetPokemonsQuery(page);
  console.log(status);

  function loadMoreItems() {
    setOffset(prevState => prevState + limit);
  }

  const [sizebleItemsList, setSizebleItemsList] = useState([] as Pokemon[]);

  const addItem = (item: Pokemon[]) => {
    setSizebleItemsList(prevState => [...prevState, ...item]);
  };
  useEffect(() => {
    data && addItem(data);
  }, [data]);


  return (
    <MainPageContainer>
      <Typography variant='h2' component='div' align={'center'} gutterBottom>
        Pokedex
      </Typography>
      <ContentContainer>
        <Stack spacing={2}>
          <ItemsContainer>
            {sizebleItemsList?.map(pokemon => {
              return (
                <Item key={pokemon.id} pokemonName={pokemon.name} />
              );
            })}</ItemsContainer>
          {status == 'fulfilled' ? (<Button variant='contained' onClick={loadMoreItems}>Load more</Button>) :
            (<Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>)}
        </Stack>
        <ChoosedItem />
      </ContentContainer>
    </MainPageContainer>
  );
}

export default MainPage;