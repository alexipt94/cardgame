// Раньше CardModel был одним типом с необязательными hp/attack, поэтому заклинание
// без hp (Fireball) было структурно не отличимо от юнита, у которого просто забыли
// указать hp (опечатка тоже прошла бы проверку типов). Явный дискриминант `kind`
// заставляет каждое место, которое читает hp/attack, сначала сузить тип и получить
// эти поля гарантированно определёнными — а не как `number | undefined`.
export type SpellCard = {
  kind: 'spell';
  id: string;
  name: string;
  cost: number;
  attack: number;
  effects?: CardEffectType[];
  descr: string;
};

export type UnitCard = {
  kind: 'unit';
  id: string;
  name: string;
  cost: number;
  hp: number;
  attack: number;
  effects?: CardEffectType[];
  descr: string;
};

export type CardModel = SpellCard | UnitCard;

export type CardEffectType = 'swarm' | 'acceleration' | 'splashAttack' | 'bite' | 'stun' | 'bow';
