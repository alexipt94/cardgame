import './HandCard.css';

interface HandCardProps {
  name: string;
  countdown: number;
  isSelected: boolean;
  onSelect: () => void;
}

export function HandCard(props: HandCardProps) {
  return (
    <button
      type="button"
      className={['hand-card', props.isSelected && 'hand-card--selected'].filter(Boolean).join(' ')}
      onClick={props.onSelect}
    >
      <span className="hand-card__countdown">{props.countdown}</span>
      <span className="hand-card__name">{props.name}</span>
    </button>
  );
}
