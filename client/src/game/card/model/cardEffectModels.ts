// card/model/cardEffectLabels.ts (новый файл)
import type { CardEffectType } from './types';

// Раньше effects хранили готовый текст для показа ('Splash attack', 'Bite'...).
// После типизации effects хранят машинные идентификаторы (camelCase), поэтому
// нужен отдельный словарь "тип эффекта -> подпись для игрока", чтобы UI не потерял
// читаемые названия способностей.
export const cardEffectLabels: Record<CardEffectType, string> = {
  swarm: 'Swarm',
  acceleration: 'Acceleration',
  splashAttack: 'Splash attack',
  bite: 'Bite',
  stun: 'Stun',
  bow: 'Bow',
};
