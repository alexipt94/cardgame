import type { Cell } from './Cell';

export interface Battlefield {
  rows: number;
  cols: number;
  cells: Cell[];
}

export function withinBounds(battlefield: Battlefield, row: number, col: number): boolean {
  return row >= 0 && row < battlefield.rows && col >= 0 && col < battlefield.cols;
}
