import { زر } from '../ui/MenuButton.js'; import { حالة } from '../main.js'; import { AudioSystem } from '../systems/AudioSystem.js';
export class MainMenuScene extends Phaser.Scene{constructor(){super('MainMenuScene');}
create(){this.a=new AudioSystem();this.add.text(860,50,'ستارلايت: ما دون النجوم',{fontFamily:'Tahoma',fontSize:'42px',color:'#f1e7c7',rtl:true}).setOrigin(1,0);
زر(this,170,'ابدأ الرحلة',()=>{this.a.menu();this.scene.start('CharacterSelectScene');});
زر(this,230,'ترتيب الخاتمين',()=>{this.a.menu();this.scene.start('LeaderboardScene');});
زر(this,290,'الإعدادات',()=>{this.a.menu();this.scene.start('SettingsScene');});
زر(this,350,'عن اللعبة',()=>{this.a.menu();this.scene.start('AboutScene');});
this.add.text(950,510,'صُنعت بواسطة Ragnar (@abusqr)',{fontFamily:'Tahoma',fontSize:'16px',color:'#9ba9c0',rtl:true}).setOrigin(1,0);
}}
