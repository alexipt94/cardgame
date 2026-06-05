import type { Battlefield } from './Battlefield';
import { updateCell } from './updateCell';

export function clearCell(battlefield: Battlefield, row: number, col: number): Battlefield {
  return updateCell(battlefield, row, col, (cell) => ({ ...cell, occupantId: null }));
}
