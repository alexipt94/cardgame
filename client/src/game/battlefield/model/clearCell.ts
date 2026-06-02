import { type Battlefield, withinBounds } from './Battlefield';

export function clearCell(battlefield: Battlefield, row: number, col: number): Battlefield {
  if (!withinBounds(battlefield, row, col)) {
    return battlefield;
  }
  const targetIndex = row * battlefield.cols + col;
  const newCells = battlefield.cells.map((cell, index) => {
    return index === targetIndex ? { ...cell, occupantId: null } : cell;
  });
  return { ...battlefield, cells: newCells };
}
