export type BattlefieldCell = {
  id: string;
  row: number;
  col: number;
};

export function createBattlefieldCells(rows: number, cols: number): BattlefieldCell[] {
  const cells: BattlefieldCell[] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      cells.push({
        id: `${row}-${col}`,
        row,
        col,
      });
    }
  }

  return cells;
}
