import type { Battlefield } from '@/game/battlefield/model/Battlefield';
import type { Cell } from '@/game/battlefield/model/Cell';
import './BattlePage.css';
import { UnitOnCell } from '@/game/battle/ui/unit/UnitOnCell';
import type { UnitId, UnitModel } from '@/game/unit/model/UnitModel';

interface BattleFieldGridProps {
  battlefield: Battlefield;
  units: Record<UnitId, UnitModel>;
  onCellClick: (row: number, col: number) => void;
  availableCells: Cell[];
}

export function BattleFieldGrid({
  battlefield,
  units,
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
        const unit = cell.occupantId ? units[cell.occupantId] : null;
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
            {unit ? <UnitOnCell unit={unit} /> : `${cell.row}:${cell.col}`}
          </button>
        );
      })}
    </div>
  );
}
