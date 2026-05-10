import { Card } from '../components/Card';

function App() {
  return (
    <section id="center">
      <div>
        <Card name="Goblin" cost={3} descr="Weak goblin" hp={50} attack={15} effects={['Kucha']} />
        <Card
          name="Knight"
          cost={6}
          descr="Emperor knight"
          hp={150}
          attack={45}
          effects={['Razgon']}
        />
        <Card
          name="Dargon"
          cost={9}
          descr="Green Dragon"
          hp={320}
          attack={65}
          effects={['Splash attack', 'Dragon Breath', 'Dragon Blood']}
        />
      </div>
    </section>
  );
}

export default App;
