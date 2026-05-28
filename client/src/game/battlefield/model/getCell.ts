import { type Battlefield, withinBounds } from './Battlefield';
import type { Cell } from './Cell';

export function getCell(battlefield: Battlefield, row: number, col: number): Cell | null {
  if (!withinBounds(battlefield, row, col)) {
    return null;
  }
  const index = row * battlefield.cols + col;
  return battlefield.cells[index] ?? null;
}
