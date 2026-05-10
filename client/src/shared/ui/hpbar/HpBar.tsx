interface HpBarProps {
  hp: number;
  maxHp: number;
}

export function HpBar({ hp, maxHp }: HpBarProps) {
  return <div className="hpbar">{`${hp} / ${maxHp}`}</div>;
}
