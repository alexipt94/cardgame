export type EffectType = 'fire' | 'mine' | 'healZone' | 'damageReduction';

export interface CellEffect {
  type: EffectType;
  duration: number;
  power: number;
  sourceCardId?: string;
}
