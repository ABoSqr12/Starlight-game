export class HUD {
  constructor(scene) {
    this.scene = scene;
    this.root = scene.add.container(0, 0).setDepth(40);

    this.bgTop = scene.add.rectangle(740, 34, 420, 56, 0x131a2a, 0.9).setStrokeStyle(2, 0x4f5f84);
    this.bgBottom = scene.add.rectangle(740, 86, 420, 44, 0x101626, 0.88).setStrokeStyle(2, 0x404e70);
    this.iconRound = scene.add.rectangle(545, 34, 14, 14, 0x8aa2dd);
    this.iconHealth = scene.add.rectangle(545, 86, 14, 14, 0xc44556);

    this.labelTop = scene.add.text(936, 16, '', { fontFamily: 'Tahoma', fontSize: '16px', color: '#f1e7c7', rtl: true }).setOrigin(1, 0);
    this.labelBottom = scene.add.text(936, 70, '', { fontFamily: 'Tahoma', fontSize: '15px', color: '#d8cfb2', rtl: true }).setOrigin(1, 0);

    this.healthBarBg = scene.add.rectangle(695, 86, 220, 10, 0x2a2f3d).setOrigin(0, 0.5);
    this.healthBar = scene.add.rectangle(697, 86, 216, 6, 0xce4c5e).setOrigin(0, 0.5);

    this.root.add([this.bgTop, this.bgBottom, this.iconRound, this.iconHealth, this.labelTop, this.labelBottom, this.healthBarBg, this.healthBar]);
  }

  update(s) {
    this.labelTop.setText(`الجولة: ${s.الجولة}   |   الكلاس: ${s.الكلاس_اسم}   |   النمط: ${s.النمط}`);
    this.labelBottom.setText(`الوقت: ${Math.floor(s.الوقت)}   |   السهام: ${s.السهام}   |   القتلى: ${s.القتلى}   |   السقوط: ${s.السقوط}`);
    const ratio = Math.max(0, Math.min(1, s.الصحة / 140));
    this.healthBar.width = 216 * ratio;
    this.healthBar.fillColor = ratio > 0.6 ? 0x6fbd5f : ratio > 0.3 ? 0xe3b24e : 0xce4c5e;
  }
}
