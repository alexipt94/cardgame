import { Card, type CardProps } from '../components/Card';

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
  return (
    <section id="center">
      <div>
        {cards.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </div>
    </section>
  );
}

export default App;
