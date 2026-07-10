import type { CardId, PlayerSide } from '@/game/battle/model/types';

export type UnitId = string;

export type UnitStatus = {
  id: string;
  kind: string;
  duration: number | null;
};
export type UnitModel = {
  id: UnitId;
  cardId: CardId;
  ownerSide: PlayerSide;
  hp: number;
  maxHp: number;
  armor: number;
  maxArmor: number;
  atk: number;
  statuses: UnitStatus[];
};
