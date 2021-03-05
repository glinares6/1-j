/* DOM -> DOCUMENT OBJECT MODEL

    .body -> body element
    .documentElement -> root(html
    limks -> enlaces
    -scripts -> scripts
    .images  -> images
    head -> head element
    styleSheets -> todos los css

 */


/*  obtener elementos del DOM
document.getElementBYiD(´ID´);
document.querySelector('cssSelector')
document.querySelectorAll('cssSelector')

si no se encuentra los elementos se devuelve null

querySelector()  querySelectorAll()
se puede ehecutar desde el elemento o desde un elemento
querySelecroAll() -> no devuelve unarray es necesario expandirlo

[...document.querySelecrorALL(selector)]


 */

//  console.log(document.getElementById('app'));

// let title = document.getElementById('title');

// if (title) {
//     title.textContent = 'bienvenido';
    
// }
// console.log('sigue funcionando');

// el resto de la app no se ejecutara por culpa de la linea anterior 


let menu = document.getElementById("menu"),
        menuLinks =[... menu.querySelectorAll('a')];
        menuItems =[... menu.querySelectorAll('li')];

        console.log(menuLinks);


/* 
dom traversing

Hermanos
element.nextElementSibling -> hermano siguiente (elemento)
element.nextSibling -> hermano siguiente (nodo)
element.previousElementSibling -> hermano anterior (elemento)
element-previousSibling -> hermano anterior (nodo)

Padres
element-parentnode -> padre (node)
element.parentElement  -> padre  (elemento)


Hijos
element.children -> lista de elementos hijos
element.childNode  -> todos los elementos hijos
element.firstElementChild
element.firshChild -> primer nodo hijo
element.lastElementChild -> ultimo elemento hijo
element.lastChild -> ultimo nodo hijo 



*/

/*

propiedades de los elementos
contenido 

.textContent .> tecto plano del elemento (lectura y escritura)

.innerHTML ->  HTML interno de un  elemento

atrinutos
.attributes
item.getAttribute('attr')
.setAttribute('attr',value)
.removeAttributes('attr')



Clases 
.classList
.add(className)
-remove(className)
.contains('className') -> devuelve true si el elemento contiene esa clase 


estilos css

.style
.cssProterty (usar camelCase en lugar de guiones)

*/


/* 
item.style.color = 'red'
item.firstElementChild.style.color = 'green'
item.style.backgroundColor = 'yellow' 

*/

/* 
tranformar el DOM 

Crar elementos 
document.createElemet('tagNane')

insertar elementos

.appendChild() -> inserta un elemento al final del padre
        parent.appendChildElement()

        insertBeffore() -> inserta un elemento despues del otro
        parent.insertBeffore(newElement ,nextElement)
            parent -> elemento padre
            newParent -> Elemnto a insertar
            nectElemento -> elemento existente antes del cual ya se insertará el nuevo

*/

let item = menuItems[1];


// let el =document.createElement('li');
// el.textContent ='soy un nuevo elemento';
// // menu.appendChild(el);

// menu.insertBefore(el,menuItems[1]);

/* 
como eliminar y mover elementos del DOM


parent.removeElement(element)
  elimina elemento de parent

  element.remove(
      eliminas al elemento por si solo 
  )
*//* 

mover elementos de un lugar a otro al final de la lista 
menuItems[2].remove();
let el = menu.removeChild(menuItems[2]);
menu.appendChild(el);
let el = menu.removeChild(menuItems[0]);
menu.appendChild(el);
 */

