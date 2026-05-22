export type CardModel = {
  id: string;
  name: string;
  cost: number;
  hp?: number;
  attack?: number;
  effects?: string[];
  descr: string;
};
