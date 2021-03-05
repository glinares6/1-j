/* // alert('yu')

// scope es el ambito o contexto 
// donde se ejecuta la funcion y 
// existen sus variables


 {
    let    hola
   hola='mundo';
}


console.log(hola);

function holaDeNuevo() {
    hola='otra vez';
}

holaDeNuevo();
console.log(hola);


function sumar (a) {
    return function (b) {
        return a+b;
    }
    
}

let miSuma = sumar(1)(3)

console.log(miSuma);



// closures

function saludar() {
    let saludo ='hola';

  return  function saludarInterno(amigo) {
        console.log(saludo+` ${amigo}`);
    }
}

let miSaludo = saludar();
miSaludo('alex');
miSaludo('beto');


function afuera() {
    let numero = 1;
    return function () {
        numero++;
        console.log(numero);
    }
}


// afuera()();
// afuera()();
// afuera()();
// afuera()();
 let aumentar = afuera();
aumentar();
aumentar();
aumentar();
aumentar();
aumentar(); */