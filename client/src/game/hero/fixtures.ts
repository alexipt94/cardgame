import type { HeroUIModel } from './model/types';

export const playerHero: HeroUIModel = {
  id: 'player-hero',
  name: 'Knight',
  side: 'player',
  currentHp: 28,
  maxHp: 30,
  portraitSrc: '/assets/heroes/knight.png',
};

export const enemyHero: HeroUIModel = {
  id: 'enemy-hero',
  name: 'Ranger',
  side: 'enemy',
  currentHp: 24,
  maxHp: 30,
  portraitSrc: '/assets/heroes/ranger.png',
};

export const bossHero: HeroUIModel = {
  id: 'boss-hero',
  name: 'Boss',
  side: 'boss',
  currentHp: 80,
  maxHp: 100,
  portraitSrc: '/assets/heroes/boss.png',
};
