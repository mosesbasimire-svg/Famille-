const $=id=>document.getElementById(id);
const gift=$("openGift"),welcome=$("welcome"),show=$("show"),scene=$("scene"),caption=$("stageCaption"),crown=$("crownOverlay");
let paused=false, storyTimer=null, activeUtterance=null;
const lines={
  papa:"Mon fils Bien-aimé, joyeux anniversaire ! Que Dieu te protège, te donne la sagesse et guide chacun de tes pas. Grandis dans le respect, le courage et l'amour. Nous sommes fiers de toi.",
  maman:"Mon Bien-aimé, tu es une grande joie dans ma vie. Que cette nouvelle année t'apporte la santé, la paix, la sagesse et de belles réussites. N'oublie jamais que tu es aimé. Joyeux anniversaire, mon fils !",
  frere:"Bien-aimé, tu es précieux pour moi et pour toute notre famille. Poursuis tes rêves avec courage et garde toujours un bon cœur. Aujourd'hui, tu es le roi de ton jour !",
  bien:"Merci Papa, merci Maman, merci grand frère. Votre amour est le plus beau des cadeaux. Je vous aime et je garderai cette surprise dans mon cœur !"
};
function speak(text, rate=0.92, pitch=1){
  if(!("speechSynthesis" in window)){caption.textContent="La lecture vocale n'est pas prise en charge par ce navigateur.";return Promise.resolve();}
  speechSynthesis.cancel();
  return new Promise(resolve=>{
    const u=new SpeechSynthesisUtterance(text);u.lang="fr-FR";u.rate=rate;u.pitch=pitch;
    const voices=speechSynthesis.getVoices();const fr=voices.find(v=>/^fr/i.test(v.lang));if(fr)u.voice=fr;
    activeUtterance=u;u.onend=resolve;u.onerror=resolve;speechSynthesis.speak(u);
  });
}
function confetti(){const colors=["#f7d987","#f36d9e","#c6a1ff","#fff0c0","#e84c71"];for(let i=0;i<75;i++){const e=document.createElement("i");e.className="confetti-piece";e.style.left=Math.random()*100+"%";e.style.background=colors[i%colors.length];e.style.animationDelay=Math.random()*1.2+"s";e.style.animationDuration=3+Math.random()*2+"s";document.body.appendChild(e);setTimeout(()=>e.remove(),6000)}}
gift.addEventListener("click",()=>{gift.classList.add("opening");confetti();setTimeout(()=>{welcome.classList.remove("active");show.classList.add("active");scene.classList.add("opened");caption.textContent="Bienvenue au palais royal, Bien-aimé !";},800)});
async function runStory(){
  paused=false; $("playStory").disabled=true;
  scene.classList.add("opened","walking");scene.classList.remove("seated");crown.classList.remove("visible");
  caption.textContent="Bien-aimé marche vers le palais…";
  await speak("Waouh… quel endroit magnifique ! Mais où suis-je ? Qu'est-ce qui m'attend aujourd'hui ?",0.94,1.08);
  if(paused)return;
  caption.textContent="Les portes du palais s'ouvrent…";
  await new Promise(r=>setTimeout(r,800));if(paused)return;
  scene.classList.add("seated");caption.textContent="Bien-aimé prend place sur le trône royal.";
  await speak(lines.papa,0.9,0.9);if(paused)return;
  caption.textContent="Un message rempli d'amour de Maman.";
  await speak(lines.maman,0.92,1.12);if(paused)return;
  caption.textContent="Le grand frère entre avec la couronne…";
  scene.classList.remove("walking");scene.classList.add("seated");
  await speak(lines.frere,0.94,0.98);if(paused)return;
  crown.classList.add("visible");confetti();caption.textContent="La couronne est posée : Bien-aimé est le roi de son jour !";
  await speak("Bien-aimé, au nom de notre amour familial, je te couronne roi de cette journée. Que ton avenir soit lumineux, que Dieu te protège et que tes rêves deviennent réalité. Joyeux anniversaire !",0.91,0.98);
  if(paused)return;
  await speak(lines.bien,0.93,1.08);
  caption.textContent="Joyeux anniversaire, Bien-aimé ! Toute la famille t'aime.";
  $("playStory").disabled=false;
}
$("playStory").addEventListener("click",runStory);
$("stopStory").addEventListener("click",()=>{paused=true;if("speechSynthesis"in window)speechSynthesis.cancel();$("playStory").disabled=false;caption.textContent="Pause. Appuie sur « Lancer le film avec les voix » pour recommencer."});
document.querySelectorAll(".say").forEach(b=>b.addEventListener("click",()=>{const key=b.dataset.speaker;speak(lines[key],key==="maman"?0.92:0.94,key==="maman"||key==="bien"?1.1:.95)}));
$("crownButton").addEventListener("click",()=>{crown.classList.add("visible");scene.classList.add("seated");confetti();caption.textContent="Le couronnement de Bien-aimé !";speak("Joyeux anniversaire, Bien-aimé ! Tu es le roi de cette journée. Papa, Maman et ton grand frère t'aiment très fort.",.92,1)});
$("restart").addEventListener("click",()=>{paused=true;if("speechSynthesis"in window)speechSynthesis.cancel();show.classList.remove("active");welcome.classList.add("active");gift.classList.remove("opening");scene.classList.remove("opened","walking","seated");crown.classList.remove("visible");$("playStory").disabled=false;window.scrollTo({top:0,behavior:"smooth"})});
if("speechSynthesis"in window){speechSynthesis.onvoiceschanged=()=>{};}