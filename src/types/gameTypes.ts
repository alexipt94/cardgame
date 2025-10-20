import type { CardData } from './Card';

export interface Lane {
  id: number;
  name: string;
  y: number; // вертикальная позиция линии
  cards: CardData[]; // карты в этой линии
}

export const LANES: Lane[] = [
  { id: 0, name: 'Верхняя', y: 500, cards: [] },
  { id: 1, name: 'Средняя-1', y: 600, cards: [] },
  { id: 2, name: 'Средняя-2', y: 700, cards: [] },
  { id: 3, name: 'Нижняя', y: 800, cards: [] }
];