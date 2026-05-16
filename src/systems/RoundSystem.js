import { الجولات } from '../data/rounds.js';
export class RoundSystem{constructor(){this.رقم=1;}current(){return الجولات[this.رقم-1];}next(){this.رقم=Math.min(30,this.رقم+1);}}
