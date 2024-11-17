let start =document.querySelector(".wstart");
let stop =document.querySelector(".wstop");
let reset =document.querySelector(".wreset");
let display=document.querySelector(".display");
let id=null;
let seconds=0;
let minutes=0;
let hours=0;

start.addEventListener("click",watchstart);
stop.addEventListener("click",watchstop);
reset.addEventListener("click",watchreset);
function begin(){
    seconds++;
    if(seconds===60){
        minutes++;
    }
    if(minutes===60){
        hours++;
    }
    let h=hours<10?"0"+hours:hours;
    let m=minutes<10?"0"+minutes:minutes;
    let s=seconds<10?"0"+seconds:seconds;
    display.innerHTML=h+":"+m+":"+s;
}
function watchstart(){
    if(id!==null){
       clearInterval(id);
    }
    id=setInterval(begin,1000);
}

function watchstop(){
    clearInterval(id);
}

function watchreset(){
    clearInterval(id);
    display.innerHTML="00"+":"+"00"+":"+"00";
}