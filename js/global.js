var posicion = document.getElementById("avion");
var direccion = "derecha";
var limiteDerecha = window.innerWidth - posicion.offsetWidth;
var limiteIzquierda = 0;
var gradosActuales = 0;

// Función para mover el avión
function moverAvion() {
  if (direccion == "derecha") {
    posicion.style.left = posicion.offsetLeft + 1 + "px";
    if (posicion.offsetLeft >= limiteDerecha) {
      direccion = "izquierda";
      gradosActuales += 180;
      posicion.style.transform = "rotate(" + gradosActuales + "deg)";
    }
  } else {
    posicion.style.left = posicion.offsetLeft - 1 + "px";
    if (posicion.offsetLeft <= limiteIzquierda) {
      direccion = "derecha";
      gradosActuales += 180;
      posicion.style.transform = "rotate(" + gradosActuales + "deg)";
    }
  }
}

// Ejecuta la función moverAvion cada 10 milisegundos
setInterval(moverAvion, 10);

//scroll
AOS.init({
  duration:1000
});

//aparecer texts
document.getElementById("one").onmouseover = function() {
  document.getElementById("text1").style.display = "block";
};
document.getElementById("one").onmouseout = function() {
  document.getElementById("text1").style.display = "none";
};

document.getElementById("two").onmouseover = function() {
  document.getElementById("text2").style.display = "block";
};
document.getElementById("two").onmouseout = function() {
  document.getElementById("text2").style.display = "none";
};
document.getElementById("three").onmouseover = function() {
  document.getElementById("text3").style.display = "block";
};
document.getElementById("three").onmouseout = function() {
  document.getElementById("text3").style.display = "none";
};


///linkeo con js

let wap = document.getElementById("whatsapp");
wap.addEventListener("click", function(){
  window.location='http://127.0.0.1:5501/index.html';
});

let llamar = document.getElementById("apoyo");
wap.addEventListener("click", function(){
  window.location='http://127.0.0.1:5501/index.html';
});
