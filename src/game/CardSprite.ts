export class CardSprite extends Phaser.GameObjects.Container {
  public readonly cardData: CardData;
  private bg: Phaser.GameObjects.Image;

  constructor(scene: Phaser.Scene, x: number, y: number, cardData: CardData) {
    super(scene, x, y);
    this.cardData = cardData;

    this.bg = scene.add.image(0, 0, 'card').setOrigin(0.5);
    const nameLabel = scene.add.text(0, -70, cardData.name, {
      fontSize: '16px',
      color: '#ffffff',
      align: 'center',
      wordWrap: { width: 140 }
    }).setOrigin(0.5);
    const statsLabel = scene.add.text(0, 60, `${cardData.attack} / ${cardData.health}`, {
      fontSize: '18px',
      color: '#ffff00'
    }).setOrigin(0.5);

    this.add([this.bg, nameLabel, statsLabel]);

    // 🔑 Эти две строки — обязательны для drag-and-drop
    this.setSize(160, 220);
    this.setInteractive();
  } 

  setTint(color: number): void {
    this.bg.setTint(color);
  }

  clearTint(): void {
    this.bg.clearTint();
  }
}