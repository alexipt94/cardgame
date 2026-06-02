import { describe, expect, it } from 'vitest';
import type { Battlefield } from './Battlefield';
import { withinBounds } from './Battlefield';
import type { Cell } from './Cell';
import { clearCell } from './clearCell';
import { createBattlefield } from './createBattlefield';
import { getCell } from './getCell';
import { occupyCell } from './occupyCell';

const field: Battlefield = {
  rows: 4,
  cols: 10,
  cells: [],
};

describe('withinBounds', () => {
  it('возвращает true для валидной клетки в середине поля', () => {
    expect(withinBounds(field, 2, 5)).toBe(true);
  });

  it('возвращает false при отрицательном row', () => {
    expect(withinBounds(field, -1, 0)).toBe(false);
  });

  it('возвращает false при отрицательном col', () => {
    expect(withinBounds(field, 0, -1)).toBe(false);
  });

  it('возвращает false когда row равен максимуму (вне поля)', () => {
    expect(withinBounds(field, 4, 0)).toBe(false);
  });

  it('возвращает false когда col равен максимуму (вне поля)', () => {
    expect(withinBounds(field, 0, 10)).toBe(false);
  });
});

describe('getCell', () => {
  const cells: Cell[] = [
    { id: 'cell-0-0', row: 0, col: 0, occupantId: null, effects: [] },
    { id: 'cell-0-1', row: 0, col: 1, occupantId: null, effects: [] },
    { id: 'cell-1-0', row: 1, col: 0, occupantId: 'hero-1', effects: [] },
    { id: 'cell-1-1', row: 1, col: 1, occupantId: null, effects: [] },
  ];

  const field: Battlefield = { rows: 2, cols: 2, cells };

  it('возвращает клетку по валидным координатам', () => {
    expect(getCell(field, 0, 0)).toEqual({
      id: 'cell-0-0',
      row: 0,
      col: 0,
      occupantId: null,
      effects: [],
    });
  });

  it('возвращает клетку с occupantId (row=1, col=0)', () => {
    expect(getCell(field, 1, 0)).toEqual({
      id: 'cell-1-0',
      row: 1,
      col: 0,
      occupantId: 'hero-1',
      effects: [],
    });
  });

  it('возвращает null при отрицательном row', () => {
    expect(getCell(field, -1, 0)).toBeNull();
  });

  it('возвращает null при col вне поля', () => {
    expect(getCell(field, 0, 2)).toBeNull();
  });

  it('не мутирует массив cells', () => {
    const lengthBefore = field.cells.length;
    getCell(field, 0, 0);
    expect(field.cells).toHaveLength(lengthBefore);
  });
});

describe('createBattlefield', () => {
  it('длина массива cells равна rows * cols', () => {
    const field = createBattlefield(4, 10);
    expect(field.cells).toHaveLength(4 * 10);
  });

  it('каждая клетка имеет правильную структуру', () => {
    const field = createBattlefield(2, 2);
    for (const cell of field.cells) {
      expect(cell.occupantId).toBeNull();
      expect(cell.effects).toEqual([]);
      expect(typeof cell.row).toBe('number');
      expect(typeof cell.col).toBe('number');
      expect(typeof cell.id).toBe('string');
    }
  });

  it('row и col соответствуют позиции в массиве', () => {
    const field = createBattlefield(3, 4);
    field.cells.forEach((cell, index) => {
      const expectedRow = Math.floor(index / 4);
      const expectedCol = index % 4;
      expect(cell.row).toBe(expectedRow);
      expect(cell.col).toBe(expectedCol);
    });
  });
});

describe('occupyCell', () => {
  it('Клетка в пределах поля', () => {
    const bf = createBattlefield(3, 3);
    const result = occupyCell(bf, 1, 1, 'hero-1');
    expect(getCell(result, 1, 1)?.occupantId).toBe('hero-1');
  });
  it('Клетка вне поля', () => {
    const bf = createBattlefield(3, 3);
    const result = occupyCell(bf, 5, 1, 'hero-1');
    expect(result).toBe(bf);
  });
  it('Иммутабельность', () => {
    const bf = createBattlefield(3, 3);
    occupyCell(bf, 2, 1, 'hero-1');
    expect(getCell(bf, 2, 1)?.occupantId).toBe(null);
  });
});

describe('clearCell', () => {
  it('Освобождение клетки', () => {
    const bf = createBattlefield(3, 3);
    const bf1 = occupyCell(bf, 1, 1, 'hero-1');
    const bf2 = clearCell(bf1, 1, 1);
    expect(getCell(bf2, 1, 1)?.occupantId).toBe(null);
  });
  it('Клетка вне поля', () => {
    const bf = createBattlefield(3, 3);
    const occupied = occupyCell(bf, 1, 1, 'hero-1');
    const result = clearCell(occupied, 5, 1);
    expect(result).toBe(occupied);
  });
});
