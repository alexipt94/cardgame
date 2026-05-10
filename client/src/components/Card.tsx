export interface CardProps {
  name: string;
  cost: number;
  hp?: number;
  attack?: number;
  effects?: string[];
  descr: string;
}

export function Card({ name, cost, hp, attack, effects, descr }: CardProps) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{cost}</p>
      <p>{hp}</p>
      <p>{attack}</p>
      <div>
        {effects?.map((effect) => (
          <span key={effect}>{effect}</span>
        ))}
      </div>
      <h3>{descr}</h3>
    </div>
  );
}
