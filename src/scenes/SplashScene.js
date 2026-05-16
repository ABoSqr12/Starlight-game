import { CinematicSystem } from '../systems/CinematicSystem.js';

export class SplashScene extends Phaser.Scene {
  constructor() { super('SplashScene'); }

  create() {
    const w = this.scale.width;
    const h = this.scale.height;

    this.add.rectangle(w / 2, h / 2, w, h, 0x080b18);

    for (let i = 0; i < 120; i += 1) {
      const x = Phaser.Math.Between(0, w);
      const y = Phaser.Math.Between(0, h * 0.75);
      const s = Phaser.Math.Between(1, 2);
      const star = this.add.rectangle(x, y, s, s, 0xdde7ff, Phaser.Math.FloatBetween(0.3, 0.9));
      this.tweens.add({ targets: star, alpha: { from: 0.2, to: 0.95 }, duration: Phaser.Math.Between(900, 2100), yoyo: true, repeat: -1 });
    }

    this.add.circle(760, 90, 42, 0xd8deef, 0.9);
    this.add.circle(760, 90, 58, 0xd8deef, 0.18);

    this.add.rectangle(w / 2, h - 82, w + 20, 180, 0x0f1324);
    this.add.rectangle(w / 2, h - 56, w + 20, 130, 0x12192f);

    const gateGlow = this.add.rectangle(w / 2, h - 150, 70, 120, 0x7aa0ff, 0.15);
    this.add.rectangle(w / 2, h - 145, 42, 88, 0x1d2742, 0.95).setStrokeStyle(2, 0x7b95d8, 0.75);
    this.tweens.add({ targets: gateGlow, alpha: { from: 0.08, to: 0.22 }, duration: 1200, yoyo: true, repeat: -1 });

    for (let i = 0; i < 12; i += 1) {
      const fog = this.add.ellipse(Phaser.Math.Between(80, w - 80), Phaser.Math.Between(h - 145, h - 45), Phaser.Math.Between(110, 190), Phaser.Math.Between(24, 42), 0xc7d4ff, 0.06);
      this.tweens.add({ targets: fog, x: fog.x + Phaser.Math.Between(-35, 35), alpha: { from: 0.03, to: 0.08 }, duration: Phaser.Math.Between(2400, 4200), yoyo: true, repeat: -1 });
    }

    for (let i = 0; i < 24; i += 1) {
      const p = this.add.rectangle(Phaser.Math.Between(0, w), Phaser.Math.Between(h - 210, h - 80), 2, 2, 0xdce7ff, 0.5);
      this.tweens.add({ targets: p, y: p.y - Phaser.Math.Between(16, 42), alpha: 0, duration: Phaser.Math.Between(1400, 2200), repeat: -1, delay: Phaser.Math.Between(0, 1200) });
    }

    this.add.text(w / 2, h / 2 - 18, 'ستارلايت: ما دون النجوم', { fontFamily: 'Tahoma', fontSize: '44px', color: '#f2e8ca', rtl: true }).setOrigin(0.5);

    CinematicSystem.fadeIn(this);
    this.time.delayedCall(2200, () => CinematicSystem.fadeOut(this, () => this.scene.start('MainMenuScene')));
  }
}
