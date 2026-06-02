import type { EntityId } from '@/game/hero/model/types';
import type { CellEffect } from './types';

export interface Cell {
  id: string;
  row: number;
  col: number;
  occupantId: EntityId | null;
  effects: CellEffect[];
}
