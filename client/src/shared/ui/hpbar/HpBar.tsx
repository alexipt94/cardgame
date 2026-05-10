interface HpBarProps {
  hp: number;
  maxHp: number;
}

import './HpBar.css';

export function HpBar({ hp, maxHp }: HpBarProps) {
  const hpPercent = (hp / maxHp) * 100;

  let hpBarStateClass = 'hpbar__healthy';

  if (hpPercent <= 33) {
    hpBarStateClass = 'hpbar__danger';
  } else if (hpPercent <= 66) {
    hpBarStateClass = 'hpbar__warning';
  }

  return (
    <div className={`hpbar ${hpBarStateClass}`}>
      {hp} / {maxHp}
    </div>
  );
}
