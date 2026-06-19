import { BATTLEFIELD_COLS } from './constants';

export function getAvailableCols(side: 'left' | 'right'): number[] {
  return side === 'left'
    ? [0, 1, 2]
    : [BATTLEFIELD_COLS - 3, BATTLEFIELD_COLS - 2, BATTLEFIELD_COLS - 1];
}
