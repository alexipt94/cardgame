import { describe, expect, it } from 'vitest';
import type { UnitCard } from '@/game/card/model/types';
import { createUnitFromCard } from './createUnitFromCard';

const baseCard: UnitCard = {
  kind: 'unit',
  id: 'card-1',
  name: 'Воин',
  cost: 3,
  hp: 10,
  attack: 4,
  descr: 'Тестовый юнит',
};

describe('createUnitFromCard', () => {
  it('copy hp to hp and maxHp', () => {
    const unit = createUnitFromCard(baseCard, 'left');
    expect(unit.hp).toBe(10);
    expect(unit.maxHp).toBe(10);
  });
  it('копирует attack в atk', () => {
    const unit = createUnitFromCard(baseCard, 'left');
    expect(unit.atk).toBe(4);
  });
  it('armor по умолчанию 0 если карта без брони', () => {
    const unit = createUnitFromCard(baseCard, 'left');
    expect(unit.armor).toBe(0);
    expect(unit.maxArmor).toBe(0);
  });
  it('armor берётся из карты если задан', () => {
    const cardWithArmor: UnitCard = { ...baseCard, armor: 5 };
    const unit = createUnitFromCard(cardWithArmor, 'left');
    expect(unit.armor).toBe(5);
    expect(unit.maxArmor).toBe(5);
  });
  it('ownerSide переносится корректно', () => {
    const left = createUnitFromCard(baseCard, 'left');
    const right = createUnitFromCard(baseCard, 'right');
    expect(left.ownerSide).toBe('left');
    expect(right.ownerSide).toBe('right');
  });

  it('cardId равен id карты', () => {
    const unit = createUnitFromCard(baseCard, 'left');
    expect(unit.cardId).toBe('card-1');
  });

  it('statuses пустой массив', () => {
    const unit = createUnitFromCard(baseCard, 'left');
    expect(unit.statuses).toEqual([]);
  });

  it('каждый юнит получает уникальный id', () => {
    const a = createUnitFromCard(baseCard, 'left');
    const b = createUnitFromCard(baseCard, 'left');
    expect(a.id).not.toBe(b.id);
  });
});
