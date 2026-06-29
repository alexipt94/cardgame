import type { CardModel } from '@/game/card/model/types';
import { toHandSlots } from '../model/handSlots';
import type { CardId, HandCardState } from '../model/types';
import './BattleHand.css';
import { HandCard } from './hand/HandCard';

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
            <HandCard name={props.cards[slot.item.cardId].name} countdown={slot.item.countdown} />
          </div>
        ) : (
          <div key={slot.index} className="hand-slot hand-slot--empty"></div>
        ),
      )}
    </>
  );
}
