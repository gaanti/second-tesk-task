import React from 'react';
import { CardContent, Typography } from '@mui/material';
import { ChoosedItemContainer, PokemonImage } from '../main-page.styles';
import ItemStats from './item-stats';
import { useSelector } from 'react-redux';
import { activePokemonSelector } from '../../app/slices/pokemon';

function ChoosedItem() {
  const activePokemon = useSelector(activePokemonSelector);
  return (
    <ChoosedItemContainer>
      <CardContent>
        <PokemonImage src={activePokemon?.sprites.front_default} alt='' />
        <Typography variant='h5' component='div' gutterBottom>
          {activePokemon?.name}
        </Typography>
        {activePokemon && <ItemStats />}
      </CardContent>
    </ChoosedItemContainer>
  );
}

export default React.memo(ChoosedItem);