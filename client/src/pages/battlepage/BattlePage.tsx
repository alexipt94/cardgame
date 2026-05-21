//import { useState } from 'react';
import { createBattlefieldCells } from './BattleFieldGrid';
import './BattlePage.css';
export function BattlePage() {
  // const [isDraggingCard, setIsDraggingCard] = useState(false);
  const rows = 4;
  const colsL = 1;
  const colsR = 1;
  const colsC = 10;
  const cellsL = createBattlefieldCells(rows, colsL);
  const cellsR = createBattlefieldCells(rows, colsR);
  const cellsC = createBattlefieldCells(rows, colsC);
  return (
    <div className="battle-page">
      <header className="battle-header battle-section">
        <div className="battle-header-player">Alex</div>
        <div className="battle-header-timer">00:00</div>
        <div className="battle-header-enemy">Boss</div>
      </header>

      <main className="battle-field battle-section">
        <img className="battlefield-bg" src="/assets/background/grass_bf.png" alt="" />

        <div className="battlefield-layout">
          <div
            className="battlefield-zone battlefield-zone--left"
            style={{ gridTemplateRows: `repeat(${rows}, 1fr)` }}
          >
            {cellsL.map((cell) => (
              <div key={cell.id} className="battlefield-cell">
                {cell.row}:{cell.col}:{'L'}
              </div>
            ))}
          </div>

          <div
            className="battlefield-play-area"
            style={{ gridTemplateRows: `repeat(${rows}, 1fr)` }}
          >
            {cellsC.map((cell) => (
              <div key={cell.id} className="battlefield-cell">
                {cell.row}:{cell.col}:{'C'}
              </div>
            ))}
          </div>

          <div
            className="battlefield-zone battlefield-zone--right"
            style={{ gridTemplateRows: `repeat(${rows}, 1fr)` }}
          >
            {cellsR.map((cell) => (
              <div key={cell.id} className="battlefield-cell">
                {cell.row}:{cell.col}:{'R'}
              </div>
            ))}
          </div>
        </div>
      </main>

      <section className="battle-chat battle-section">Chat</section>
      <section className="battle-deck battle-section">Deck</section>
      <section className="battle-hand battle-section">Hand</section>
      <section className="battle-graveyard battle-section">Graveyard</section>
    </div>
  );
}
