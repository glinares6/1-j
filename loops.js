/* //  alert('jl');
// ciclos
// alert('fd')
// for ciclos 
let meses = ['Enero', 'fecrero', 'marzo', 'Abril', 'mayo', 'Junio', 'julio', 'agosto', 'setiembre', 'octubre' , 'noviembre', 'diciembre'];



for (let i = 0; i < meses.length; i++) {
    if (meses[i].toUpperCase().indexOf('A')==0) {
        break;
    }
    console.log(meses[i]);
}

// break  ejecutan los valores hasta que  se cumple la condicion (se sale del ciclo)
// continue  si cumple la condicion  se quita los valores y sigue ejecutando los valores (saltarse una iteracion del ciclo)

// while 
 let i = 100;
 while (i>0) {
        console.log('atender y observar 30 ');
        i--;
 }


//  do while 
let password = 'ED';
let pass;
do {
        pass= prompt('introdusca la contraseña');
} while (pass != password); 

// for of ES6



for (let value of meses) {
        console.log(value);
}

let links=document.links

console.log(links);


for (let link of links){
    link.style.color = 'red'
    } */