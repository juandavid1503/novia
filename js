function mostrarCarta(){

document.getElementById("carta").style.display="block";

window.scrollTo({

top:500,

behavior:"smooth"

});

}

function crearCorazon(){

const corazon=document.createElement("div");

corazon.classList.add("corazon");

corazon.innerHTML="❤️";

corazon.style.left=Math.random()*100+"vw";

corazon.style.animationDuration=(Math.random()*3+3)+"s";

corazon.style.fontSize=(Math.random()*25+15)+"px";

document.body.appendChild(corazon);

setTimeout(()=>{

corazon.remove();

},6000);

}

setInterval(crearCorazon,250);
