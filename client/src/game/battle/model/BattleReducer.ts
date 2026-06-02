import { occupyCell } from '@/game/battlefield/model/occupyCell';
import type { EntityId } from '@/game/hero/model/types';
import type { BattleState } from './BattleState';

export type BattleAction = {
  type: 'OCCUPY_CELL';
  row: number;
  col: number;
  occupantId: EntityId;
};

export function battleReducer(state: BattleState, action: BattleAction): BattleState {
  switch (action.type) {
    case 'OCCUPY_CELL': {
      const newBattlefield = occupyCell(
        state.battlefield,
        action.row,
        action.col,
        action.occupantId,
      );
      return { ...state, battlefield: newBattlefield };
    }
    default:
      return state;
  }
}
