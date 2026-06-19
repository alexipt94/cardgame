import type { Battlefield } from '@/game/battlefield/model/Battlefield';
import type { Cell } from '@/game/battlefield/model/Cell';
import './BattlePage.css';
interface BattleFieldGridProps {
  battlefield: Battlefield;
  onCellClick: (row: number, col: number) => void;
  availableCells: Cell[];
}

export function BattleFieldGrid({
  battlefield,
  onCellClick,
  availableCells,
}: BattleFieldGridProps) {
  return (
    <div
      className="battlefield-play-area"
      style={
        {
          ['--battle-cols' as string]: battlefield.cols,
          ['--battle-rows' as string]: battlefield.rows,
          gridTemplateColumns: `repeat(${battlefield.cols}, 1fr)`,
          gridTemplateRows: `repeat(${battlefield.rows}, 1fr)`,
        } as React.CSSProperties
      }
    >
      {battlefield.cells.map((cell) => {
        const isAvailable = availableCells.some((c) => c.id === cell.id);

        return (
          <button
            key={cell.id}
            type="button"
            className={[
              'battlefield-cell',
              cell.occupantId !== null && 'battlefield-cell--occupied',
              isAvailable && 'battlefield-cell--available',
            ]
              .filter(Boolean)
              .join(' ')}
            disabled={!isAvailable}
            onClick={isAvailable ? () => onCellClick(cell.row, cell.col) : undefined}
          >
            {cell.row}:{cell.col}
          </button>
        );
      })}
    </div>
  );
}
