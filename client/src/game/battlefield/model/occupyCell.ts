import type { EntityId } from '@/game/hero/model/types';
import { type Battlefield, withinBounds } from './Battlefield';

export function occupyCell(
  battlefield: Battlefield,
  row: number,
  col: number,
  occupantId: EntityId,
): Battlefield {
  if (!withinBounds(battlefield, row, col)) {
    return battlefield;
  }
  const targetIndex = row * battlefield.cols + col;
  const newCells = battlefield.cells.map((cell, index) => {
    return index === targetIndex ? { ...cell, occupantId } : cell;
  });
  return { ...battlefield, cells: newCells };
}
