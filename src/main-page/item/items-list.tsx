import React, { useEffect, useState } from 'react';
import { ItemsContainer } from '../main-page.styles';
import Item from './item';
import { Box, Button, CircularProgress, Stack } from '@mui/material';
import { getPokemonsRequest, useGetPokemonsQuery } from '../../app/services/pokemon';
import { Pokemon } from '../../app/types/pokemon';

function ItemsList() {
  const limit = 12;
  const [offset, setOffset] = useState(0);
  const page: getPokemonsRequest = {
    limit: 12, offset: offset,
  };
  const { data, status } = useGetPokemonsQuery(page);
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
    <Stack spacing={2}>
      <ItemsContainer>
        {sizebleItemsList?.map(pokemon => {
          return (
            <Item key={pokemon.id} pokemonName={pokemon.name} />
          );
        })}</ItemsContainer>
      {data && status == 'fulfilled' ? (<Button variant='contained' onClick={loadMoreItems}>Load more</Button>) :
        (<Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>)}
    </Stack>
  );
}

export default React.memo(ItemsList);