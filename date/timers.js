/*
Timers

setTimeOut(cb,t)
setInterval(cb,t)

*/

// console.log('hola');
// let counter = num  =>console.log(++num); 

// setTimeout(function(){
//     counter(1);
// },3000);

// let count = 0;
// let myInterval = setInterval(function(){
// console.log(++count);
// if (count === 5) {
//     clearInterval(myInterval)
// }
// },1000);

 

// ejerciico reloj

// let reloj = setInterval(function(){
//     document.body.innerHTML = new Date().toLocaleString();
// },1000);


    // LA HORA EN RETROCESO

// let countDown = ms => { 
//     let myCountDown = setInterval(function(){
//         ms -=1000;
//         let minutes = Math.floor(ms / (1000 * 60 )),
//         seconds = Math.floor(ms % (1000 * 60)/1000)
//         document.body.innerHTML = `Quedan ${minutes}minutos 
//         y ${seconds} segundos` ; 
      
//         if (ms === 0 ) {
//             clearInterval(myCountDown);
//             document.body.innerHTML =`tiempo cumolido`;
//         }
//     },1000)
// };
// countDown(70000);

let writing = str => {
    let arrFronStr = str.split('');
    let i=0;
    let printStr = setInterval(function(){

document.body.innerHTML +=arrFronStr[i];
i++;

if (i=== arrFronStr.length ) {
    clearInterval(printStr);
    
    document.body.style.color = 'steelblue'
}
    },300);
};

writing('la manera es la manera de los dioses');