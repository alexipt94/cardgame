import type { Battlefield } from '@/game/battlefield/model/Battlefield';
import { createBattlefield } from '@/game/battlefield/model/createBattlefield';
import type { CardModel } from '@/game/card/model/types';
import type { EntityId, HeroUIModel } from '@/game/hero/model/types';
import type { CardId, HandCardState } from './types';

export type BattleState = {
  battlefield: Battlefield;
  heroes: HeroUIModel[];
  selectedEntityId: EntityId | null;
  cards: Record<CardId, CardModel>;
  hand: HandCardState[];
  currentTurn: 'player' | 'enemy';
};

export function createBattleState(
  rows: number,
  cols: number,
  heroes: HeroUIModel[],
  cards: CardModel[],
): BattleState {
  const battlefield = createBattlefield(rows, cols);
  const cardsRecord = Object.fromEntries(cards.map((c) => [c.id, c]));
  const hand = cards.slice(0, 4).map((c) => ({ cardId: c.id, countdown: c.cost }));
  return {
    battlefield,
    heroes,
    selectedEntityId: null,
    cards: cardsRecord,
    hand,
    currentTurn: 'player',
  };
}
