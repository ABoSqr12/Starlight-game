import { حالة } from '../main.js';import { LeaderboardSystem } from '../systems/LeaderboardSystem.js';import { الحوارات } from '../data/dialogues.js';
import { صوت } from '../systems/AudioSystem.js';
export class EndingScene extends Phaser.Scene{constructor(){super('EndingScene');}
create(){this.cameras.main.fadeIn(220,0,0,0);صوت.resume();صوت.كشف_الذات();صوت.موسيقى_النهاية();const w=960,h=540;this.add.rectangle(480,270,w,h,0x0a1020);for(let i=0;i<90;i++)this.add.rectangle(Phaser.Math.Between(0,w),Phaser.Math.Between(0,300),1,1,0xe6ecff,Phaser.Math.FloatBetween(.3,.95));this.add.rectangle(480,465,w,150,0x1a2238);this.add.rectangle(480,250,74,130,0x213254,0.95).setStrokeStyle(2,0x8da6dc);this.add.rectangle(480,258,44,86,0x101b2f,0.95);
this.add.text(900,70,'رحلة أخرى بلغت ما دون النجوم',{fontFamily:'Tahoma',fontSize:'34px',color:'#f1e7c7',rtl:true}).setOrigin(1,0);
this.add.text(900,150,`${الحوارات.نهاية.join('\n')}\n\n${الحوارات.عبارة_النهاية.join('\n')}`,{fontFamily:'Tahoma',fontSize:'24px',color:'#d8cfb2',rtl:true}).setOrigin(1,0);
this.add.text(900,430,'صُنعت بواسطة Ragnar (@abusqr)',{fontFamily:'Tahoma',fontSize:'20px',color:'#9ba9c0',rtl:true}).setOrigin(1,0);
LeaderboardSystem.write({الاسم:حالة.الاسم,الشخصية:حالة.الشخصية_اسم,الكلاس:حالة.الكلاس_اسم,النمط:حالة.النمط,الوقت:حالة.الوقت,سقوط:حالة.السقوط,قتلى:حالة.القتلى,تاريخ:new Date().toISOString(),الجولة:30,مكتمل:true,سمع_الحكمة:حالة.تحدث.length===5,كسر_المرآة:true});
this.input.keyboard.once('keydown-ENTER',()=>this.scene.start('MainMenuScene'));}}
