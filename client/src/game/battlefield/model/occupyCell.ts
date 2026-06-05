import type { EntityId } from '@/game/hero/model/types';
import type { Battlefield } from './Battlefield';
import { updateCell } from './updateCell';

export function occupyCell(
  battlefield: Battlefield,
  row: number,
  col: number,
  occupantId: EntityId,
): Battlefield {
  return updateCell(battlefield, row, col, (cell) => ({ ...cell, occupantId }));
}
