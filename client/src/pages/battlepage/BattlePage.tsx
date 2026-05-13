import './BattlePage.css';

export function BattlePage() {
  return (
    <div className="battle-page">
      {/* Header: имя игрока | таймер | имя врага */}
      <header className="battle-header battle-section">
        <div className="battle-header-player">Alex</div>
        <div className="battle-header-timer">00:00</div>
        <div className="battle-header-enemy">Boss</div>
      </header>

      {/* Player Zone — левая колонка */}
      <aside className="battle-player battle-section">Player Zone</aside>

      {/* Центральное поле — основная зона боя */}
      <main className="battle-field battle-section">Battlefield</main>

      {/* Enemy Zone — правая колонка */}
      <aside className="battle-enemy battle-section">Enemy Zone</aside>

      {/* Нижняя полоса: колода | рука | кладбище */}
      <section className="battle-deck battle-section">Deck</section>
      <section className="battle-hand battle-section">Hand</section>
      <section className="battle-graveyard battle-section">Graveyard</section>
    </div>
  );
}
