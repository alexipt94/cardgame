import type { Battlefield } from './Battlefield';
import { getCell } from './getCell';

export function canPlaceEntity(battlefield: Battlefield, row: number, col: number): boolean {
  const cell = getCell(battlefield, row, col);
  return cell?.occupantId === null;
}
