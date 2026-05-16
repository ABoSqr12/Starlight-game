import { LeaderboardSystem } from '../systems/LeaderboardSystem.js';
import { زر } from '../ui/MenuButton.js';
export class LeaderboardScene extends Phaser.Scene{constructor(){super('LeaderboardScene');}
create(){this.cameras.main.fadeIn(220,0,0,0);this.add.rectangle(480,270,960,540,0x0e1426);this.add.rectangle(480,270,880,460,0x141d33,0.95).setStrokeStyle(2,0x526284);
this.add.text(820,56,'ترتيب الخاتمين',{fontFamily:'Tahoma',fontSize:'36px',color:'#f1e7c7',rtl:true}).setOrigin(1,0);
const rows=LeaderboardSystem.sorted();
if(!rows.length)this.add.text(820,130,'لا سجلات بعد.',{fontFamily:'Tahoma',fontSize:'22px',color:'#d8cfb2',rtl:true}).setOrigin(1,0);
rows.slice(0,10).forEach((r,i)=>{const badges=[];if(r.مكتمل)badges.push('خاتم النجوم');if(r.سقوط===0&&r.مكتمل)badges.push('بلا سقوط');if(r.سمع_الحكمة)badges.push('سامع الحكمة');if(r.كسر_المرآة)badges.push('كاسر المرآة');if(r.الجولة===30&&!r.مكتمل)badges.push('ما دون النجوم');
this.add.rectangle(480,130+i*32,800,28,0x1d2842,0.85);
this.add.text(820,118+i*32,`${i+1}) ${r.الاسم} | وقت الختم: ${Math.floor(r.الوقت)} | الجولة: ${r.الجولة}`,{fontFamily:'Tahoma',fontSize:'15px',color:'#f1e7c7',rtl:true}).setOrigin(1,0);
this.add.text(180,118+i*32,badges.join(' • '),{fontFamily:'Tahoma',fontSize:'13px',color:'#b8c7e8',rtl:true}).setOrigin(0,0);});
زر(this,478,'العودة',()=>this.scene.start('MainMenuScene'));}}
