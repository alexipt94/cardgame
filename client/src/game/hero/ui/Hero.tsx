import { HpBar } from '@/shared/ui/hpbar/HpBar';
import type { HeroUIModel } from '../model/types';
import './Hero.css';

// Props берём из модели — id не нужен для рендера
type HeroProps = Omit<HeroUIModel, 'id'> & { isSelected?: boolean; onSelect?: () => void };

export function Hero({
  name,
  side,
  currentHp,
  maxHp,
  portraitSrc,
  isSelected,
  onSelect,
}: HeroProps) {
  return (
    <button
      className={['hero', `hero--${side}`, isSelected && 'hero--selected']
        .filter(Boolean)
        .join(' ')}
      onClick={onSelect}
      type="button"
    >
      <div className="hero__portrait-wrap">
        <img className="hero__portrait" src={portraitSrc} alt={name} />
      </div>
      <div className="hero__info">
        <div className="hero__name">{name}</div>
        <HpBar currentHp={currentHp} maxHp={maxHp} />
      </div>
    </button>
  );
}
