const hourhand=document.querySelector('.hour');
const minhand=document.querySelector('.min');
const sechand=document.querySelector('.sec');

setInterval(runClock,1000)


function runClock(){
    const time=new Date();

    const sec=time.getSeconds()/60;
    const min=(sec+time.getMinutes())/60;
    const hour=(min+time.getHours())/12;

    hourhand.style.setProperty('--rotation',hour*360)
    minhand.style.setProperty('--rotation',min*360)
    sechand.style.setProperty('--rotation',sec*360)
}

runClock();