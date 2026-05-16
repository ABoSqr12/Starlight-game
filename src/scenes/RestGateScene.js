import { الشخصيات_الجانبية } from '../data/npcs.js';import { الحوارات } from '../data/dialogues.js';import { حالة } from '../main.js';import { DialogueBox } from '../ui/DialogueBox.js';
export class RestGateScene extends Phaser.Scene{constructor(){super('RestGateScene');}
create(){this.add.rectangle(480,270,960,540,0x101022);this.add.text(900,25,'بوابة الراحة',{fontFamily:'Tahoma',fontSize:'34px',color:'#f1e7c7',rtl:true}).setOrigin(1,0);
الشخصيات_الجانبية.forEach((n,i)=>this.add.text(900,95+i*70,`${i+1}. ${n.اسم} (اضغط ${i+1})`,{fontFamily:'Tahoma',fontSize:'22px',color:'#d8cfb2',rtl:true}).setOrigin(1,0));
this.d=new DialogueBox(this); this.input.keyboard.on('keydown',(e)=>{const idx=Number(e.key)-1;if(idx>=0&&idx<5){const key=['العجوز1','الحداد1','منشق','طفل','تاجر'][idx];this.d.show(الحوارات[key],()=>{});if(!حالة.تحدث.includes(الشخصيات_الجانبية[idx].id))حالة.تحدث.push(الشخصيات_الجانبية[idx].id);} if(e.key==='Enter')this.scene.start('ArenaScene');});}}
