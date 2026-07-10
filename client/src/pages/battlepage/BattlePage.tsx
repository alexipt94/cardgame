import { useEffect, useReducer, useRef } from 'react';
import { demoMission } from '@/game/battle/fixtures';
import { battleReducer } from '@/game/battle/model/BattleReducer';
import { createBattleState } from '@/game/battle/model/BattleState';
import { BattleHand } from '@/game/battle/ui/BattleHand';
import { BATTLE_ACTIVE_ROWS } from '@/game/battlefield/model/constants';
import { getAvailableCells } from '@/game/battlefield/model/getAvailableCells';
import { demoCards } from '@/game/card/fixtures';
import { bossHero, enemyHero, playerHero } from '@/game/hero/fixtures';
import type { HeroUIModel } from '@/game/hero/model/types';
import { Hero } from '@/game/hero/ui/Hero';
import { BattleStage, BattleViewport } from '@/shared/ui/battlestage';
import { BattleFieldGrid } from './BattleFieldGrid';
import './BattlePage.css';
export function BattlePage() {
  const { rows, cols, playerSide } = demoMission;
  const activeRows = BATTLE_ACTIVE_ROWS;
  const initialRightHero = demoMission.mode === 'boss' ? bossHero : enemyHero;
  const [state, dispatch] = useReducer(
    battleReducer,
    createBattleState(rows, cols, [playerHero, initialRightHero], demoCards, playerSide),
  );
  useEffect(() => {
    if (state.currentTurn !== 'enemy') return;
    const timer = setTimeout(() => {
      dispatch({ type: 'ENEMY_TURN' });
    }, 1500);
    return () => clearTimeout(timer);
  }, [state.currentTurn]);
  useEffect(() => {
    if (state.currentTurn === 'player' && prevTurn.current === 'enemy') {
      dispatch({ type: 'START_TURN' });
    }
    prevTurn.current = state.currentTurn;
  }, [state.currentTurn]);
  const prevTurn = useRef<string | null>(null);
  const rightHero = state.heroes.find((x) => x.side === 'enemy' || x.side === 'boss') ?? null;
  const leftHero = state.heroes.find((x) => x.side === 'player') ?? null;

  function createHeroSlots(
    totalRows: number,
    hero: HeroUIModel | null,
    startIndex: number,
  ): Array<HeroUIModel | null> {
    return Array.from({ length: totalRows }, (_, index) => (index === startIndex ? hero : null));
  }

  const heroStartRow = activeRows < rows ? 1 : 0;
  const leftHeroes = createHeroSlots(rows, leftHero, heroStartRow);
  const rightHeroes = createHeroSlots(rows, rightHero, heroStartRow);
  const isHandCardSelected = state.selectedCardId !== null;
  const availableCells = isHandCardSelected ? getAvailableCells(state.battlefield, playerSide) : [];
  return (
    <BattleViewport>
      <BattleStage>
        <div className="battle-page">
          <header className="battle-header battle-section">
            <div className="battle-header-player">Alex</div>
            <div className="battle-header-timer">00:00</div>
            <div className="battle-header-enemy">{rightHero?.name}</div>
            <button
              onClick={() => dispatch({ type: 'END_TURN' })}
              disabled={state.currentTurn !== 'player'}
              type="button"
            >
              End Turn
            </button>
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
                        isSelected={false}
                      />
                    ) : null}
                  </div>
                ))}
              </div>

              <BattleFieldGrid
                battlefield={state.battlefield}
                availableCells={availableCells}
                onCellClick={(row, col) => {
                  if (!leftHero) return;

                  dispatch({ type: 'OCCUPY_CELL', row, col });
                }}
              />

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
                        isSelected={hero.id === state.selectedEntityId}
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </main>

          <section className="battle-chat battle-section">Chat</section>
          <section className="battle-deck battle-section">Deck</section>
          <section className="battle-hand battle-section">
            <BattleHand
              hand={state.hand}
              cards={state.cards}
              onSelect={(cardId) =>
                dispatch({
                  type: 'SELECT_CARD',
                  cardId: cardId === state.selectedCardId ? null : cardId,
                })
              }
              selectedCardId={state.selectedCardId}
            />
          </section>
          <section className="battle-graveyard battle-section">Graveyard</section>
        </div>
      </BattleStage>
    </BattleViewport>
  );
}
