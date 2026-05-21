interface HpBarProps {
  currentHp: number;
  maxHp: number;
}

import './HpBar.css';

export function HpBar({ currentHp, maxHp }: HpBarProps) {
  const hpPercent = (currentHp / maxHp) * 100;

  let hpBarStateClass = 'hpbar__healthy';

  if (hpPercent <= 33) {
    hpBarStateClass = 'hpbar__danger';
  } else if (hpPercent <= 66) {
    hpBarStateClass = 'hpbar__warning';
  }

  return (
    <div className={`hpbar ${hpBarStateClass}`}>
      {currentHp} / {maxHp}
    </div>
  );
}
