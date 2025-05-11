let number = 0
let cron
let h1 = document.querySelector("h1")

function formatarTempo(ms) {
    const totalSegundos = Math.floor(ms / 10);
    const horas = String(Math.floor(totalSegundos / 3600)).padStart(2, '0');
    const minutos = String(Math.floor((totalSegundos % 3600) / 60)).padStart(2, '0');
    const segundos = String(totalSegundos % 60).padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
}

function start(){
    cron = setInterval(function(){
       number++
       h1.innerHTML = formatarTempo(number)
    }, 1)
}

function pausar(){
    clearInterval(cron)
}

function stop(){
clearInterval(cron)
number = 0
h1.innerHTML = formatarTempo(number)
}