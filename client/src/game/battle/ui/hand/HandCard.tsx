import { useEffect, useRef, useState } from 'react';
import { canSelectCard } from '../../model/canSelectCard';
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
  const [decreasing, setDecreasing] = useState(false);
  const prevCountdown = useRef<number | null>(null);
  // biome-ignore lint/correctness/useExhaustiveDependencies: countdown is used as a trigger, not a value
  useEffect(() => {
    if (prevCountdown.current === null) {
      prevCountdown.current = props.countdown;
      return;
    }

    if (props.countdown < prevCountdown.current) {
      setDecreasing(true);
      const timer = setTimeout(() => setDecreasing(false), 600);
      prevCountdown.current = props.countdown;
      return () => clearTimeout(timer);
    }

    prevCountdown.current = props.countdown;
  }, [props.countdown]);
  function handleClick() {
    if (!canSelectCard(props.countdown)) {
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
        className={[
          'hand-card__countdown',
          shaking && 'hand-card__countdown--shake',
          decreasing && 'hand-card__countdown--decreasing',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {props.countdown}
      </span>
      <span className="hand-card__name">{props.name}</span>
    </button>
  );
}
