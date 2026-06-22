import type { CardModel } from '@/game/card/model/types';
import type { CardId, HandCardState } from '../model/types';

type BattleHandProps = {
  hand: HandCardState[];
  cards: Record<CardId, CardModel>;
};
export function BattleHand(props: BattleHandProps) {
  return props.hand.map((card) => (
    <div key={card.cardId}>
      {card.countdown} {props.cards[card.cardId].name}
    </div>
  ));
}
