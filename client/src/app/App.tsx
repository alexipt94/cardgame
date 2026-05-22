import { useState } from 'react';
import { demoCards } from '@/game/card/fixtures';
import type { CardModel } from '@/game/card/model/types';
import { Card } from '@/game/card/ui/Card';
import { playerHero } from '@/game/hero/fixtures';
import { BattlePage } from '@/pages/battlepage/BattlePage';
import { Hero } from '../game/hero/ui/Hero';

function App() {
  const cards: CardModel[] = demoCards;
  const [hp, setHp] = useState(30);
  const [battle, setBattle] = useState(false);

  if (battle) {
    return <BattlePage />;
  }
  return (
    <section id="center">
      <div>
        {hp > 0 && <Hero {...playerHero} currentHp={hp} />}
        <button type="button" onClick={() => setHp((prevHp) => Math.max(prevHp - 5, 0))}>
          -5 HP
        </button>
        <button type="button" onClick={() => setHp((prevHp) => Math.min(prevHp + 5, 30))}>
          +5 HP
        </button>
        <button type="button" onClick={() => setHp(30)}>
          Reset
        </button>
        <button type="button" onClick={() => setBattle((battle) => !battle)}>
          Battlefield
        </button>
      </div>

      <div>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}

export default App;
