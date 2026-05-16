import { SaveSystem } from './SaveSystem.js';
const KEY='ترتيب_ستارلايت';
export const LeaderboardSystem={
read(){return SaveSystem.get(KEY,[]);},
write(entry){const list=this.read();list.push(entry);SaveSystem.set(KEY,list);},
sorted(){return this.read().sort((a,b)=>{if(a.مكتمل&&b.مكتمل) return a.الوقت-b.الوقت; if(a.مكتمل!==b.مكتمل) return b.مكتمل-a.مكتمل; return b.الجولة-a.الجولة;});}
};
