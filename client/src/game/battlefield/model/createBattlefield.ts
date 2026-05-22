import type { Battlefield } from './Battlefield';
import type { Cell } from './Cell';

export function createBattlefield(rows: number, cols: number): Battlefield {
  const cells: Cell[] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      cells.push({
        id: `cell-${row}-${col}`,
        row,
        col,
        occupantId: null,
        effects: [],
      });
    }
  }

  return {
    rows,
    cols,
    cells,
  };
}
