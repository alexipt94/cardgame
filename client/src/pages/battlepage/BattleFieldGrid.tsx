import type { Battlefield } from '@/game/battlefield/model/Battlefield';

interface BattleFieldGridProps {
  battlefield: Battlefield;
}

export function BattleFieldGrid({ battlefield }: BattleFieldGridProps) {
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
        <div key={cell.id} className="battlefield-cell">
          {cell.row}:{cell.col}
        </div>
      ))}
    </div>
  );
}
