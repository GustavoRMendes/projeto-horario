let foto = document.getElementById('foto');
let paragrafo = document.getElementById('horas');
let fundo = document.getElementById('container');
let agora = new Date;
let horas = agora.getHours();
function carregar(){
    paragrafo.innerHTML = (`Agora são ${horas} horas.`);
    if(horas >= 12 && horas < 18){
        foto.src = './img/tarde.jpg';
        fundo.style.background = 'brown'
    }else if(horas < 12 && horas > 0){
        fundo.style.background = 'yellow'
    }else{
        foto.src = './img/noite.jpg';
        fundo.style.background = 'black'
    }    
}


