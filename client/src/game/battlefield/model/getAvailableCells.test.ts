import { describe, expect, it } from 'vitest';
import { createBattlefield } from './createBattlefield';
import { getAvailableCells } from './getAvailableCells';
import { occupyCell } from './occupyCell';

const field = createBattlefield(4, 10);
describe('getAvailableCells', () => {
  it('левая сторона', () => {
    const result = getAvailableCells(field, 'left');
    expect(result.every((cell) => [0, 1, 2].includes(cell.col))).toBe(true);
    expect(result).toHaveLength(12);
  });
  it('правая сторона', () => {
    const result = getAvailableCells(field, 'right');
    expect(result.every((cell) => [7, 8, 9].includes(cell.col))).toBe(true);
    expect(result).toHaveLength(12);
  });
  it('проверка занятой клетки', () => {
    const occupiedField = occupyCell(field, 1, 1, 'test');
    const result = getAvailableCells(occupiedField, 'left');
    expect(result.some((cell) => cell.col === 1 && cell.row === 1)).toBe(false);
    expect(result).toHaveLength(11);
  });
});
