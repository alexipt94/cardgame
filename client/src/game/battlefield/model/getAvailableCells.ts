import type { Battlefield } from './Battlefield';
import type { Cell } from './Cell';
import { getAvailableCols } from './getAvailableCols';

export function getAvailableCells(battlefield: Battlefield, side: 'left' | 'right'): Cell[] {
  const availableCols = getAvailableCols(side);
  return battlefield.cells.filter(
    (cell) => availableCols.includes(cell.col) && cell.occupantId === null,
  );
}
