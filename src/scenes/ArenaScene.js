import { حالة } from '../main.js';import { الجولات } from '../data/rounds.js';import { HUD } from '../ui/HUD.js';import { CinematicSystem } from '../systems/CinematicSystem.js';import { AudioSystem } from '../systems/AudioSystem.js';
export class ArenaScene extends Phaser.Scene{constructor(){super('ArenaScene');}
create(){this.a=new AudioSystem();this.hud=new HUD(this);this.player=this.add.rectangle(480,430,22,34,0xcdb58b);this.enemies=[];this.lastAttack='';this.repeat=0;
this.keys=this.input.keyboard.addKeys('W,A,S,D,LEFT,RIGHT,UP,DOWN,SPACE,Q,SHIFT,E,ESC');this.spawn();}
spawn(){const r=الجولات[حالة.الجولة-1];this.add.rectangle(480,270,960,540,0x0d1222).setDepth(-5);this.enemies.forEach(e=>e.destroy());this.enemies=[];const c=r.زعيم?1:r.اعداء;for(let i=0;i<c;i++){const x=i%2?40:920;const y=120+Math.random()*260;const clr=r.زعيم?0x9c1f41:0x3f639a;const size=r.زعيم?34:20;this.enemies.push(this.add.rectangle(x,y,size,size,clr));}
if(r.زعيم){this.a.boss();CinematicSystem.shake(this);this.add.text(900,70,`ظهور: ${r.زعيم}`,{fontFamily:'Tahoma',fontSize:'24px',color:'#ff9aa8',rtl:true}).setOrigin(1,0);}}
attack(kind='basic'){if(!this.enemies.length)return; if(this.lastAttack===kind)this.repeat++; else this.repeat=0; this.lastAttack=kind; const target=this.enemies[Math.floor(Math.random()*this.enemies.length)];
if(حالة.الجولة===30&&Math.random()<0.2){target.x+=Math.random()<0.5?-40:40;return;} if(حالة.الجولة===30&&this.repeat>2&&Math.random()<0.6){حالة.الصحة-=5;CinematicSystem.shake(this);} target.destroy();this.enemies=this.enemies.filter(e=>e!==target);this.a.hit();حالة.القتلى++;
if(this.enemies.length===0){this.a.round(); if(حالة.الجولة===30){this.scene.start('EndingScene');return;} حالة.الجولة++; if(حالة.الجولة%5===1)this.scene.start('RestGateScene'); else this.spawn();}}
update(_,dt){const sp=3; if(this.keys.LEFT.isDown||this.keys.A.isDown)this.player.x-=sp; if(this.keys.RIGHT.isDown||this.keys.D.isDown)this.player.x+=sp; if(Phaser.Input.Keyboard.JustDown(this.keys.SPACE)) {this.a.slash();this.attack('basic');}
if(Phaser.Input.Keyboard.JustDown(this.keys.Q)&&حالة.السهام>0){حالة.السهام--;this.a.bow();this.attack('secondary');}
if(Phaser.Input.Keyboard.JustDown(this.keys.SHIFT))this.player.x+=this.scale.width/50*(Math.random()<.5?-1:1);
if(حالة.النمط==='نمط السرعة')حالة.الوقت+=dt/1000; this.hud.update(حالة);} }
