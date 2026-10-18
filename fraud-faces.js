(() => {
 const faces = [...document.querySelectorAll('.fraud-face')];
 const reduced = matchMedia('(prefers-reduced-motion: reduce)');
 faces.forEach((face, index) => {
  const visit = () => {
   if (document.hidden) { setTimeout(visit, 1500); return; }
   const width = face.offsetWidth;
   const height = face.offsetHeight;
   face.style.left = `${Math.random() * Math.max(0, innerWidth - width)}px`;
   face.style.top = `${80 + Math.random() * Math.max(0, innerHeight - height - 100)}px`;
   const tilt = Math.random() * 36 - 18;
   const drift = Math.random() * 100 - 50;
   const frames = reduced.matches ? [{opacity:0},{opacity:1,offset:.2},{opacity:1,offset:.7},{opacity:0}] : [
    {opacity:0,transform:`translate(0,30px) scale(.65) rotate(${tilt-10}deg)`},
    {opacity:1,offset:.2,transform:`translate(0,0) scale(1) rotate(${tilt}deg)`},
    {opacity:1,offset:.7,transform:`translate(${drift}px,-30px) scale(1.08) rotate(${tilt+8}deg)`},
    {opacity:0,transform:`translate(${drift}px,-55px) scale(.8) rotate(${tilt+15}deg)`}
   ];
   const animation = face.animate(frames,{duration:4200 + Math.random()*1200,easing:'ease-in-out'});
   animation.finished.then(() => setTimeout(visit, 400 + Math.random()*1400));
  };
  if(face.complete) setTimeout(visit,index*1200); else face.addEventListener('load',()=>setTimeout(visit,index*1200),{once:true});
 });
})();
