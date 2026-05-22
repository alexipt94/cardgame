import type { Battlefield } from '@/game/battlefield/model/Battlefield';

interface BattleFieldGridProps {
  battlefield: Battlefield;
}

export function BattleFieldGrid({ battlefield }: BattleFieldGridProps) {
  return (
    <div
      className="battlefield-play-area"
      style={{ gridTemplateColumns: `repeat(${battlefield.cols}, 1fr)` }}
    >
      {battlefield.cells.map((cell) => (
        <div key={cell.id} className="battlefield-cell">
          {cell.row}:{cell.col}
        </div>
      ))}
    </div>
  );
}
