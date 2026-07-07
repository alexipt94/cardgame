import { canPlaceEntity } from '@/game/battlefield/model/canPlaceEntity';
import { occupyCell } from '@/game/battlefield/model/occupyCell';
import type { EntityId } from '@/game/hero/model/types';
import type { BattleState } from './BattleState';
import type { CardId } from './types';

export type BattleAction =
  | { type: 'OCCUPY_CELL'; row: number; col: number }
  // Выбор карты в руке и выбор юнита/героя на поле — разные действия, поэтому и разные экшны.
  | { type: 'SELECT_CARD'; cardId: CardId | null }
  | { type: 'SELECT_ENTITY'; entityId: EntityId | null }
  | { type: 'END_TURN' }
  | { type: 'ENEMY_TURN' }
  | { type: 'START_TURN' };

export function battleReducer(state: BattleState, action: BattleAction): BattleState {
  switch (action.type) {
    case 'OCCUPY_CELL': {
      // Выставить на поле можно только выбранную карту из руки, а не выбранного героя/юнита
      // на поле — поэтому теперь читается selectedCardId, а не selectedEntityId.
      if (!state.selectedCardId) return state;
      if (!canPlaceEntity(state.battlefield, action.row, action.col)) {
        return state;
      }
      const newBattlefield = occupyCell(
        state.battlefield,
        action.row,
        action.col,
        state.selectedCardId,
      );
      const newHand = state.hand.filter((slot) => slot.cardId !== state.selectedCardId);
      return { ...state, battlefield: newBattlefield, hand: newHand, selectedCardId: null };
    }
    case 'SELECT_CARD': {
      return { ...state, selectedCardId: action.cardId };
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
