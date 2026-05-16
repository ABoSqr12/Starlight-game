import { LeaderboardSystem } from '../systems/LeaderboardSystem.js';
export class LeaderboardScene extends Phaser.Scene{constructor(){super('LeaderboardScene');}
create(){this.add.text(900,28,'ترتيب الخاتمين',{fontFamily:'Tahoma',fontSize:'34px',color:'#f1e7c7',rtl:true}).setOrigin(1,0);
const rows=LeaderboardSystem.sorted(); if(!rows.length)this.add.text(900,110,'لا سجلات بعد.',{fontFamily:'Tahoma',fontSize:'22px',color:'#d8cfb2',rtl:true}).setOrigin(1,0);
rows.slice(0,10).forEach((r,i)=>{const badges=[];if(r.مكتمل)badges.push('خاتم النجوم');if(r.سقوط===0&&r.مكتمل)badges.push('بلا سقوط');if(r.سمع_الحكمة)badges.push('سامع الحكمة');if(r.كسر_المرآة)badges.push('كاسر المرآة');if(r.الجولة===30&&!r.مكتمل)badges.push('ما دون النجوم');
this.add.text(900,110+i*38,`${i+1}. ${r.الاسم} | جولة ${r.الجولة} | وقت ${Math.floor(r.الوقت)} | ${badges.join('، ')}`,{fontFamily:'Tahoma',fontSize:'16px',color:'#cfd8e6',rtl:true,wordWrap:{width:860}}).setOrigin(1,0);});
this.add.text(900,500,'اضغط إدخال للعودة',{fontFamily:'Tahoma',fontSize:'18px',color:'#f1e7c7',rtl:true}).setOrigin(1,0);this.input.keyboard.once('keydown-ENTER',()=>this.scene.start('MainMenuScene'));}}
