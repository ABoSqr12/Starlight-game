export class DialogueBox {
  constructor(scene) {
    this.scene = scene;
    this.bg = scene.add.rectangle(480, 456, 930, 150, 0x05070d, 0.78).setStrokeStyle(2, 0x5d6f95).setVisible(false).setDepth(80);
    this.namePlate = scene.add.rectangle(130, 384, 170, 28, 0x1a2640, 0.95).setStrokeStyle(2, 0x7a91c4).setVisible(false).setDepth(81);
    this.nameText = scene.add.text(205, 372, '', { fontFamily: 'Tahoma', fontSize: '18px', color: '#f1e7c7', rtl: true }).setOrigin(1, 0).setVisible(false).setDepth(82);
    this.tx = scene.add.text(915, 406, '', { fontFamily: 'Tahoma', fontSize: '23px', color: '#f1e7c7', rtl: true, wordWrap: { width: 850 } }).setOrigin(1, 0).setVisible(false).setDepth(82);
    this.hint = scene.add.text(910, 526, 'اضغط Enter للمتابعة', { fontFamily: 'Tahoma', fontSize: '16px', color: '#aac0ea', rtl: true }).setOrigin(1, 0).setVisible(false).setDepth(82);
    this.lines = []; this.index = 0; this.charIndex = 0; this.typing = false; this.fullLine = ''; this.done = null;
  }

  show(entries, done, opts = {}) {
    this.entries = entries;
    this.index = 0;
    this.done = done;
    this.speedMode = opts.speedMode;
    this.bg.setVisible(true); this.namePlate.setVisible(true); this.nameText.setVisible(true); this.tx.setVisible(true); this.hint.setVisible(true);
    this.renderCurrent();
    this.onEnter = () => {
      if (this.typing) { this.tx.setText(this.fullLine); this.typing = false; return; }
      if (this.speedMode && this.scene.input.keyboard.checkDown(this.scene.input.keyboard.addKey('ENTER'), 40)) {
        this.index = this.entries.length;
      } else {
        this.index += 1;
      }
      if (this.index >= this.entries.length) { this.hide(); this.scene.input.keyboard.off('keydown-ENTER', this.onEnter); if (this.done) this.done(); }
      else this.renderCurrent();
    };
    this.scene.input.keyboard.on('keydown-ENTER', this.onEnter);
  }

  renderCurrent() {
    const entry = this.entries[this.index];
    this.nameText.setText(entry.متحدث);
    this.fullLine = entry.نص;
    this.tx.setText('');
    this.charIndex = 0;
    this.typing = true;
    if (this.typeTimer) this.typeTimer.remove(false);
    this.typeTimer = this.scene.time.addEvent({ delay: this.speedMode ? 9 : 20, loop: true, callback: () => {
      this.charIndex += 1;
      this.tx.setText(this.fullLine.slice(0, this.charIndex));
      if (this.charIndex % 3 === 0 && this.scene.a) this.scene.a.حوار();
      if (this.charIndex >= this.fullLine.length) { this.typing = false; this.typeTimer.remove(false); }
    } });
  }

  hide() { this.bg.setVisible(false); this.namePlate.setVisible(false); this.nameText.setVisible(false); this.tx.setVisible(false); this.hint.setVisible(false); }
}
