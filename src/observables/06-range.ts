import { asyncScheduler, of, range } from 'rxjs';
/* 
range: crea un observable que emite una secuencia de numeros en base a un rango
*/
const src$ = range(1, 5, asyncScheduler);

console.log('inicio');
src$.subscribe(console.log);
console.log('fin');
