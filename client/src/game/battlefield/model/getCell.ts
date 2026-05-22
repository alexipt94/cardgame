import type { Battlefield } from './Battlefield';
import type { Cell } from './Cell';

export function getCell(battlefield: Battlefield, row: number, col: number): Cell | undefined {
  return battlefield.cells.find((cell) => cell.row === row && cell.col === col);
}
