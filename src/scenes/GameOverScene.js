import { زر } from '../ui/MenuButton.js';
export class GameOverScene extends Phaser.Scene{constructor(){super('GameOverScene');}create(){this.cameras.main.fadeIn(220,0,0,0);this.add.rectangle(480,270,960,540,0x160f16);this.add.rectangle(480,260,560,300,0x1f1520,0.96).setStrokeStyle(2,0x7f5a74);
this.add.text(760,170,'سقطتَ هذه المرة.\nلكن الطريق لا يحكم على من نهض.',{fontFamily:'Tahoma',fontSize:'31px',color:'#f1e7c7',rtl:true,align:'right'}).setOrigin(1,0);
زر(this,330,'أعد المحاولة',()=>this.scene.start('ArenaScene'));زر(this,390,'العودة إلى القائمة',()=>this.scene.start('MainMenuScene'));}}
