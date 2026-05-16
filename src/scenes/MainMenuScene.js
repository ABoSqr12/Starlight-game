import { زر } from '../ui/MenuButton.js'; import { صوت } from '../systems/AudioSystem.js';
export class MainMenuScene extends Phaser.Scene{constructor(){super('MainMenuScene');}
create(){this.cameras.main.fadeIn(220,0,0,0);this.a=صوت;this.a.resume();this.a.موسيقى_القائمة();this.a.فتح_قائمة();this.a=صوت;const w=this.scale.width,h=this.scale.height;
this.add.rectangle(w/2,h/2,w,h,0x090f1d);
for(let i=0;i<70;i++){this.add.rectangle(Phaser.Math.Between(0,w),Phaser.Math.Between(0,h*0.65),1,1,0xdde7ff,Phaser.Math.FloatBetween(0.35,0.9));}
this.add.circle(760,88,32,0xd8deef,0.85);this.add.circle(760,88,48,0xd8deef,0.14);
this.add.rectangle(w/2,h-90,w,180,0x11192f,0.95);
this.add.rectangle(w/2,h-160,78,126,0x1a2747,0.9).setStrokeStyle(2,0x8aa2dd,0.55);
this.add.text(860,46,'ستارلايت: ما دون النجوم',{fontFamily:'Tahoma',fontSize:'46px',color:'#f5edcf',rtl:true,shadow:{offsetX:0,offsetY:2,color:'#000',blur:2,fill:true}}).setOrigin(1,0);
زر(this,180,'ابدأ الرحلة',()=>{this.a.زر();this.scene.start('ModeSelectScene');});
زر(this,240,'ترتيب الخاتمين',()=>{this.a.زر();this.scene.start('LeaderboardScene');});
زر(this,300,'الإعدادات',()=>{this.a.زر();this.scene.start('SettingsScene');});
زر(this,360,'عن اللعبة',()=>{this.a.زر();this.scene.start('AboutScene');});
this.add.text(950,510,'صُنعت بواسطة Ragnar (@abusqr)',{fontFamily:'Tahoma',fontSize:'16px',color:'#a2afc8',rtl:true}).setOrigin(1,0);
}}
