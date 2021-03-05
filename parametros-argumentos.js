/* 
// alert('s');

// parametros y argumentos 
    // console.log(arguments);


    let sumar = (a,b) => {
        return  a + b;
    }
function sumar(a,b,c) {
    console.log(arguments);
}


function sumar(a,b,c) {
    return  a + b + c;
}

console.log(sumar(2,4,6,8,10,12));

// si hay mas parametros que argumentos  , los argumentos faltantes son
// undefined 
// si hay mas argumentos que parametros no devueve error 


function sumarTodo() {
    console.log([...arguments]);
   return [...arguments].reduce((a,b) => a+b);
    // let sun=0;
    // for (let i = 0; i < arguments.length; i++) {
    //    sun +=arguments[i];
        
    // }
    // return sun;
 
}

console.log(sumarTodo(1,2,3,4,5,6,7,8,9 ));

document.querySelectorAll('.container');

function sumar2(a,b) {
    return a + b;
}

let numero = [2,3];

console.log(sumar2.apply(undefined,numero));

console.log(sumar2(...numero));

// parametro por defecto 
function sumar(a,b =2) {
    return a+b;
}

console.log(sumar(1));

// parametros rest 

function sumarTodo(m,p,...elements) {
  return   elements.reduce((a,b) => a + b );
}

console.log(sumarTodo('a','b',1,2,6,8,10,45));


 */