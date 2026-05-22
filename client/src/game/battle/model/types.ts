export type BattleMode = 'duel' | 'boss';

export type MissionConfig = {
  mode: BattleMode;
  rows: number;
  cols: number;
};
