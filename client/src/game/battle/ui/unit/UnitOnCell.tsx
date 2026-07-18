import type { UnitModel } from '@/game/unit/model/UnitModel';
import './UnitOnCell.css';
import { HpBar } from '@/shared/ui/hpbar/HpBar';

interface UnitOnCellProps {
  unit: UnitModel;
}

export function UnitOnCell({ unit }: UnitOnCellProps) {
  return (
    <article className="unit-on-cell">
      <div className="unit-on-cell__attack">{unit.atk}</div>
      <div className="unit-on-cell__name">{unit.name}</div>
      <div className="unit-on-cell__vitals">
        <HpBar currentHp={unit.hp} maxHp={unit.maxHp} />
        {unit.maxArmor > 0 ? <span className="unit-on-cell__armor">🛡 {unit.armor}</span> : null}
      </div>
      {unit.statuses.length > 0 ? <div className="unit-on-cell__statuses">{'статусы'}</div> : null}
      <img className="unit-on-cell__sprite" src={unit.spriteSrc} alt={unit.name} />
    </article>
  );
}
