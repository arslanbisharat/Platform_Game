// eslint-disable-next-line no-undef
export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('logo', 'https://res.cloudinary.com/drjntqw8r/image/upload/v1594520652/sample.jpg ');
  }

  create() {
    this.scene.start('Preload');
  }
}