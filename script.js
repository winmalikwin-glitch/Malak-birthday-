function gift(){

document.getElementById("message").innerHTML=
`
🎂❤️

كل عام وأنتِ بألف خير يا ملاك
مالك يتمنالك سنه حلوة زيك هكي وعمر طويل ان شاء الله ✊🏼 67

🎉🎈🎁✨
`;

confetti();

}

function confetti(){

for(let i=0;i<150;i++){

let c=document.createElement("div");

c.innerHTML="🎉";

c.style.position="fixed";
c.style.left=Math.random()*100+"vw";
c.style.top="-20px";
c.style.fontSize=Math.random()*25+20+"px";

document.body.appendChild(c);

let y=0;

let fall=setInterval(()=>{

y+=5;

c.style.top=y+"px";

if(y>window.innerHeight){

clearInterval(fall);

c.remove();

}

},20);

}

}
