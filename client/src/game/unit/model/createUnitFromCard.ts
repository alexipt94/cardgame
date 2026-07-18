import type { PlayerSide } from '@/game/battle/model/types';
import type { UnitCard } from '@/game/card/model/types';
import type { UnitModel } from './UnitModel';

export function createUnitFromCard(card: UnitCard, ownerSide: PlayerSide): UnitModel {
  const armor = card.armor ?? 0;

  return {
    id: crypto.randomUUID(),
    cardId: card.id,
    name: card.name,
    ownerSide,
    hp: card.hp,
    maxHp: card.hp,
    armor,
    maxArmor: armor,
    atk: card.attack,
    statuses: [],
  };
}
