import Phaser from 'phaser';
import { CardSprite } from './game/CardSprite';
import { sampleCards } from './types/Card';
import { LANES } from './types/gameTypes';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  audio: {
    disableWebAudio: true,
    noAudio: true
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

// === Состояние игры ===
let hand: CardSprite[] = [];
let lanes: { [key: number]: CardSprite[] } = {};
let draggedCard: CardSprite | null = null;
let hoveredLane: number | null = null;
let dragStartX = 0;
let dragStartY = 0;

const HAND_Y = 950;
const START_X = 600;
const CARD_SPACING = 180;

// === Функции ===
function placeCardInLane(card: CardSprite, laneId: number) {
  const handIndex = hand.indexOf(card);
  if (handIndex === -1) return; // уже не в руке

  hand.splice(handIndex, 1);
  const laneCards = lanes[laneId];
  const lane = LANES.find(l => l.id === laneId)!;
  const x = 1600 - laneCards.length * 180;
  const y = lane.y;

  card.setPosition(x, y);
  laneCards.push(card);
  console.log(`Карта "${card.cardData.name}" помещена в линию ${lane.name}`);
}

function returnCardToHand(card: CardSprite) {
  if (hand.includes(card)) return; // уже в руке

  const x = START_X + hand.length * CARD_SPACING;
  card.setPosition(x, HAND_Y);
  hand.push(card);
}

// === Сцена ===
function preload(this: Phaser.Scene) {
  console.log('✅ preload() вызван');
  this.load.image('bg', 'assets/bg.jpg');
  this.load.image('card', 'assets/unit1.png');
}

function create(this: Phaser.Scene) {
  console.log('✅ create() вызван');

  // Фон
  this.add.image(0, 0, 'bg').setOrigin(0, 0).setDisplaySize(1920, 1080);

  // Линии
  LANES.forEach(lane => {
    lanes[lane.id] = [];
    const rect = this.add.rectangle(960, lane.y, 1600, 80, 0x000000, 0.1)
      .setStrokeStyle(2, 0x4a90e2, 0.7)
      .setOrigin(0.5)
      .setName(`lane-${lane.id}`);
    this.add.text(100, lane.y, lane.name, { fontSize: '18px', color: '#4a90e2' });
  });

  // Рука
  hand = [];
  for (let i = 0; i < 4; i++) {
    const cardData = sampleCards[i % sampleCards.length];
    const x = START_X + i * CARD_SPACING;
    const card = new CardSprite(this, x, HAND_Y, cardData);
    this.add.existing(card);
    this.input.setDraggable(card);
    hand.push(card);
  }

  // === ЕДИНСТВЕННЫЙ НАБОР ОБРАБОТЧИКОВ DRAG ===
  this.input.on('dragstart', (pointer, gameObject) => {
    const card = gameObject as CardSprite;
    draggedCard = card;
    dragStartX = card.x;
    dragStartY = card.y;
    card.setTint(0x888888);
  });

  this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
    gameObject.x = dragX;
    gameObject.y = dragY;

    hoveredLane = null;
    for (const lane of LANES) {
      const dist = Math.abs(dragY - lane.y);
      if (dist < 60 && dragX > 200 && dragX < 1720) {
        hoveredLane = lane.id;
        break;
      }
    }

    LANES.forEach(l => {
      const rect = this.children.getByName(`lane-${l.id}`) as Phaser.GameObjects.Rectangle;
      if (rect) {
        rect.setFillStyle(hoveredLane === l.id ? 0x4a90e2 : 0x000000, hoveredLane === l.id ? 0.2 : 0.1);
      }
    });
  });

  this.input.on('dragend', () => {
    if (draggedCard) {
      const dx = Math.abs(draggedCard.x - dragStartX);
      const dy = Math.abs(draggedCard.y - dragStartY);
      const wasDragged = dx > 10 || dy > 10;

      draggedCard.clearTint();

      if (wasDragged) {
        if (hoveredLane !== null) {
          placeCardInLane(draggedCard, hoveredLane);
        } else {
          returnCardToHand(draggedCard);
        }
      }
    }

    draggedCard = null;
    hoveredLane = null;
    LANES.forEach(l => {
      const rect = this.children.getByName(`lane-${l.id}`) as Phaser.GameObjects.Rectangle;
      if (rect) rect.setFillStyle(0x000000, 0.1);
    });
  });
}

function update() {}