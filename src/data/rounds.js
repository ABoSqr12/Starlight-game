import { الزعماء } from './bosses.js';
export const الجولات=Array.from({length:30},(_,i)=>{const r=i+1;return{رقم:r,اعداء:Math.min(3+Math.floor(r*0.9),24),زعيم:الزعماء[r]||null};});
