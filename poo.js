/* // alert('a')
// clase plantilla a partir de la cual se crean objetos 
// instancia el llamado de la clase a partir del objeto creado
// constructor una funcion que se ejecuta automaticamene al instanciar una clase 
// propiedades valores
// metodos funciones

// var Profesor =  function (nombre, apellido, pais ) {
//     this.nombre=nombre;
//     this.apellido=apellido;
//     this.pais=pais;
// }


// var col = new Profesor('jon','mircha','mexico');
// var fil = new Profesor('alexis','lozada','colombia');

// console.log(col);
// console.log(fil);


// const jon = {
//     nombre : 'jon',
//     apellido : 'mircha',
//     cursos : ['node.js' , 'react.js'],
//     pais : 'mexico'
// }

// const alexis = {
//     nombre : 'alexis',
//     apellido : 'lozada',
//     cursos : ['sql' , 'go'],
//     pais : 'colombia'
// }

// console.log(jon);
// console.log(alexis);
// ES6

class Persona{
    constructor(nombre,apellido,pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
        this.nombreCompleto = `${nombre} ${apellido}` ;
    }

    saludar(){
        return `hola soy ${this.nombreCompleto} y vivo en ${this.pais}`
    }

    static describirPersonas(persona){
        return `esta persona se llama ${persona.nombreCompleto} y es de  ${persona.pais}`
    }
}

class  Profesor   extends Persona{
    constructor(nombre,apellido,pais,curso){
        super(nombre,apellido,pais);
        this.curso = curso;
    }
    invitarAlCurso(){
        return `hola soy ${this.nombreCompleto} y te invito al curso ${this.curso}  nos vemos en clase  `
    }
    


}

    const ne = new Persona('jon', 'mircha', 'mexico');
    const ne2 = new Persona('alexis', 'lozada', 'colombia');
    // console.log(ne);
    // console.log(ne2);
    const daniel = new Profesor('Daniel','Romero','Colombia','PHP desde cero')
    console.log(daniel.invitarAlCurso());

    console.log(Persona.describirPersonas(ne2)); */