import './BattlePage.css';

export function BattlePage() {
  return (
    <div className="battle-page">
      <header className="battle-header battle-section">
        <div className="battle-header-player">Alex</div>
        <div className="battle-header-timer">00:00</div>
        <div className="battle-header-enemy">Boss</div>
      </header>

      <main className="battle-field battle-section">Battlefield</main>

      <section className="battle-chat battle-section">Chat</section>
      <section className="battle-deck battle-section">Deck</section>
      <section className="battle-hand battle-section">Hand</section>
      <section className="battle-graveyard battle-section">Graveyard</section>
    </div>
  );
}
