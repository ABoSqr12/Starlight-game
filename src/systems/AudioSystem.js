import { SaveSystem } from './SaveSystem.js';
const KEY='إعدادات_الصوت_ستارلايت';
export class AudioSystem{
  constructor(){this.ctx=null;this.master=null;this.musicGain=null;this.fxGain=null;this.musicTimer=null;this.settings=SaveSystem.get(KEY,{مستوى:0.6,موسيقى:true,مؤثرات:true});}
  init(){if(this.ctx)return;this.ctx=new (window.AudioContext||window.webkitAudioContext)();this.master=this.ctx.createGain();this.musicGain=this.ctx.createGain();this.fxGain=this.ctx.createGain();this.musicGain.connect(this.master);this.fxGain.connect(this.master);this.master.connect(this.ctx.destination);this.apply();}
  resume(){this.init();if(this.ctx.state==='suspended')this.ctx.resume();}
  apply(){if(!this.master)return;this.master.gain.value=this.settings.مستوى;this.musicGain.gain.value=this.settings.موسيقى?0.6:0;this.fxGain.gain.value=this.settings.مؤثرات?0.9:0;SaveSystem.set(KEY,this.settings);}
  setVolume(v){this.settings.مستوى=Math.max(0,Math.min(1,v));this.apply();}
  toggleMusic(){this.settings.موسيقى=!this.settings.موسيقى;this.apply();return this.settings.موسيقى;}
  toggleFx(){this.settings.مؤثرات=!this.settings.مؤثرات;this.apply();return this.settings.مؤثرات;}
  tone(freq=220,dur=0.07,type='square',gain=0.06,to='fx'){this.resume();const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=type;o.frequency.value=freq;g.gain.value=gain;o.connect(g);g.connect(to==='music'?this.musicGain:this.fxGain);o.start();o.stop(this.ctx.currentTime+dur);}
  seq(notes,tempo=180,to='music'){this.resume();let t=this.ctx.currentTime;notes.forEach(n=>{const o=this.ctx.createOscillator(),g=this.ctx.createGain();o.type=n.type||'triangle';o.frequency.value=n.f;o.connect(g);g.connect(to==='music'?this.musicGain:this.fxGain);g.gain.value=n.v??0.03;o.start(t);o.stop(t+n.d);t+=n.d*(60/tempo);});}
  stopMusic(){if(this.musicTimer){clearInterval(this.musicTimer);this.musicTimer=null;}}
  loop(patternFn,ms=3200){this.stopMusic();patternFn();this.musicTimer=setInterval(()=>patternFn(),ms);}
  موسيقى_القائمة(){this.loop(()=>this.seq([{f:220,d:1.2,v:0.02,type:'sine'},{f:277,d:0.6,v:0.015,type:'triangle'},{f:330,d:0.6,v:0.015,type:'triangle'},{f:196,d:0.8,v:0.018,type:'sine'}],90,'music'),2600);}
  موسيقى_القتال(){this.loop(()=>this.seq([{f:196,d:0.25,v:0.02},{f:220,d:0.25,v:0.02},{f:247,d:0.25,v:0.02},{f:220,d:0.25,v:0.02},{f:196,d:0.25,v:0.02}],170,'music'),1400);}
  موسيقى_البوس(){this.loop(()=>this.seq([{f:110,d:0.45,v:0.03,type:'sawtooth'},{f:98,d:0.45,v:0.03,type:'sawtooth'},{f:82,d:0.5,v:0.035,type:'square'}],120,'music'),1800);}
  موسيقى_الراحة(){this.loop(()=>this.seq([{f:261,d:0.8,v:0.018,type:'sine'},{f:329,d:0.7,v:0.018,type:'sine'},{f:392,d:0.7,v:0.016,type:'triangle'}],80,'music'),2500);}
  موسيقى_النهاية(){this.loop(()=>this.seq([{f:220,d:0.8,v:0.016,type:'sine'},{f:294,d:0.8,v:0.016,type:'triangle'},{f:330,d:1.1,v:0.016,type:'sine'}],70,'music'),3000);}
  زر(){this.tone(520,0.04,'square',0.03);} فتح_قائمة(){this.tone(300,0.08,'triangle',0.03);} ضربة_سيف(){this.tone(160,0.07,'square',0.05);} سهم(){this.tone(700,0.06,'triangle',0.03);} إصابة(){this.tone(110,0.09,'square',0.04);} موت(){this.tone(90,0.12,'sawtooth',0.04);} دخول_بوس(){this.tone(72,0.2,'sawtooth',0.07);} نهاية_جولة(){this.tone(380,0.1,'triangle',0.05);} تفاعل(){this.tone(430,0.05,'sine',0.03);} حوار(){this.tone(450,0.03,'square',0.02);} اندفاع(){this.tone(260,0.05,'sawtooth',0.03);} ضربة_ثقيلة(){this.tone(65,0.14,'square',0.06);} كشف_الذات(){this.tone(140,0.4,'sine',0.04);}
}
export const صوت = new AudioSystem();
