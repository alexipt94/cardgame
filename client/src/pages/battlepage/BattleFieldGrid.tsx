import type { Battlefield } from '@/game/battlefield/model/Battlefield';
import './BattlePage.css';
interface BattleFieldGridProps {
  battlefield: Battlefield;
  onCellClick: (row: number, col: number) => void;
}

export function BattleFieldGrid({ battlefield, onCellClick }: BattleFieldGridProps) {
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
      {battlefield.cells.map((cell) => (
        <button
          key={cell.id}
          type="button"
          className={`battlefield-cell ${cell.occupantId !== null ? 'battlefield-cell--occupied' : ''}`}
          onClick={() => onCellClick(cell.row, cell.col)}
        >
          {cell.row}:{cell.col}
        </button>
      ))}
    </div>
  );
}
