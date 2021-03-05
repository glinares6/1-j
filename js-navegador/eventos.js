/*

un evento es cualquier cosa que sucede en la aplicación

¿como reconocer los eventos dispodibles en un objeto?

console.dir(obj)
    todos los que comiencen con la letra on son eventos

    como aplico una función a los eventos  (no recomendable)
    objeto.onEvent= function (){
        onEvent = evento del objeto (comodin)
    }

    se recomienda usar addEventListener
    objeto.addEventListener('event',function(){})
    event -> nombre del evento 



    eventos comunes
    click .> cuando el usuario hace click
    dbclick-> doble click
    mousedown -> al poner el mouse sobre un elemento
    mouseenter -> el cursor del mouse entra en una elemento
    mouseLeave ->  cuando el mouse sale de un elemento
    mousemove -> cuando se mueve el mouse
    mouseout -> cuando sales de un elemento
    mouseover -> cuando  poner el cursos encima de un elemento
    mouse up -> cuanto sale 
    mousewheeL -> cuando usas la rueda del mouse

    de teclado
    keydown -> cuando presionas una tecla
    keyup -> cuando sueltas una tecla

    De formulario

    submit  -> cuando se envia el formulario
    change -> cambio de valor de un imput

    de windowns
    resize -> cuando se redimensiona la ventana
    scroll -> cuando se hace scroll
    load .> cuando se carga completamente toda la pagina web
    DOMcontentLoader -> cuando se reenderiza en pantalla


*/


// menu.addEventListener('click',e =>{
//     e.preventDefault();
// e.target.style.background = 'red';
// }); 
/*
SU EQUIVALENTE
let eventHandler =e =>{
    e.preventDefault();
e.target.style.color = 'red';
}; 

menu.addEventListerner(''click, eventHandler)
*/

/* 
delegación de eventos
*/

let eventHandler =e =>{
    e.preventDefault();
    if (e.target.tagName === 'A') {
        console.log(e.target.textContent);
    }
};

menu.addEventListener('click', eventHandler);

/* 
eventHandler  -> manejador de eventos

*/