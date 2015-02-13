'use strict';

// -- Closures
// Es una forma de tener variables encapsuladas dentro de una función
// y que no son accesibles desde fuera, a menos que sean devueltas a través
// de una función interna

var welcome = 'message';

(function () {
	console.log('Cargando...');
	var message = 'Welcome'; 
})();

// message -> undefined
// welcome -> 'message';

function f() {
  var b = 'b';
  return function() {
    return b;
  };
}

// b - undefined
// var n = f();
// n(); -> "b";
// f()(); -> "b";

// Ejemplo práctico
function aumentarFuente(size) {
  return function () {
    document.body.style.fontSize = size + 'px';
  };
}


var size30 = aumentarFuente(30);
var size50 = aumentarFuente(50);
var size80 = aumentarFuente(80);

