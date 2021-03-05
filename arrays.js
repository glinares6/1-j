/* // alert('mvb')

let arr = [1,'2','true',4,5,6,1,false,5]

let suma=0;
for (let i = 0; i < arr.length; i++) {
    
    let element =arr[i]
    if (typeof element != 'number'){ 
        continue;
    }  
    suma+= element;  
}
console.log(suma);

Array.prototype.saludo= 'adios';
console.log(arr.saludo);

// indexOf indica el orden del array
console.log(arr.indexOf(5));

//agregar elementos con 

// .push(ele1,ele2,ele3)  añade al final
// .unshifh(ele1,ele2,ele3) añade al incio

arr.push('cero');

console.log(arr);

// eliminar un solo elemento
// .pop() al final 
// .shift() al inicio
console.log(arr);
let  deleteEl = arr.pop();
console.log(arr);
console.log(deleteEl);

// .join('separador) lo vuelve un string

console.log(arr.join());


// splice(a,b,iten)
//  añade o quita elementos

arr.splice(3,0,'es','di')
console.log(arr);

//slice crea un nuevo array
console.log(arr);

let arr2 = arr.slice(2,5);
// let arr2 = arr;   referencia
console.log(arr2);




//ES6
// .find(cb)
let arr = [1,5,8,14,20]
// aroundFunction 
let num = arr.find(el => el>2);
let numIndex = arr.findIndex(el => el>3);

console.log(num);
console.log(numIndex);


// iteradores

// son objetos que contienen un metodo next()
// ese metodo devuelve  un objeto con 2 propiedades
// value   done 

// .keys()  .values() .entries()

let iterador = arr.entries();
console.log(iterador.next());
console.log('hola');
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
 */






























