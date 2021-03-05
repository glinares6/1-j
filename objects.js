/* // alert('dfg')

let yo = {
nombre : 'GIANMARCO',
edad : 27,
pais : 'peru',
estado : 'soltero',
hijos : ['ninguno1', 'nnguno2'],
saludar(){
    return  'Bienvenido a Edt'
}
};

yo.dia= 'mañana';
// operadores
// delete elimina una propiedad
// in devuelve true si existe una propiedad en el elemento(sea del objeto o del prototipo)
// hasOwnProperty devuelve true si es propio del objeto


delete yo.hijos;

console.log(yo);
console.log(yo.edad);
//console.log(yo.hijos[1]);

Object.prototype.numeroMagico =05;
console.log('numeroMagico' in yo);
// console.log(yo.numeroMagico);
console.log(yo.hasOwnProperty('numeroMagico'));

// ES6

// copiar un objeto --> assimg

let ar= Object.assign({}, yo);
console.log(ar);

// asignar variables existentes a propiedades 

let a = 'base' , b= 'altura';

let myObj = {
    a,
    b
}

console.log(myObj);

// expresiones en propiedades (concatenacion)

let myObj2= {
    [a+b]: 'hola peru'
}

console.log(myObj2); */