import { الكلاسات } from '../data/classes.js';import { زر } from '../ui/MenuButton.js';import { حالة } from '../main.js';
export class ClassSelectScene extends Phaser.Scene{constructor(){super('ClassSelectScene');}create(){this.add.text(900,30,'اختر النمط ثم الكلاس',{fontFamily:'Tahoma',fontSize:'32px',color:'#f1e7c7',rtl:true}).setOrigin(1,0);
زر(this,90,'نمط القصة',()=>{حالة.النمط='نمط القصة';});زر(this,140,'نمط السرعة',()=>{حالة.النمط='نمط السرعة';});
الكلاسات.forEach((k,i)=>{زر(this,235+i*70,`${k.اسم} — ${k.سلاح}`,()=>{Object.assign(حالة,{الكلاس:k.id,الكلاس_اسم:k.اسم,الصحة:k.حياة,السهام:k.سهام,الجولة:1,الوقت:0,القتلى:0,السقوط:0,تحدث:[]});this.scene.start('StoryIntroScene');});});}}
