import { interval, timer } from 'rxjs';

/*
ambos son asincronos 

interval: genera una secuencia de valores desde 0 hasta el infinito

timer: emite valores despues de una fecha especifica, despues de ese valor empieza a emitir 
los valores siguientes en un periodo de tiempo indicado


*/

const observer = {
  next: (val) => console.log('next:', val),
  complete: () => console.log('completo'),
};

const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);
const interval$ = interval(1000);

// const timer$ = timer(2000);

//es util cuando tenes una tarea que sabes cuando se tiene que ejecutar
const timer$ = timer(hoyEn5);

console.log('Inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');
