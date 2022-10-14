import React from 'react';
import { ContentContainer, MainPageContainer } from './main-page.styles';
import { Typography } from '@mui/material';
import ChoosedItem from './choosed-item/choosed-item';
import ItemsList from './item/items-list';

function MainPage() {
  return (
    <MainPageContainer>
      <Typography variant='h2' component='div' align={'center'} gutterBottom>
        Pokedex
      </Typography>
      <ContentContainer>
        <ItemsList />
        <ChoosedItem />
      </ContentContainer>
    </MainPageContainer>
  );
}

export default React.memo(MainPage);