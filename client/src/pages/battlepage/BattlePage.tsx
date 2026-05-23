import { demoMission } from '@/game/battle/fixtures';
import { createBattlefield } from '@/game/battlefield/model/createBattlefield';
import { bossHero, enemyHero, playerHero } from '@/game/hero/fixtures';
import type { HeroUIModel } from '@/game/hero/model/types';
import { Hero } from '@/game/hero/ui/Hero';
import { BattleStage, BattleViewport } from '@/shared/ui/battlestage';
import { BattleFieldGrid } from './BattleFieldGrid';
import './BattlePage.css';

export function BattlePage() {
  const { rows, cols } = demoMission;

  const activeRows = 3;
  const battlefield = createBattlefield(rows, cols);

  const rightHero = demoMission.mode === 'boss' ? bossHero : enemyHero;

  function createHeroSlots(
    totalRows: number,
    hero: HeroUIModel | null,
    startIndex: number,
  ): Array<HeroUIModel | null> {
    return Array.from({ length: totalRows }, (_, index) => (index === startIndex ? hero : null));
  }

  const heroStartRow = activeRows < rows ? 1 : 0;

  const leftHeroes = createHeroSlots(rows, playerHero, heroStartRow);
  const rightHeroes = createHeroSlots(rows, rightHero, heroStartRow);

  return (
    <BattleViewport>
      <BattleStage>
        <div className="battle-page">
          <header className="battle-header battle-section">
            <div className="battle-header-player">Alex</div>
            <div className="battle-header-timer">00:00</div>
            <div className="battle-header-enemy">{rightHero.name}</div>
          </header>

          <main className="battle-field battle-section">
            <img className="battlefield-bg" src="/assets/background/grass_bf.png" alt="" />

            <div className="battlefield-layout" style={{ ['--battle-rows' as string]: rows }}>
              <div className="battlefield-zone battlefield-zone--left">
                {leftHeroes.map((hero, index) => (
                  <div key={hero ? hero.id : `left-empty-${index}`} className="battlefield-slot">
                    {hero ? (
                      <Hero
                        name={hero.name}
                        side={hero.side}
                        currentHp={hero.currentHp}
                        maxHp={hero.maxHp}
                        portraitSrc={hero.portraitSrc}
                      />
                    ) : null}
                  </div>
                ))}
              </div>

              <BattleFieldGrid battlefield={battlefield} />

              <div className="battlefield-zone battlefield-zone--right">
                {rightHeroes.map((hero, index) => (
                  <div key={hero ? hero.id : `right-empty-${index}`} className="battlefield-slot">
                    {hero ? (
                      <Hero
                        name={hero.name}
                        side={hero.side}
                        currentHp={hero.currentHp}
                        maxHp={hero.maxHp}
                        portraitSrc={hero.portraitSrc}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </main>

          <section className="battle-chat battle-section">Chat</section>
          <section className="battle-deck battle-section">Deck</section>
          <section className="battle-hand battle-section">Hand</section>
          <section className="battle-graveyard battle-section">Graveyard</section>
        </div>
      </BattleStage>
    </BattleViewport>
  );
}
