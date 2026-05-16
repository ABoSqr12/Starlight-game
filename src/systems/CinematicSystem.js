export const CinematicSystem={fadeIn:(s)=>s.cameras.main.fadeIn(300,0,0,0),fadeOut:(s,cb)=>{s.cameras.main.fadeOut(300,0,0,0);s.time.delayedCall(320,cb);},shake:(s)=>s.cameras.main.shake(130,0.006)};
