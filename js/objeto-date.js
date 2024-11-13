// ! Prueba de objeto date

// const fecha = new Date();

// // console.log(fecha)

// // console.dir(fecha)

// console.log(fecha.getDate())

// console.log(fecha.getDay())

// console.log(fecha.getMonth())

// console.log(fecha.getFullYear())

// console.log(fecha.getMinutes())

// console.log(fecha.getTime())


// /* Posibilidades con fecha */

// const hora = fecha.getHours();
// const minutos = fecha.getMinutes();
// const segundos = fecha.getSeconds();

// const mes = fecha.getMonth() +1;
// const dia = fecha.getDate();
// const year = fecha.getFullYear();


// console.log(`Fecha actual: ${dia}/${mes}/${year}`)
// console.log(`Hora actual: ${hora}:${minutos}:${segundos}`)


// ! Ejercicio de reloj

let nombresDiasSemana= ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
let nombresMes= ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

function setClock(){
    const fecha= new Date()

    const mes= fecha.getMonth();
    const diaSemana = fecha.getDate()


    let hora= fecha.getHours()<10 ? "0" + fecha.getHours(): fecha.getHours();
    let minutos= fecha.getMinutes()<10 ? "0" + fecha.getMinutes() : fecha.getMinutes(); 
    let segundos= fecha.getSeconds()<10 ? "0" + fecha.getSeconds() : fecha.getSeconds();

    const horaHTML= document.getElementById("hora");
    const minutosHTML= document.getElementById("minutos")
    const segundosHTML= document.getElementById("segundos")
    horaHTML.innerText= hora;
    minutosHTML.innerText= minutos;
    segundosHTML.innerText= segundos;

    const nombreDiaSemana= nombresDiasSemana[diaSemana]
    const nombreMes= nombresMes[mes]
    const dia= fecha.getDate();
    const year= fecha.getFullYear();
    const dateHTML= document.getElementById("date");

    dateHTML.innerText = `Bienvenido/a, \n Hoy es ${nombreDiaSemana} ${dia} de ${nombreMes} del ${year}`;
}
// ! Esta es una opcion
// function formatClockValue(value){
//     if(value < 10){
//         return "0" + value
//     }
//     return value;
// }

setClock();

setInterval(()=> {
    setClock();
}, 100)


// setTimeout(()=> {
//     alert("Este alert se ejecuto 10 segundos despues")
// }, 3000)

// ? intervalo

setInterval(()=> {
    const i=0;
    console.log("set Interval", i+1);
}, 3000)