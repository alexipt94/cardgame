import { describe, expect, it } from 'vitest';
import { canPlaceEntity } from './canPlaceEntity';
import { createBattlefield } from './createBattlefield';
import { occupyCell } from './occupyCell';

describe('canPlaceEntity', () => {
  it('возвращает true для пустой клетки в границах', () => {
    const field = createBattlefield(4, 10);
    const result = canPlaceEntity(field, 1, 1);
    expect(result).toBe(true);
  });
  it('возвращает false для занятой клетки', () => {
    const field = createBattlefield(4, 10);
    const field1 = occupyCell(field, 1, 1, 'test');
    const result = canPlaceEntity(field1, 1, 1);
    expect(result).toBe(false);
  });
  it('возвращает false для координат за границей', () => {
    const field = createBattlefield(4, 10);
    const result = canPlaceEntity(field, 4, 10);
    expect(result).toBe(false);
  });
});
