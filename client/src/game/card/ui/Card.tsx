import type { CardModel } from '../model/types';
import './Card.css';

// Props — это то, что нужно UI. Пока совпадает с моделью, но имена разные намеренно.
type CardProps = Omit<CardModel, 'id'>;

export function Card({ name, cost, hp, attack, effects, descr }: CardProps) {
  return (
    <div className="card">
      <h2 className="card__name">{name}</h2>
      <p className="card__cost">{cost}</p>
      <p className="card__hp">{hp}</p>
      <p className="card__attack">{attack}</p>
      <div className="card__effects">
        {effects?.map((effect) => (
          <span key={effect}>{effect}</span>
        ))}
      </div>
      <p className="card__descr">{descr}</p>
    </div>
  );
}
