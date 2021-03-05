// Date
// requiere ser instanciado para usarse

/* let date = new Date();
let date2 = new Date();
date.setFullYear(1980);

console.log(date); 
console.log(date.getTime());
 */

// metodos

/* ejercicio 1 imprimir 
la fecha y hora en nuestro formato */

// CODIGO COMENTADO PARA REVISIÓN DE ZONA HORARIA
/* 
let date = new Date();

let getStringDay = (date) => {
    let days = [
        "Domungo",
        "Lunes",
        "martes ",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
    ];
    return days[date.getDay()];
};

let getStringMonth = (date) => {
    let months = [
        "enero",
        "febrero",
        "marzp ",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "setiembre",
        "octubre",
        "noviembre",
        "diciembre",
    ];
    return months[date.getMonth()];
};

let hourleadingZero = (num) => ("0" + num).slice(-2);

let getAmPmHour = (date) => {
    let hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        amPm = hours >= "12" ? "pm" : "am";
    if (amPm === "pm") hours -= 12;
    return `${hourleadingZero(hours)}:${hourleadingZero(
        minutes
    )}:${hourleadingZero(seconds)}${amPm}`;
};

let dateFormate = `${getStringDay(date)}  ${date.getDate()} de ${getStringMonth(
    date
)} del ${date.getFullYear()} ${getAmPmHour(date)}`;

console.log(dateFormate); */

// definir fecha y hora

// new date(año,mes,día,hora,minutos,segurdos,milisegundos)
// new Date(String)

// console.log(new Date(1980,1,4,1,38,20)); 
// console.log(new Date('Feb 16 1980 01:38:20 GMT-0500'));


// operaciones con fechas


// CODIGO COMENTADO N2

/* 
let msToDateObj = ms =>{


    let seconds = Math.floor(ms/1000 ),
     minutes = Math.floor(ms/(1000 *60) ),
    hours = Math.floor(ms/(1000  * 60*60)),
    days = Math.floor(ms/(1000  * 60* 60 *24)),
    months = Math.floor(ms/(1000  * 60* 60 *24 *30)),
    years = Math.floor(ms/(1000  * 60*6 *24 * 3650));

return {years,months,days,hours,minutes,seconds}

};

let msToExpandObj = ms =>{
    let years = msToDateObj(ms).years,
    days = msToDateObj(ms).days % 365,
    hours = msToDateObj(ms).hours % 24,
    minutes = msToDateObj(ms).minutes % 60,
    seconds = msToDateObj(ms).seconds % 60;
    
    return {years,days,hours,minutes,seconds}
};

let date =new Date('Mar 28 2017 12:45:17 GMT-0500'),
date2 = new Date('Feb 04 1980 01:38:20 GMT-0500');

console.log(date);
console.log(msToExpandObj(date - date2)); */

// convertir milisegundos  a fecha entendible

// horarios y fechas internaciones

// CIDIGO PARA COMENTAR N3

// let date = new Date('Dec 26 2020 19:00:00 GMT-0500');
// console.log(date.getHours());
// console.log(date.getUTCHours ());
// console.log(date.getTimezoneOffset ());

// let hours = date.getHours(),
// utcHours = date.getUTCHours(),
// diffHours =new Date().getTimezoneOffset() / 60;

// console.log(utcHours -diffHours);












