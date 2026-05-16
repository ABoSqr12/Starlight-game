export class AboutScene extends Phaser.Scene{constructor(){super('AboutScene');}create(){this.add.text(900,40,'ستارلايت: ما دون النجوم',{fontFamily:'Tahoma',fontSize:'34px',color:'#f1e7c7',rtl:true}).setOrigin(1,0);
this.add.text(900,120,'لعبة عربية بكسل آرت عن الرحلة التي يظن فيها الإنسان أنه يقاتل العالم، حتى يكتشف أن آخر باب كان يحرسه من الداخل.',{fontFamily:'Tahoma',fontSize:'22px',color:'#d8cfb2',rtl:true,wordWrap:{width:860}}).setOrigin(1,0);
this.add.text(900,250,'في هذه الرحلة، لا تكفي قوة السلاح.\nفالنجوم لا يبلغها من لم يواجه ظلمته.',{fontFamily:'Tahoma',fontSize:'24px',color:'#f1e7c7',rtl:true}).setOrigin(1,0);
this.add.text(900,430,'صُنعت بواسطة Ragnar (@abusqr)',{fontFamily:'Tahoma',fontSize:'20px',color:'#9ba9c0',rtl:true}).setOrigin(1,0);
this.input.keyboard.once('keydown-ENTER',()=>this.scene.start('MainMenuScene'));}}
