/* // alert('gogog')

// las funciones son bloques de codigo reutilizables 

// function nombreFuncion(parametro1, parametro2,parametro3){
//     // codigo 

// } 



let saludo = 'hola martes';
function suma (a,b) {
//  if (a>b) {
//      return a +b;
//  }
//  return b;

return{
    a : a+1,
    b : b+1
}
}

let miSuma=suma(7,5);
console.log(miSuma);

let obj = {
    nombre : 'objeto',
    sumar(a,b){
        return a+b;
    }

};

let miOtraSuma = obj.sumar(2,3);
console.log(miOtraSuma);
console.log(obj.nombre);


// function dentro de otra function 
function restar(a){
    return function(b){
        return a-b;
    }
}

let miResta= restar(5);
console.log(miResta(1));


// funciones autoinvocadas 

let multiplicacion =(function (a,b) {
    return a*b;
})(5,2);

console.log(multiplicacion);

// (function(window,document){
//     let algo ='algo';
// })(window,document);

// console.log(algo);

// funcion constructora 

let Pais =function(nombre,moneda){
    this.nombre = nombre;
    this.moneda = moneda;

};

let  peru = new Pais('peru', 'solo');

console.log(peru);

// apply() y call()

function add(a,b,c) {
    return a + b + c;
    
}

let numeros = [2,3,4]
// let myAdd= add(numeros);
// console.log(myAdd);

// agrega valores de un elemeto definido 
let myAdd = add.apply(undefined,numeros);
console.log(myAdd);

// agrega valores dinamicos a la funcion 
let myOther =add.call(undefined,2,3,4);
console.log(myOther);

 */