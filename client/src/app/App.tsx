import { useState } from 'react';
import { BattlePage } from '@/pages/battlepage/BattlePage';
import { Card, type CardProps } from '../components/Card';
import { Hero } from '../game/hero/ui/Hero';

function App() {
  const cards: CardProps[] = [
    { name: 'Goblin', cost: 3, descr: 'Weak goblin', hp: 50, attack: 15, effects: ['Kucha'] },
    { name: 'Knight', cost: 6, descr: 'Knight', hp: 150, attack: 45, effects: ['razgon'] },
    {
      name: 'Dragon',
      cost: 9,
      descr: 'green dragon',
      hp: 350,
      attack: 65,
      effects: ['Splash attack'],
    },
    { name: 'Wolf', cost: 5, descr: 'wolf', hp: 90, attack: 35, effects: ['Bite'] },
    { name: 'Orc', cost: 7, descr: 'orc', hp: 150, attack: 55, effects: ['Stun'] },
    { name: 'Archer', cost: 3, descr: 'archer', hp: 40, attack: 25, effects: ['Bow'] },
  ];
  const [hp, setHp] = useState(30);
  const [battle, setBattle] = useState(false);

  if (battle) {
    return <BattlePage />;
  }
  return (
    <section id="center">
      <div>
        {hp > 0 && <Hero name="Alex" hp={hp} maxHp={30} />}
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
          <Card key={card.name} {...card} />
        ))}
      </div>
    </section>
  );
}

export default App;
