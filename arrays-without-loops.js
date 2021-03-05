/* // alert('oooo')

// .map()
// .filtter()
// .reduce()


let estudiantes = [
    {
        nombre : 'carlos',
        calificacion : 20
    },
    {
        nombre : 'juan',
        calificacion : 12
    },
    {
        nombre : 'maria',
        calificacion : 9
    },
    {
        nombre : 'pepe',
        calificacion : 7
    },
    {
        nombre : 'magy',
        calificacion : 15
    }

];

console.log(estudiantes[0]);

// Map()
// transforma cada elemento del arrays segun el colback y devyelve cada elemento del arrays 

console.log(estudiantes[0].nombre);
console.log(estudiantes[1].nombre);


// let estudiantesNombre = [];

// for (let i = 0; i < estudiantes.length; i++) {
//   estudiantesNombre.push(estudiantes[i].nombre);
    
// }


let estudiantesNombre =estudiantes.map(estudiante => estudiante.nombre)
console.log(estudiantesNombre);

// filtter(cb)

let estudiantesAprobados = estudiantes.filter(estudiante => estudiante.calificacion >10)

console.log(estudiantesAprobados);

let esrudiantesAprobadosNombre = estudiantesAprobados.map(estudiante => estudiante.nombre)
console.log(esrudiantesAprobadosNombre);


// reduce(cb(prey,current[i,arr])[ ,inicial])

let numero = [2,4,6,8,100];

let suma = numero.reduce((a,b) => a+b)
console.log(suma);

let max = numero.reduce((a,b) => a>b ? a : b)
console.log(max);


let promedio = numero.reduce((a,b,i,arr) => {
    
    b+=a;
    return i == arr.length -1 ? b/arr.length : b;
});

console.log(promedio);

console.log('promedio de estudiantes');

let estudiantesCalificacion = estudiantes.map(estudiante => estudiante.calificacion )
// console.log(estudiantesCalificacion);
let mejorEstudiante = estudiantes.reduce((a,b) => {
    a.calificacion> b.calificacion ?  ( a.nombre ,a.calificacion) : (a.nombre, b.calificacion)
  if ( a.calificacion> b.calificacion) {
      return {
          nombre: a.nombre,
          calificacion: a.calificacion
      }
  }else{
      return{
        nombre: b.nombre,
        calificacion: b.calificacion
      }
  }
  
})
console.log(mejorEstudiante);





 */