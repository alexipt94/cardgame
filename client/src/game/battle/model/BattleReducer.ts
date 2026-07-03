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
  | { type: 'SELECT_ENTITY'; entityId: EntityId | null }
  | { type: 'END_TURN' }
  | { type: 'ENEMY_TURN' }
  | { type: 'START_TURN' };

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
      const newHand = state.hand.filter((slot) => slot.cardId !== state.selectedEntityId);
      return { ...state, battlefield: newBattlefield, hand: newHand, selectedEntityId: null };
    }
    case 'SELECT_ENTITY': {
      return { ...state, selectedEntityId: action.entityId };
    }
    case 'END_TURN': {
      return { ...state, currentTurn: 'enemy' };
    }
    case 'ENEMY_TURN': {
      return { ...state, currentTurn: 'player' };
    }
    case 'START_TURN': {
      console.log('start turn', state.hand);
      const hand = state.hand.map((card) => ({
        ...card,
        countdown: Math.max(0, card.countdown - 1),
      }));
      return { ...state, hand };
    }
    default:
      return state;
  }
}
