
const startBtn= document.querySelector("#startBtn");
const stopBtn= document.querySelector("#stopBtn");

const body= document.querySelector("body");


function hexGenerator(){
    let number="0123456789ABCDE";
    let color="#";

    for(let i=0;i<6;i++){
        color+= number[Math.floor(Math.random()*15)]
    }

    return color;
}

function startChange(){
    body.style.backgroundColor=hexGenerator();
}

let intervalId;

startBtn.addEventListener('click',()=>{

    if(!intervalId){
        intervalId=setInterval(startChange,2000);

    }
});

stopBtn.addEventListener('click',()=>{
    clearInterval(intervalId);
    intervalId= null;
    body.style.backgroundColor="white";
});

