import React from 'react';
import { PokemonTypeTag } from '../main-page.styles';

function ItemTag(props: { type: string }) {
  //normal, fighting, flying, poison, ground, rock, bug, ghost, steel, fire, water, grass, electric, psychic, ice, dragon,
  //dark, fairy, unknown, shadow
  let backgroundColor = '#000';
  switch (props.type) {
    case 'normal':
      backgroundColor = 'rgba(255,255,255,0)';
      break;
    case 'fighting':
      backgroundColor = 'rgb(255,62,62)';
      break;
    case 'poison':
      backgroundColor = 'rgb(95,255,70)';
      break;
    case 'ground':
      backgroundColor = 'rgb(27,124,0)';
      break;
    case 'rock':
      backgroundColor = 'rgb(68,68,68)';
      break;
    case 'bug':
      backgroundColor = 'rgb(110,138,53)';
      break;
    case 'ghost':
      backgroundColor = 'rgb(148,137,180)';
      break;
    case 'steel':
      backgroundColor = 'rgb(224,224,224)';
      break;
    case 'fire':
      backgroundColor = 'rgb(210,63,39)';
      break;
    case 'water':
      backgroundColor = 'rgb(62,152,255)';
      break;
    case 'grass':
      backgroundColor = 'rgb(134,192,92)';
      break;
    case 'electric':
      backgroundColor = 'rgb(255,252,39)';
      break;
    case 'psychic':
      backgroundColor = 'rgb(171,18,103)';
      break;
    case 'ice':
      backgroundColor = 'rgb(150,227,255)';
      break;
    case 'dragon':
      backgroundColor = 'rgb(255,131,32)';
      break;
    case 'dark':
      backgroundColor = 'rgb(89,0,89)';
      break;
    case 'fairy':
      backgroundColor = 'rgb(255,228,141)';
      break;
    case 'shadow':
      backgroundColor = 'rgb(56,20,80)';
      break;
    default:
      backgroundColor = 'rgb(232,200,255)';
      break;
  }
  return (
    <PokemonTypeTag style={{ backgroundColor: backgroundColor }}>
      {props.type}
    </PokemonTypeTag>
  );
}

export default ItemTag;