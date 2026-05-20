//import { useState } from 'react';
import { createBattlefieldCells } from './BattleFieldGrid';
import './BattlePage.css';
export function BattlePage() {
  // const [isDraggingCard, setIsDraggingCard] = useState(false);
  const rows = 4;
  const cells = createBattlefieldCells(rows);
  return (
    <div className="battle-page">
      <header className="battle-header battle-section">
        <div className="battle-header-player">Alex</div>
        <div className="battle-header-timer">00:00</div>
        <div className="battle-header-enemy">Boss</div>
      </header>

      <main className="battle-field battle-section">
        <img className="battlefield-bg" src="/assets/background/grass_bf.png" alt="" />

        <div className={`battlefield-grid `} style={{ gridTemplateRows: `repeat(${rows}, 1fr)` }}>
          {cells.map((cell) => (
            <div key={cell.id} className="battlefield-cell">
              {cell.row}:{cell.col}
            </div>
          ))}
        </div>
      </main>

      <section className="battle-chat battle-section">Chat</section>
      <section className="battle-deck battle-section">Deck</section>
      <section className="battle-hand battle-section">Hand</section>
      <section className="battle-graveyard battle-section">Graveyard</section>
    </div>
  );
}
