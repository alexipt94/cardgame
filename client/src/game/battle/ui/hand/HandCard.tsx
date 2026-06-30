import { useState } from 'react';
import './HandCard.css';

interface HandCardProps {
  name: string;
  countdown: number;
  isSelected: boolean;
  isShaking?: boolean;
  onSelect: () => void;
}

export function HandCard(props: HandCardProps) {
  const [shaking, setShaking] = useState(false);

  function handleClick() {
    if (props.countdown > 0) {
      setShaking(true);
      setTimeout(() => setShaking(false), 600);
      return;
    }
    props.onSelect();
  }

  return (
    <button
      type="button"
      className={['hand-card', props.isSelected && 'hand-card--selected'].filter(Boolean).join(' ')}
      onClick={handleClick}
    >
      <span
        className={['hand-card__countdown', shaking && 'hand-card__countdown--shake']
          .filter(Boolean)
          .join(' ')}
      >
        {props.countdown}
      </span>
      <span className="hand-card__name">{props.name}</span>
    </button>
  );
}
