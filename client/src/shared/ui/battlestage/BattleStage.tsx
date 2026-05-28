import type { CSSProperties, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { STAGE_HEIGHT, STAGE_WIDTH } from './constants';
import './BattleStage.css';

interface BattleStageProps {
  children: ReactNode;
}

function getStageScale(width: number, height: number): number {
  return Math.min(width / STAGE_WIDTH, height / STAGE_HEIGHT);
}

function getInitialScale(): number {
  if (typeof window === 'undefined') {
    return 1;
  }

  return getStageScale(window.innerWidth, window.innerHeight);
}

export function BattleStage({ children }: BattleStageProps) {
  const [scale, setScale] = useState<number>(getInitialScale);

  useEffect(() => {
    function handleResize() {
      setScale(getStageScale(window.innerWidth, window.innerHeight));
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const stageStyle: CSSProperties = {
    ['--stage-width' as string]: `${STAGE_WIDTH}px`,
    ['--stage-height' as string]: `${STAGE_HEIGHT}px`,
    ['--stage-scale' as string]: scale,
  };

  return (
    <div className="battle-stage" style={stageStyle}>
      {children}
    </div>
  );
}
