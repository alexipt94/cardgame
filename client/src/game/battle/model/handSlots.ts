import type { HandCardState, HandSlot } from './types';

export function toHandSlots(hand: HandCardState[], size: number = 8): HandSlot[] {
  return Array.from({ length: size }, (_, i) =>
    hand[i] ? { occupied: true, item: hand[i] } : { occupied: false, index: i },
  );
}
