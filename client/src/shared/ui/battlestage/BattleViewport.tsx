import type { ReactNode } from 'react';
import './BattleViewport.css';

interface BattleViewportProps {
  children: ReactNode;
}

export function BattleViewport({ children }: BattleViewportProps) {
  return <div className="battle-viewport">{children}</div>;
}
