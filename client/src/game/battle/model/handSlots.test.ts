import { describe, expect, it } from 'vitest';
import { toHandSlots } from './handSlots';
import type { HandCardState } from './types';

describe('handSlots', () => {
  it('returns 8 empty slots when hand is empty', () => {
    const slots = toHandSlots([]);
    expect(slots).toHaveLength(8);
    slots.forEach((slot) => {
      expect(slot.occupied).toBe(false);
    });
  });
  it('full hand', () => {
    const fullHand: HandCardState[] = Array.from({ length: 8 }, (_, i) => ({
      cardId: `card-${i}`,
      countdown: i,
    }));
    const result = toHandSlots(fullHand);
    result.forEach((slot, i) => {
      expect(slot.occupied).toBe(true);
      if (slot.occupied) expect(slot.item).toEqual(fullHand[i]);
    });
  });
  const fullHand: HandCardState[] = Array.from({ length: 3 }, (_, i) => ({
    cardId: `card-${i}`,
    countdown: i,
  }));
  it('3 cards', () => {
    const result = toHandSlots(fullHand);
    result.slice(0, 3).forEach((slot) => {
      expect(slot.occupied).toBe(true);
    });
    result.slice(3).forEach((slot) => {
      expect(slot.occupied).toBe(false);
    });
  });
});
