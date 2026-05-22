import type { CardModel } from './model/types';

export const demoCards: CardModel[] = [
  {
    id: 'card-001',
    name: 'Fireball',
    cost: 3,
    attack: 5,
    descr: 'Deal 5 damage to target.',
  },
  {
    id: 'card-002',
    name: 'Goblin',
    cost: 3,
    descr: 'Weak goblin',
    hp: 50,
    attack: 15,
    effects: ['Kucha'],
  },
  {
    id: 'card-004',
    name: 'Knight',
    cost: 6,
    descr: 'Knight',
    hp: 150,
    attack: 45,
    effects: ['razgon'],
  },
  {
    id: 'card-003',
    name: 'Dragon',
    cost: 9,
    descr: 'green dragon',
    hp: 350,
    attack: 65,
    effects: ['Splash attack'],
  },
  { id: 'card-005', name: 'Wolf', cost: 5, descr: 'wolf', hp: 90, attack: 35, effects: ['Bite'] },
  { id: 'card-006', name: 'Orc', cost: 7, descr: 'orc', hp: 150, attack: 55, effects: ['Stun'] },
  {
    id: 'card-007',
    name: 'Archer',
    cost: 3,
    descr: 'archer',
    hp: 40,
    attack: 25,
    effects: ['Bow'],
  },
];
