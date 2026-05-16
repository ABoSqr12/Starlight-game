export const SaveSystem={set:(k,v)=>localStorage.setItem(k,JSON.stringify(v)),get:(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f;}catch{return f;}}};
