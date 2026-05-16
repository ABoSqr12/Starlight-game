import { حالة } from '../main.js';import { LeaderboardSystem } from '../systems/LeaderboardSystem.js';import { الحوارات } from '../data/dialogues.js';
export class EndingScene extends Phaser.Scene{constructor(){super('EndingScene');}
create(){this.add.text(900,70,'رحلة أخرى بلغت ما دون النجوم',{fontFamily:'Tahoma',fontSize:'34px',color:'#f1e7c7',rtl:true}).setOrigin(1,0);
this.add.text(900,150,`${الحوارات.نهاية.join('\n')}\n\n${الحوارات.عبارة_النهاية.join('\n')}`,{fontFamily:'Tahoma',fontSize:'24px',color:'#d8cfb2',rtl:true}).setOrigin(1,0);
this.add.text(900,430,'صُنعت بواسطة Ragnar (@abusqr)',{fontFamily:'Tahoma',fontSize:'20px',color:'#9ba9c0',rtl:true}).setOrigin(1,0);
LeaderboardSystem.write({الاسم:حالة.الاسم,الشخصية:حالة.الشخصية_اسم,الكلاس:حالة.الكلاس_اسم,النمط:حالة.النمط,الوقت:حالة.الوقت,سقوط:حالة.السقوط,قتلى:حالة.القتلى,تاريخ:new Date().toISOString(),الجولة:30,مكتمل:true,سمع_الحكمة:حالة.تحدث.length===5,كسر_المرآة:true});
this.input.keyboard.once('keydown-ENTER',()=>this.scene.start('MainMenuScene'));}}
