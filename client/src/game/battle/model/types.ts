export type BattleMode = 'duel' | 'boss';
export type PlayerSide = 'left' | 'right';
export type MissionConfig = {
  mode: BattleMode;
  rows: number;
  cols: number;
  playerSide: PlayerSide;
};

export type CardId = string;

export type HandCardState = {
  cardId: CardId;
  countdown: number;
};

export type HandSlot = { occupied: true; item: HandCardState } | { occupied: false; index: number };
