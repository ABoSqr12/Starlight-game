import { زر } from '../ui/MenuButton.js';
import { حالة } from '../main.js';
import { صوت } from '../systems/AudioSystem.js';

export class ModeSelectScene extends Phaser.Scene {
  constructor() { super('ModeSelectScene'); }
  create() { this.cameras.main.fadeIn(220,0,0,0); صوت.resume();
    this.add.text(900, 50, 'اختر نمط اللعب', { fontFamily: 'Tahoma', fontSize: '34px', color: '#f1e7c7', rtl: true }).setOrigin(1, 0);
    this.add.text(900, 120, 'نمط القصة يوقف الوقت أثناء الحوارات، ونمط السرعة يبقي الوقت جارياً.', { fontFamily: 'Tahoma', fontSize: '20px', color: '#d8cfb2', rtl: true, wordWrap: { width: 860 } }).setOrigin(1, 0);
    زر(this, 210, 'نمط القصة', () => { حالة.النمط = 'نمط القصة'; this.scene.start('CharacterSelectScene'); });
    زر(this, 270, 'نمط السرعة', () => { حالة.النمط = 'نمط السرعة'; this.scene.start('CharacterSelectScene'); });
    زر(this, 360, 'العودة إلى القائمة', () => this.scene.start('MainMenuScene'));
  }
}
