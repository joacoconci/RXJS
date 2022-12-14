import { asyncScheduler, scheduled } from 'rxjs';
/*
asyncScheduler no crea un observable, crea una subscripcion, lo que es un producto de un subscribe.



*/

//se pueden hacer estas dos funciones pero con el asyncScheduler
// setTimeout(() => {}, 3000);
// setInterval(() => {}, 3000);

//ejemplo setTimeout
const saludar = () => console.log('Hola mundo');
const saludar2 = (nombre) => console.log(`Hola ${nombre}`);

// asyncScheduler.schedule(saludar, 5000);
//se pasa la funcion, el tiempo en el que se ejecutara y luego el state o parametro de la funcion
// asyncScheduler.schedule(saludar2, 2000, 'Joaquin');

//ejemplo setInterval
const subs = asyncScheduler.schedule(
  function (state) {
    console.log('state', state);
    this.schedule(state + 1, 1000);
  },
  2000,
  0
);

asyncScheduler.schedule(() => subs.unsubscribe(), 6000);

// setTimeout(() => {
//   subs.unsubscribe();
// }, 6000);
