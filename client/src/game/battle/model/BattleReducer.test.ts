import { describe, expect, it } from 'vitest';
import { getCell } from '@/game/battlefield/model/getCell';
import { type BattleAction, battleReducer } from './BattleReducer';
import { createBattleState } from './BattleState';

describe('battleReducer', () => {
  it('занимает пустую клетку на поле', () => {
    const state = createBattleState(3, 3, []);
    expect(getCell(state.battlefield, 1, 1)?.occupantId).toBeNull();
    const action: BattleAction = { type: 'OCCUPY_CELL', row: 1, col: 1, occupantId: 'player-1' };
    const next = battleReducer(state, action);
    expect(getCell(next.battlefield, 1, 1)?.occupantId).toBe('player-1');
  });
  it('не мутирует исходный state', () => {
    const state = createBattleState(3, 3, []);
    const before = getCell(state.battlefield, 1, 1)?.occupantId;
    const action: BattleAction = { type: 'OCCUPY_CELL', row: 1, col: 1, occupantId: 'test' };
    const next = battleReducer(state, action);
    expect(getCell(state.battlefield, 1, 1)?.occupantId).toBe(before);
    expect(next).not.toBe(state);
  });
  it('игнорирует координаты за границей поля', () => {
    const state = createBattleState(3, 3, []);
    const before = getCell(state.battlefield, 1, 1)?.occupantId;
    const action: BattleAction = { type: 'OCCUPY_CELL', row: 99, col: 99, occupantId: 'test' };
    const next = battleReducer(state, action);
    expect(getCell(next.battlefield, 1, 1)?.occupantId).toBe(before);
  });
  it('неизвестный тип в экшне', () => {
    const state = createBattleState(3, 3, []);
    const action = { type: 'UNKNOWN' } as unknown as BattleAction;
    const next = battleReducer(state, action);
    expect(next).toBe(state);
  });
  it('два вызова не мешают друг другу', () => {
    const state = createBattleState(3, 3, []);
    const before1 = getCell(state.battlefield, 1, 1)?.occupantId;
    const before0 = getCell(state.battlefield, 0, 0)?.occupantId;
    expect(before0).toBeNull();
    expect(before1).toBeNull();
    const actionFirst: BattleAction = { type: 'OCCUPY_CELL', row: 1, col: 1, occupantId: 'test1' };
    const actionZero: BattleAction = { type: 'OCCUPY_CELL', row: 0, col: 0, occupantId: 'test0' };
    const afterFirst = battleReducer(state, actionFirst);
    const afterSecond = battleReducer(afterFirst, actionZero);
    expect(getCell(afterSecond.battlefield, 1, 1)?.occupantId).toBe('test1');
    expect(getCell(afterSecond.battlefield, 0, 0)?.occupantId).toBe('test0');
  });
});
