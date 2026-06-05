import type { Battlefield } from './Battlefield';

export function cellIndex(battlefield: Battlefield, row: number, col: number): number {
  return row * battlefield.cols + col;
}
