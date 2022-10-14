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
  @media (max-width: 835px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 744px){
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 666px){
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 580px){
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  position: relative;
  gap: 15px;
  justify-content: space-evenly;
`;
export const ChoosedItemContainer = styled(Card)`
  position: sticky;
  left: 0;
  top: 10%;
  height: min-content;
  min-width: 250px;
  overflow: scroll !important;
  @media (max-width: 835px){
    min-width: 350px;
  }
  @media (max-width: 744px){
    min-width: 200px;
  }
  @media (max-width: 666px){
    min-width: 200px;
  }
  @media (max-width: 580px){
    min-width: 150px;
  }
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
