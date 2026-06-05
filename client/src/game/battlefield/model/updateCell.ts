import { type Battlefield, withinBounds } from './Battlefield';
import type { Cell } from './Cell';
import { cellIndex } from './cellIndex';
export function updateCell(
  battlefield: Battlefield,
  row: number,
  col: number,
  updater: (cell: Cell) => Cell,
): Battlefield {
  if (!withinBounds(battlefield, row, col)) {
    return battlefield;
  }
  const targetIndex = cellIndex(battlefield, row, col);
  const newCells = battlefield.cells.map((cell, index) => {
    return index === targetIndex ? updater(cell) : cell;
  });
  return { ...battlefield, cells: newCells };
}
