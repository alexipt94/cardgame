import type { CardModel } from '@/game/card/model/types';
import { toHandSlots } from '../model/handSlots';
import type { CardId, HandCardState } from '../model/types';
import './BattleHand.css';
type BattleHandProps = {
  hand: HandCardState[];
  cards: Record<CardId, CardModel>;
};
export function BattleHand(props: BattleHandProps) {
  const slots = toHandSlots(props.hand);
  return (
    <>
      {slots.map((slot) =>
        slot.occupied ? (
          <div key={slot.item.cardId} className="hand-slot hand-slot--occupied">
            {slot.item.countdown} {props.cards[slot.item.cardId].name}
          </div>
        ) : (
          <div key={slot.index} className="hand-slot hand-slot--empty"></div>
        ),
      )}
    </>
  );
}
