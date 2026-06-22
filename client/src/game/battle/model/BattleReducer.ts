import { canPlaceEntity } from '@/game/battlefield/model/canPlaceEntity';
import { occupyCell } from '@/game/battlefield/model/occupyCell';
import type { EntityId } from '@/game/hero/model/types';
import type { BattleState } from './BattleState';

export type BattleAction =
  | {
      type: 'OCCUPY_CELL';
      row: number;
      col: number;
    }
  | { type: 'SELECT_ENTITY'; entityId: EntityId | null };

export function battleReducer(state: BattleState, action: BattleAction): BattleState {
  switch (action.type) {
    case 'OCCUPY_CELL': {
      if (!state.selectedEntityId) return state;
      if (!canPlaceEntity(state.battlefield, action.row, action.col)) {
        return state;
      }
      const newBattlefield = occupyCell(
        state.battlefield,
        action.row,
        action.col,
        state.selectedEntityId,
      );
      return { ...state, battlefield: newBattlefield, selectedEntityId: null };
    }
    case 'SELECT_ENTITY': {
      return { ...state, selectedEntityId: action.entityId };
    }
    default:
      return state;
  }
}
