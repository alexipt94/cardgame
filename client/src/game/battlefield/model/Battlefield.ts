import type { Cell } from './Cell';

export interface Battlefield {
  rows: number;
  cols: number;
  cells: Cell[];
}
