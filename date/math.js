/* 
objetos math
solo tiene propiedades y metodos estaticos 


metodos

min()
max()
randon()  ->numeros aleatorios entre 0 y 1
floor() -> redondea hacia abajo un decimal
ceil() -> redondea hacia arriba un decimal
round () -> redondea un decimal a su entero más cercano
pow() -> eleva x al ecponente n
sqrt() -> devuelve la raiz de n 

*/
// let arr = [1,11,3,7,4,5]
// console.log(Math.max(...arr));
// console.log(Math.min(...arr));

// obtener un entero aleatorio


// let randonNumber = Math.floor(Math.random()*10);
// console.log(randonNumber);


// promt es un string y se hace el parseo con parseInt  p también o también el number puede ser

let getRandonNumber = (min,max) => {
  return   Math.floor(Math.random()*(max - min) +min);
};

// console.log(getRandonNumber(0,3));
let guestNumber = (min,max) =>{
    let numMachine = getRandonNumber(min,max);
    let numPlayer;
    let count = 0;

    do{
        numPlayer = parseInt(prompt(`adivina el numero de la maquina entre ${min} y ${max}`),10);
        count++;
        if (numPlayer > numMachine) {
            alert(`tu numero es mayor al de la maquina vas ${count} ${count === 1 ? 'intento' :  'intentos'}
            `)
        }else if (numPlayer < numMachine) {
            alert(`tu numero es menor al de la maquina  vas ${count} ${count === 1 ? 'intento' :  'intentos'}`)
        }else{
            alert(`adivinaste el numero en ${count} ${count === 1 ? 'intento' :  'intentos'} `)
        }
    }while(numPlayer !==numMachine);
};

guestNumber(20,50);