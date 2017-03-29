// JavaScript
//

let a = 4, b = 1;

let foo = function () {
    let b = 2;

    return a + b;
}

if (a > 3) {
    let b = 5;
    console.log('Value of b: ' + b);
}

a = b;

console.log('Value of a: ' + a);
console.log('Value of foo: ' + foo());

// Closure
//

// Create a maker function called vadis. It makes an
// object with a get_status method and a private
// status property
let vadis = function (status) {
    return {
        get_status: function () {
            return status;
        }
    };
};

// Make an instance of vadis.
//
let myVadis = vadis('amazed');

console.log('Value of myVadis.status: ' + myVadis.get_status());


// Define a function that sets a DOM node's color
// to yellow and then fade it to white
//
let fade = function (node) {
    let level = 1;

    let step = function () {
        let hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;

        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};

fade(document.body);

// Own example about closure
//
var gExecute1 = null;
var gExecute2 = null;
var gExecute3 = null;
 
function createClosure() {
    var num = 10;
    gExecute1 = function () { console.log(num); };
 
    num++;
    gExecute2 = function () { console.log(num); };
 
    num = "¡¡Toma ya!!!"
    gExecute3 = function () { console.log(num); };
}
 
createClosure();
gExecute1();
gExecute2();
gExecute3();

function additionNumber(a, b)
{
    return function () { 
       console.log(a + " + " + b + " = " + (a + b)); 
    };
}
 
var execute = additionNumber(10, 40);
 
setTimeout(execute, 3000);  //Después de 3 segundos se muestra 
                            // en pantalla: 10 + 40 = 50

function Constructor(msjPrivado, msjPublico) {
 
     var propiedadPrivada = msjPrivado;
     this.propiedadPublica = msjPublico;
 
     var that = this; 
    /*
       La variable 'that' será guardada en el closure para ser 
       utilizada en su momento por la función metodoPrivado()
    */
 
     var metodoPrivado = function () {
         console.log(propiedadPrivada);
         console.log(that.propiedadPublica);
     };
 
     this.metodoPublico = function () {
          metodoPrivado();
     };
}
 
 
var objMsg = new Constructor("mensaje privado", "mensaje público");
objMsg.metodoPublico();
 
console.log('Value of objMsg.propiedadPublica: ' + objMsg.propiedadPublica);
 /*
    Muestra en pantalla dos mensajes seguidos:
    mensaje privado
    mensaje público
*/



