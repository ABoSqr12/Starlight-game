import { الحوارات } from '../data/dialogues.js';import { DialogueBox } from '../ui/DialogueBox.js';import { حالة } from '../main.js';import { صوت } from '../systems/AudioSystem.js';
export class StoryIntroScene extends Phaser.Scene{constructor(){super('StoryIntroScene');}
create(){this.cameras.main.fadeIn(220,0,0,0);this.a=صوت; this.a.resume();const w=960,h=540;this.add.rectangle(480,270,w,h,0x0d1020);this.add.circle(760,90,32,0xdde3f4,0.8);for(let i=0;i<70;i++)this.add.rectangle(Phaser.Math.Between(0,w),Phaser.Math.Between(0,250),1,1,0xdfe7ff,Phaser.Math.FloatBetween(.2,.85));this.add.rectangle(480,475,w,130,0x1a2138);
this.add.rectangle(290,365,18,34,0xbf8f62);this.add.rectangle(290,339,12,12,0xbf8f62);this.add.rectangle(290,330,12,4,0x2e221b);
this.add.rectangle(620,360,16,30,0x636d84);this.add.rectangle(620,336,10,10,0x868d9a);
this.add.text(900,55,'بداية الرحلة',{fontFamily:'Tahoma',fontSize:'34px',color:'#f1e7c7',rtl:true}).setOrigin(1,0);
const entries=الحوارات.العجوز_قبل_الطريق.map(نص=>({متحدث:'العجوز',نص}));
const d=new DialogueBox(this);d.show(entries,()=>this.scene.start('ArenaScene'),{speedMode:حالة.النمط==='نمط السرعة'});}}
