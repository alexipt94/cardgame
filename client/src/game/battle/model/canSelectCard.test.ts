// battle/model/canSelectCard.test.ts (новый файл)
import { describe, expect, it } from 'vitest';
import { canSelectCard } from './canSelectCard';

describe('canSelectCard', () => {
  it('countdown 0 -> можно выбрать', () => {
    expect(canSelectCard(0)).toBe(true);
  });
  it('countdown 3 -> нельзя выбрать', () => {
    expect(canSelectCard(3)).toBe(false);
  });
  it('countdown -1 (защитный случай) -> можно выбрать', () => {
    expect(canSelectCard(-1)).toBe(true);
  });
});
