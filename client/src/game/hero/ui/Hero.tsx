import { HpBar } from '@/shared/ui/hpbar/HpBar';
import type { HeroUIModel } from '../model/types';
import './Hero.css';

// Props берём из модели — id не нужен для рендера
type HeroProps = Omit<HeroUIModel, 'id'> & { isSelected?: boolean };

export function Hero({ name, side, currentHp, maxHp, portraitSrc }: HeroProps) {
  return (
    <article className={`hero hero--${side}`}>
      <div className="hero__portrait-wrap">
        <img className="hero__portrait" src={portraitSrc} alt={name} />
      </div>
      <div className="hero__info">
        <div className="hero__name">{name}</div>
        <HpBar currentHp={currentHp} maxHp={maxHp} />
      </div>
    </article>
  );
}
