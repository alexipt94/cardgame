export interface CardData {
  id: string;
  name: string;
  cost: number;
  attack: number;
  health: number;
  description: string;
}

// Пример карты
export const sampleCards: CardData[] = [
  {
    id: 'fire-spirit',
    name: 'Огненный Дух',
    cost: 2,
    attack: 3,
    health: 2,
    description: 'Наносит урон при появлении'
  },
  {
    id: 'stone-golem',
    name: 'Каменный Голем',
    cost: 4,
    attack: 2,
    health: 6,
    description: 'Танк'
  },
  {
    id: 'wind-nymph',
    name: 'Нимфа Ветра',
    cost: 3,
    attack: 2,
    health: 3,
    description: 'Перемещается после атаки'
  }
];