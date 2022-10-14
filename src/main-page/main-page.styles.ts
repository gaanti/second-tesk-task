import styled from 'styled-components';
import { Card } from '@mui/material';

export const MainPageContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: bisque;

`;
export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  justify-content: flex-start;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  position: relative;
  justify-content: space-evenly;
`;
export const ChoosedItemContainer = styled(Card)`
  position: sticky;
  left: 0;
  top: 10%;
  height: min-content;
  min-width: 250px;
  overflow: scroll !important;
`;
export const Title = styled.h1`
  text-align: center;
`;
export const PokemonTypeTag = styled.span`
  margin: 0 2px;
  padding: 0 4px;
  border-radius: 4px;
  background-color: #fff9c3
`;
export const PokemonImage = styled.img`
    width: 100%;
`;
