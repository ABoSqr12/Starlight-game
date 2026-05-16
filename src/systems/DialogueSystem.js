export class DialogueSystem{constructor(lines=[]){this.lines=lines;this.i=0;}line(){return this.lines[this.i]||'';}next(){this.i++;return this.i<this.lines.length;}}
