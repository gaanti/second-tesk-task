export interface Pokemon {
  id: number;
  name: string;
  types: type[];
  stats: stat[];
  moves: move[];
  height: number;
  weight: number;
}
interface stat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}
interface type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
interface move {
  move: {
    name: string;
    url: string;
  };
  version_group_details: [
    {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    },
  ];
}
