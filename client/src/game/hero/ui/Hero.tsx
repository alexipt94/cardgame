import { HpBar } from '@/shared/ui/hpbar/HpBar';
import type { HeroSide } from '../model/types';
import './Hero.css';

type HeroProps = {
  name: string;
  side: HeroSide;
  currentHp: number;
  maxHp: number;
  portraitSrc: string;
};

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
