//import { useState } from 'react';
import type { HeroUIModel } from '@/game/hero/model/types';
import { Hero } from '@/game/hero/ui/Hero';
import { createBattlefieldCells } from './BattleFieldGrid';
import './BattlePage.css';

export function BattlePage() {
  // const [isDraggingCard, setIsDraggingCard] = useState(false);

  const rows = 4;
  const activeRows = 3;
  const colsC = 10;
  const cellsC = createBattlefieldCells(rows, colsC);

  const playerHero: HeroUIModel = {
    id: 'player-hero',
    name: 'Knight',
    side: 'player',
    currentHp: 28,
    maxHp: 30,
    portraitSrc: '/assets/heroes/knight.png',
  };

  const enemyHero: HeroUIModel = {
    id: 'enemy-hero',
    name: 'Ranger',
    side: 'enemy',
    currentHp: 24,
    maxHp: 30,
    portraitSrc: '/assets/heroes/ranger.png',
  };

  const bossHero: HeroUIModel = {
    id: 'boss-hero',
    name: 'Boss',
    side: 'boss',
    currentHp: 80,
    maxHp: 100,
    portraitSrc: '/assets/heroes/boss.png',
  };

  const isBossFight = false;
  const rightHero = isBossFight ? bossHero : enemyHero;

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
    <div className="battle-screen">
      <div className="battle-frame">
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

              <div className="battlefield-play-area">
                {cellsC.map((cell) => (
                  <div key={cell.id} className="battlefield-cell">
                    {cell.row}:{cell.col}
                  </div>
                ))}
              </div>

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
      </div>
    </div>
  );
}
