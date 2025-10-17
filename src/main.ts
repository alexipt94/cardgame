import Phaser from 'phaser';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function preload(this: Phaser.Scene) {
  this.load.image('bg', '/src/assets/bg.png');
  this.load.image('card', '/src/assets/unit1.png');
}

function create(this: Phaser.Scene) {
  // Фон — растягиваем на весь экран
  this.add.image(0, 0, 'bg').setOrigin(0, 0).setDisplaySize(1920, 1080);

  // Карта — по центру снизу
  const card = this.add.image(960, 850, 'card').setInteractive();

  card.on('pointerdown', () => {
    console.log('Карта нажата!');
    // Позже сюда добавим логику разыгрывания
  });

  // Необязательно: добавим текст
  this.add.text(960, 100, 'Rise of Mythos — MVP', {
    fontSize: '32px',
    color: '#ffffff',
    backgroundColor: '#00000080',
    padding: { x: 10, y: 5 }
  }).setOrigin(0.5);
}

function update() {
  // Пока пусто
}