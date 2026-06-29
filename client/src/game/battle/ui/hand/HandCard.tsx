interface HandCardProps {
  name: string;
  countdown: number;
}
import './HandCard.css';
export function HandCard(props: HandCardProps) {
  return (
    <div className="hand-card">
      <span className="hand-card__countdown">{props.countdown}</span>

      <span className="hand-card__name">{props.name}</span>
    </div>
  );
}
