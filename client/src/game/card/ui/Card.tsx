import { cardEffectLabels } from '../model/cardEffectModels';
import type { CardModel } from '../model/types';
import './Card.css';

export function Card(card: CardModel) {
  const { name, cost, attack, effects, descr } = card;
  return (
    <div className="card">
      <h2 className="card__name">{name}</h2>
      <p className="card__cost">{cost}</p>
      {card.kind === 'unit' && <p className="card__hp">{card.hp}</p>}
      <p className="card__attack">{attack}</p>
      <div className="card__effects">
        {effects?.map((effect) => (
          <span key={effect}>{cardEffectLabels[effect]}</span>
        ))}
      </div>
      <p className="card__descr">{descr}</p>
    </div>
  );
}
