export class Enemy {
  constructor(scene, x, y, kind = 'normal', bossName = '') {
    this.scene = scene; this.kind = kind; this.bossName = bossName; this.alive = true;
    this.container = scene.add.container(x, y);
    this.hp = kind === 'boss' ? this.initBossHp(bossName) : 1;
    this.maxHp = this.hp;
    this.speed = kind === 'boss' ? this.initBossSpeed(bossName) : 0.6 + Math.random() * 0.7;
    this.phase = 1;
    this.t = 0;

    const c = this.palette();
    this.legL = scene.add.rectangle(-4, 10, 4, 8, c.leg);
    this.legR = scene.add.rectangle(4, 10, 4, 8, c.leg);
    this.body = scene.add.rectangle(0, 0, 12, 12, c.body);
    this.armL = scene.add.rectangle(-8, 0, 4, 9, c.arm);
    this.armR = scene.add.rectangle(8, 0, 4, 9, c.arm);
    this.head = scene.add.rectangle(0, -10, 11, 11, c.head);
    this.eye = scene.add.rectangle(2, -10, 2, 2, c.eye);
    this.weapon = scene.add.rectangle(12, 1, kind === 'boss' ? 14 : 8, 2, c.weapon);
    this.container.add([this.legL,this.legR,this.body,this.armL,this.armR,this.head,this.eye,this.weapon]);

    if (kind === 'boss') {
      this.container.setScale(this.bossScale(bossName));
      this.aura = scene.add.circle(0, 0, 24, c.aura, 0.16);
      this.container.addAt(this.aura, 0);
    }
  }
  initBossHp(name){return name==='الذات الأخيرة'?26:name==='قناع الإنكار'?18:name==='صاحب الندم'?20:name==='ظل الخوف'?14:name==='سيد الكبرياء'?16:12}
  initBossSpeed(name){return name==='ظل الخوف'?1.6:name==='الذات الأخيرة'?1.3:name==='سيد الكبرياء'?0.7:0.9}
  bossScale(name){return name==='الذات الأخيرة'?1.5:name==='سيد الكبرياء'?1.45:1.35}
  palette(){
    if(this.kind!=='boss') return {leg:0x242a38,body:0x30384b,arm:0x4c566e,head:0x71625a,eye:0xca3f55,weapon:0x81879b,aura:0x4f628f};
    if(this.bossName==='حارس الغضب') return {leg:0x311519,body:0x5a1f27,arm:0x7f3238,head:0x8b6a5f,eye:0xff4d4d,weapon:0x9e6a6a,aura:0xc73333};
    if(this.bossName==='سيد الكبرياء') return {leg:0x202b41,body:0x394f7a,arm:0x5872a0,head:0x9b887e,eye:0xcde5ff,weapon:0xb9c6dc,aura:0x5f7dd6};
    if(this.bossName==='ظل الخوف') return {leg:0x0d121f,body:0x172033,arm:0x202c44,head:0x5f697d,eye:0x9ac4ff,weapon:0x6b7d99,aura:0x2b4f9a};
    if(this.bossName==='صاحب الندم') return {leg:0x2c2230,body:0x4f3a58,arm:0x6a4d72,head:0x7f7771,eye:0xd5b9a0,weapon:0x9c8a80,aura:0x9061aa};
    if(this.bossName==='قناع الإنكار') return {leg:0x25252b,body:0x3d3e4a,arm:0x636579,head:0xceceda,eye:0x4f5fff,weapon:0xaab2c9,aura:0xb8c0ff};
    return {leg:0x15171f,body:0x252a3a,arm:0x39435d,head:0x6f6560,eye:0xff6b8f,weapon:0x8b93a6,aura:0x6f86b8};
  }
  update(dt, px){ if(!this.alive) return; this.t+=dt; const dir = px>this.container.x?1:-1;
    const mv = this.speed*(dt/16.6); this.container.x += dir*mv;
    const swing = Math.sin(this.t/120); this.legL.y = 10+swing*1.5; this.legR.y = 10-swing*1.5;
    if(this.kind==='boss'&&this.aura){ this.aura.alpha = 0.08+Math.abs(Math.sin(this.t/300))*0.15; }
    if(this.bossName==='ظل الخوف'){ this.container.alpha = 0.45+Math.abs(Math.sin(this.t/200))*0.5; }
    if(this.bossName==='قناع الإنكار' && Math.random()<0.005){ const shadow=this.scene.add.rectangle(this.container.x-18,this.container.y,18,24,0x9aa6cf,0.25); this.scene.tweens.add({targets:shadow,alpha:0,duration:260,onComplete:()=>shadow.destroy()}); }
  }
  takeHit(d=1){ this.hp -= d; this.flash(); if(this.hp<=0) this.die(); }
  flash(){ this.container.setTint(0xffffff); for(let i=0;i<5;i++){const p=this.scene.add.rectangle(this.container.x+Math.random()*10-5,this.container.y+Math.random()*10-5,2,2,0xffd7a8,0.9);this.scene.tweens.add({targets:p,alpha:0,y:p.y-8,duration:160,onComplete:()=>p.destroy()});} this.scene.time.delayedCall(70,()=>this.container.clearTint()); }
  die(){ this.alive=false; for(let i=0;i<8;i++){const d=this.scene.add.rectangle(this.container.x+Math.random()*12-6,this.container.y+Math.random()*12-6,2,2,0x95a5c9,0.8);this.scene.tweens.add({targets:d,alpha:0,x:d.x+(Math.random()*24-12),y:d.y-(6+Math.random()*8),duration:220,onComplete:()=>d.destroy()});} this.scene.tweens.add({targets:this.container,alpha:0,y:this.container.y-8,duration:220,onComplete:()=>this.container.destroy()}); }
}
