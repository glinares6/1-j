/*  // alert('io')

let edad = prompt('Dime tu edad');
// let edad = 0;


if (edad>=0 && edad<12) {
    console.log('eres niño')
    if (edad<2) {
        console.log('eres bebe');
    }
}else if(edad>=12 && edad<18){

    console.log('eres adolescente');

}else if(edad>=18 && edad<60){
    console.log('eres adulto');
}else if(edad<0){
    console.log('ingrese una edad valida');
}else{
    console.log('eres anciano');
}



// truthy strings no vacios, [], {}, numeros diferentes de cero 
// falsy: 0 . strings vacios ,undefined, null ,NaN 

if (edad) {
        console.log('ingresaste un valor truthy');
}else{
    console.log('ingresaste un valor falsy');
}




// switch 

switch (edad) {
    case '10':
        console.log('escribiste un  numero correcto');
        break;

    default:
        console.log('numero incorrecto');
        break;
}




 let color = prompt(`conoce tu personalidad segun tu color:
 1. rojo
 2. azul
 3. verde
 4. naranja
 5.blanco`)

 switch (color) {
     case '1':
            console.log('elegiste el rojo, eres apasioando');
         break;
    case '2':
        console.log('elegiste el azul, vives en tranquilidad');
        break
     default:
         console.log('debes elegir un color valido');
         break;
 }



//  operador ternario 
//  es una forma abreviada de escribir un if
// condicion ? valortrue : valorFalse

let nombre = prompt('escribe tu nombre');
console.log(nombre.length)

nombre.length > 5 ?  console.log('nombre mayor que 5')  : console.log('nombre menor que 5')

if (nombre.length>5)  console.log('tu nombre es largo'); */