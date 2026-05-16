import { زر } from '../ui/MenuButton.js';
import { صوت } from '../systems/AudioSystem.js';
export class SettingsScene extends Phaser.Scene{constructor(){super('SettingsScene');}create(){this.cameras.main.fadeIn(220,0,0,0);صوت.resume();this.add.rectangle(480,270,960,540,0x0f1526);this.add.rectangle(480,270,520,360,0x161f34,0.95).setStrokeStyle(2,0x5a6d8d);
this.add.text(740,110,'الإعدادات',{fontFamily:'Tahoma',fontSize:'36px',color:'#f1e7c7',rtl:true}).setOrigin(1,0);
this.نص_صوت=this.add.text(620,168,`مستوى الصوت: ${Math.round(صوت.settings.مستوى*100)}%`,{fontFamily:'Tahoma',fontSize:'22px',color:'#d8cfb2',rtl:true}).setOrigin(1,0);
this.نص_موسيقى=this.add.text(620,223,`الموسيقى: ${صوت.settings.موسيقى?'مفعلة':'متوقفة'}`,{fontFamily:'Tahoma',fontSize:'22px',color:'#d8cfb2',rtl:true}).setOrigin(1,0);
this.نص_مؤثر=this.add.text(620,278,`المؤثرات: ${صوت.settings.مؤثرات?'مفعلة':'متوقفة'}`,{fontFamily:'Tahoma',fontSize:'22px',color:'#d8cfb2',rtl:true}).setOrigin(1,0);
this.add.text(620,333,'نمط العرض: بكسل آرت',{fontFamily:'Tahoma',fontSize:'22px',color:'#d8cfb2',rtl:true}).setOrigin(1,0);
زر(this,200,'رفع الصوت',()=>{صوت.setVolume(صوت.settings.مستوى+0.1);this.تحديث();});
زر(this,250,'خفض الصوت',()=>{صوت.setVolume(صوت.settings.مستوى-0.1);this.تحديث();});
زر(this,300,'تفعيل/تعطيل الموسيقى',()=>{صوت.toggleMusic();if(صوت.settings.موسيقى)صوت.موسيقى_القائمة();else صوت.stopMusic();this.تحديث();});
زر(this,350,'تفعيل/تعطيل المؤثرات',()=>{صوت.toggleFx();this.تحديث();});
زر(this,420,'العودة',()=>this.scene.start('MainMenuScene'));} تحديث(){this.نص_صوت.setText(`مستوى الصوت: ${Math.round(صوت.settings.مستوى*100)}%`);this.نص_موسيقى.setText(`الموسيقى: ${صوت.settings.موسيقى?'مفعلة':'متوقفة'}`);this.نص_مؤثر.setText(`المؤثرات: ${صوت.settings.مؤثرات?'مفعلة':'متوقفة'}`);} }
