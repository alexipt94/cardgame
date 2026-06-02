import type { Battlefield } from '@/game/battlefield/model/Battlefield';
import { createBattlefield } from '@/game/battlefield/model/createBattlefield';
import type { HeroUIModel } from '@/game/hero/model/types';

export type BattleState = {
  battlefield: Battlefield;
  heroes: HeroUIModel[];
};

export function createBattleState(rows: number, cols: number, heroes: HeroUIModel[]): BattleState {
  const battlefield = createBattlefield(rows, cols);
  return { battlefield, heroes };
}
