const screens = document.querySelectorAll(".screen");

function showScreen(id) {
    screens.forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
const music = document.getElementById("bgMusic");

document.addEventListener("click", function startMusic() {

    music.play().catch(() => {});

    document.removeEventListener("click", startMusic);

});
document
.getElementById("to-love-letter")
.addEventListener("click", () => {
    showScreen("screen-give-anything");
    playGiftStory();
});
document.getElementById("to-heart-page").addEventListener("click", () => {
    console.log("Button clicked");
    showScreen("screen-heart-lock");
});
let clicks=0;

const heart=document.getElementById("heartLock");

heart.onclick=()=>{

clicks++;

if(clicks==1){

heart.innerHTML="❤️🔓";

heart.style.transform="rotate(10deg)";

}

if(clicks==2){

heart.style.transform="scale(1.2)";

}

if(clicks==3){

heart.innerHTML="💖";

document.getElementById("heartText").innerHTML='You have always had the key.<br><br>My heart was never locked from you. I was only waiting for the right time to give it completely. ❤️';

document.getElementById("to-love-letter-screen").style.display="inline-block";
document.getElementById("to-love-letter-screen").addEventListener("click", () => {
    showScreen("screen-love-letter");
    playGiftStory();
});
}

}
document
.getElementById("to-balloons")
.addEventListener("click", () => {
    showScreen("screen-balloons");
});
document
.getElementById("to-memories")
.addEventListener("click", () => {
    showScreen("screen-memories");
});
document
.getElementById("to-holdinghand")
.addEventListener("click", () => {
    showScreen("screen-holdinghand");
});
const words = [
    "You",
    "are",
    "so",
    "special ❤️"
];

let popped = 0;

const finalMessage = document.getElementById("balloon-message");

document.querySelectorAll(".balloon").forEach(balloon=>{

balloon.onclick=()=>{

if(balloon.classList.contains("done"))
return;

balloon.classList.add("done");

const word=balloon.dataset.word;

const rect=balloon.getBoundingClientRect();

createBurst(rect.left+45,rect.top+45);

balloon.style.visibility="hidden";

const span=document.createElement("span");

span.className="word";

span.innerHTML=word;

finalMessage.appendChild(span);

popped++;

if(popped===4){

setTimeout(()=>{

confetti({

particleCount:120,

spread:90

});

document
.getElementById("to-memories")
.style.display="inline-block";

},800);

}

};

});

function createBurst(x,y){

for(let i=0;i<12;i++){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.className="burstHeart";

heart.style.left=x+"px";

heart.style.top=y+"px";

heart.style.setProperty("--dx",
(Math.random()*160-80)+"px");

heart.style.setProperty("--dy",
(Math.random()*160-80)+"px");

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),900);

}

}

const no = document.getElementById("no");

function moveButton() {

    no.style.position = "fixed";

    no.style.left =
        Math.random() * 80 + "vw";

    no.style.top =
        Math.random() * 80 + "vh";
}

no.addEventListener("mouseenter", moveButton);

no.addEventListener("touchstart", e => {

    e.preventDefault();

    moveButton();

});
document
.getElementById("yes")
.addEventListener("click", () => {

    confetti({

        particleCount: 250,

        spread: 120,

        origin: {
            y: 0.6
        }

    });

    showScreen("screen-gifts");

});
function nextGift(current) {

    const currentGift = document.getElementById("gift-" + current);
    const nextGift = document.getElementById("gift-" + (current + 1));

    currentGift.style.opacity = "0";

    setTimeout(() => {
        currentGift.classList.remove("active");
        nextGift.classList.add("active");
        nextGift.style.opacity = "1";
    }, 400);

}
document
.getElementById("gift-next-1")
.onclick = () => nextGift(1);

document
.getElementById("gift-next-2")
.onclick = () => nextGift(2);

document
.getElementById("gift-next-3")
.onclick = () => nextGift(3);

function playGiftStory(){
const words=document.querySelectorAll(".giftWord");
const final=document.getElementById("finalGiftText");
const btn=document.getElementById("to-heart-page");
words.forEach((word,index)=>{
setTimeout(()=>{
word.style.opacity="1";
word.style.transform="translateY(0)";
},index*1800);
setTimeout(()=>{
word.style.opacity=".1";
},index*1800+1300);
});
setTimeout(()=>{
final.style.display="block";
},7500);
setTimeout(() => {
    btn.style.display = "inline-block";
    btn.disabled = false;
}, 9000);
}


const giftBox = document.getElementById("giftBox");

if (giftBox) {

    giftBox.onclick = () => {

        document.querySelector(".gift-lid").style.transform =
            "translateY(-140px) rotate(-12deg)";

        confetti({
            particleCount:180,
            spread:90
        });

        setTimeout(()=>{
            giftBox.style.display="none";
            document.getElementById("giftReveal").style.display="block";
        },900);

    };

}
