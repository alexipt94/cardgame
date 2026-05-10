import { HpBar } from '@/shared/ui/hpbar/HpBar';

interface HeroProps {
  hp: number;
  maxHp: number;
  name: string;
  avatar?: string;
  icon?: string;
}

export function Hero({ hp, maxHp, name, avatar, icon }: HeroProps) {
  return (
    <div className="hero">
      <div className="herohpbar">
        <HpBar hp={hp} maxHp={maxHp} />
      </div>
      <div className="heroname">{name}</div>
      <div className="heroavatar">{avatar}</div>
      <div className="heroicon">{icon}</div>
    </div>
  );
}
