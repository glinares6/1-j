/* // alert('ggi')

// tipos de funciones


// funciones por definicion y por XPathExpression

function funcionporDefinicion(params) {
    // cuerpo de la funcion
}

funcionporDefinicion();

let funcionPorExpresion =  function () {
        // cuerpo de la funcion
    
}
funcionPorExpresion();

let c = console.log;
c('hola martes');


// funciones nombradas y funciones anonimas 

// callback una funcion que se ejecuta por otro , luego de un proceso 


// let el;
// el.addEventListener('click',function(){
//     // hace algo


// });


// funciones de flecha (arrays, functions) ES6 
// son funciones anonimas 
// (paran1, paran2; paran3) => valor de retorno 

// let suma = function (a,b) {
//     return a+b;
// }
let suma = (a,b) =>  a+b;

// el c introducido es reusado de un console 
c(suma(1,9));

let cuadrado = (a) => {
    if (typeof a == 'number') {
       return  a*a;
    }else{
        undefined;
    }
}

let micuadrado = cuadrado(4);
c(micuadrado)


let myObj= (a,b) => ( {a,b});
let myCustomObj  = myObj('hola','marts');  
c(myCustomObj);

 */