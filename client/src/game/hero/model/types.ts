export type HeroSide = 'player' | 'enemy' | 'boss';

export type HeroUIModel = {
  id: string;
  name: string;
  side: HeroSide;
  currentHp: number;
  maxHp: number;
  portraitSrc: string;
};
