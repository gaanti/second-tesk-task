export interface FullPokemon {
  height: number,
  held_items: [],
  'weight': number,
  id: number,
  is_default: boolean,
  location_area_encounters: string,
  name: string,
  order: number,
  past_types: [],
  'types': types[],
  'stats': stats[],
  'sprites': sprites
  species: species
  moves: moves[]
  abilities: abilities[],
  base_experience: number,
  forms: forms[],
  game_indices: game_indicies[]
}


interface stats {
  'base_stat': number,
  'effort': number,
  'stat': {
    'name': string,
    'url': string
  }
}

interface types {
  'slot': number,
  'type': {
    'name': string,
    'url': string
  }
}

interface sprites {
  'back_default': string,
  'back_female': string,
  'back_shiny': string,
  'back_shiny_female': string,
  'front_default': string,
  'front_female': string,
  'front_shiny': string,
  'front_shiny_female': string,
  'other': {
    'dream_world': {
      'front_default': string,
      'front_female': string
    },
    'home': {
      'front_default': string,
      'front_female': string,
      'front_shiny': string,
      'front_shiny_female': string
    },
    'official-artwork': {
      'front_default': string
    }
  },
  'versions': {
    'generation-i': {
      'red-blue': {
        'back_default': string,
        'back_gray': string,
        'back_transparent': string,
        'front_default': string,
        'front_gray': string,
        'front_transparent': string
      },
      'yellow': {
        'back_default': string,
        'back_gray': string,
        'back_transparent': string,
        'front_default': string,
        'front_gray': string,
        'front_transparent': string
      }
    },
    'generation-ii': {
      'crystal': {
        'back_default': string,
        'back_shiny': string,
        'back_shiny_transparent': string,
        'back_transparent': string,
        'front_default': string,
        'front_shiny': string,
        'front_shiny_transparent': string,
        'front_transparent': string
      },
      'gold': {
        'back_default': string,
        'back_shiny': string,
        'front_default': string,
        'front_shiny': string,
        'front_transparent': string
      },
      'silver': {
        'back_default': string,
        'back_shiny': string,
        'front_default': string,
        'front_shiny': string,
        'front_transparent': string
      }
    },
    'generation-iii': {
      'emerald': {
        'front_default': string,
        'front_shiny': string
      },
      'firered-leafgreen': {
        'back_default': string,
        'back_shiny': string,
        'front_default': string,
        'front_shiny': string
      },
      'ruby-sapphire': {
        'back_default': string,
        'back_shiny': string,
        'front_default': string,
        'front_shiny': string
      }
    },
    'generation-iv': {
      'diamond-pearl': {
        'back_default': string,
        'back_female': string | null,
        'back_shiny': string,
        'back_shiny_female': string | null,
        'front_default': string,
        'front_female': string | null,
        'front_shiny': string,
        'front_shiny_female': string | null
      },
      'heartgold-soulsilver': {
        'back_default': string,
        'back_female': string | null,
        'back_shiny': string,
        'back_shiny_female': string | null,
        'front_default': string,
        'front_female': string | null,
        'front_shiny': string,
        'front_shiny_female': string | null
      },
      'platinum': {
        'back_default': string,
        'back_female': string | null,
        'back_shiny': string,
        'back_shiny_female': string | null,
        'front_default': string,
        'front_female': string | null,
        'front_shiny': string,
        'front_shiny_female': string | null
      }
    },
    'generation-v': {
      'black-white': {
        'animated': {
          'back_default': string,
          'back_female': string | null,
          'back_shiny': string,
          'back_shiny_female': string | null,
          'front_default': string,
          'front_female': string | null,
          'front_shiny': string,
          'front_shiny_female': string | null
        },
        'back_default': string,
        'back_female': string | null,
        'back_shiny': string,
        'back_shiny_female': string | null,
        'front_default': string,
        'front_female': string | null,
        'front_shiny': string,
        'front_shiny_female': string | null
      }
    },
    'generation-vi': {
      'omegaruby-alphasapphire': {
        'front_default': string,
        'front_female': string | null,
        'front_shiny': string,
        'front_shiny_female': string | null
      },
      'x-y': {
        'front_default': string,
        'front_female': string | null,
        'front_shiny': string,
        'front_shiny_female': string | null
      }
    },
    'generation-vii': {
      'icons': {
        'front_default': string,
        'front_female': string | null
      },
      'ultra-sun-ultra-moon': {
        'front_default': string,
        'front_female': string | null,
        'front_shiny': string,
        'front_shiny_female': string | null
      }
    },
    'generation-viii': {
      'icons': {
        'front_default': string,
        'front_female': string | null
      }
    }
  }
}

interface species {
  name: string,
  url: string
}

interface moves {
  move: {
    name: string,
    url: string
  },
  version_group_details: [
    {
      level_learned_at: number,
      move_learn_method: {
        name: string,
        url: string
      },
      version_group: {
        name: string,
        url: string
      }
    }
  ]
}

interface abilities {
  ability: {
    name: string,
    url: string
  },
  is_hidden: boolean,
  slot: number
}

interface forms {
  name: string,
  url: string
}

interface game_indicies {
  game_index: number,
  version: {
    name: string,
    url: string
  }
}