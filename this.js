// alert('i')

// let myObj = {

//     nombre : 'gianmarco',
//     saludar(){
//         console.log(`hola ${this.nombre}`);
//     }
// }

// myObj.saludar(); 

// 'use strict';
// function checkThis() {
//     console.log(this);
// }

// checkThis();

// sumar.apply(undefined,numero);

// ES5
// function Boy(edad) {
//     this.edad =0;
//     let _t=this;
//     setInterval(function() {
//         _t.edad++;
//     }, 1000)
// }

// ES6
function Boy(edad) {
    this.edad = 0;
    setInterval(() =>{
        this.edad++;
    }, 1000)
}


let juan =new Boy();