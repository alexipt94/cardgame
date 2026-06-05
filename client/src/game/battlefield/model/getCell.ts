import { type Battlefield, withinBounds } from './Battlefield';
import type { Cell } from './Cell';
import { cellIndex } from './cellIndex';

export function getCell(battlefield: Battlefield, row: number, col: number): Cell | null {
  if (!withinBounds(battlefield, row, col)) {
    return null;
  }
  const index = cellIndex(battlefield, row, col);
  return battlefield.cells[index] ?? null;
}
