import { BATTLEFIELD_COLS, BATTLEFIELD_ROWS } from '@/game/battlefield/model/constants';
import type { MissionConfig } from './model/types';

export const demoMission: MissionConfig = {
  mode: 'boss',
  rows: BATTLEFIELD_ROWS,
  cols: BATTLEFIELD_COLS,
};
