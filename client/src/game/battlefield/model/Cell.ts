import type { CellEffect } from './types';

export interface Cell {
  id: string;
  row: number;
  col: number;
  occupantId: string | null;
  effects: CellEffect[];
}
