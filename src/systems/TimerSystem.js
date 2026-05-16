export class TimerSystem{constructor(){this.قيمة=0;this.متوقف=false;}update(dt){if(!this.متوقف)this.قيمة+=dt/1000;}}
