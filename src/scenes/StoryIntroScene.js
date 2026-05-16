import { الحوارات } from '../data/dialogues.js';import { DialogueBox } from '../ui/DialogueBox.js';
export class StoryIntroScene extends Phaser.Scene{constructor(){super('StoryIntroScene');}
create(){this.add.text(900,55,'بداية الرحلة',{fontFamily:'Tahoma',fontSize:'34px',color:'#f1e7c7',rtl:true}).setOrigin(1,0);
const d=new DialogueBox(this);d.show(الحوارات.العجوز_قبل_الطريق,()=>this.scene.start('ArenaScene'));}}
