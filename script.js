/* ===========================

   Happy Girlfriend Day

   Premium Script - Part 1

=========================== */

// Loader

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }, 2200);

});

// Open Website

const startBtn = document.getElementById("startBtn");

if(startBtn){

startBtn.addEventListener("click",()=>{

document.querySelector(".hero").style.display="none";

document.getElementById("main").classList.remove("hidden");

});

}

// Love Letter Typing

const message =

`Dear Prionty ❤️

You are my favorite person,

today and always.

Every smile of yours makes my world brighter.

Thank you for loving me,

supporting me,

and staying beside me.

Happy Girlfriend Day ❤️

Forever Yours,

Arafat Hosen`;

let i=0;

function typeLetter(){

const box=document.getElementById("letter");

if(!box) return;

if(i<message.length){

box.innerHTML+=message.charAt(i);

i++;

setTimeout(typeLetter,40);

}

}

setTimeout(typeLetter,2500);

// Love Timer

const startDate = new Date("2025-11-03T00:00:00");

function updateTimer(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff/(1000*60*60*24));

const hours = Math.floor((diff/(1000*60*60))%24);

const minutes = Math.floor((diff/(1000*60))%60);

const seconds = Math.floor((diff/1000)%60);

document.getElementById("days").innerText=days;

document.getElementById("hours").innerText=hours;

document.getElementById("minutes").innerText=minutes;

document.getElementById("seconds").innerText=seconds;

}

setInterval(updateTimer,1000);

updateTimer();
/* ===========================

   Premium Effects - Part 2

=========================== */

// Photo Slider

const slides = document.querySelectorAll(".slide");

let current = 0;

function changeSlide(){

if(slides.length===0) return;

slides.forEach(img=>{

img.classList.remove("active");

});

current++;

if(current>=slides.length){

current=0;

}

slides[current].classList.add("active");

}

setInterval(changeSlide,3000);

// Floating Hearts

const hearts=document.getElementById("hearts");

function createHeart(){

if(!hearts) return;

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-30px";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.animation="fall 7s linear forwards";

heart.style.zIndex="999";

hearts.appendChild(heart);

setTimeout(()=>{

heart.remove();

},7000);

}

setInterval(createHeart,400);

// Music

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

let playing=false;

if(musicBtn){

musicBtn.onclick=()=>{

if(!playing){

music.play();

musicBtn.innerHTML="⏸ Pause";

playing=true;

}else{

music.pause();

musicBtn.innerHTML="🎵 Music";

playing=false;

}

};

}

// Smooth Fade

document.querySelectorAll(".glass-card").forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(50px)";

});

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.transition="1s";

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".glass-card").forEach(card=>{

observer.observe(card);

});