import { interval, reduce, take, tap } from 'rxjs';
const numbers = [1, 2, 3, 4, 5];

const totalReducer = (acumulador: number, valorActual: number) => {
  return acumulador + valorActual;
};

const total = numbers.reduce(totalReducer, 0);
console.log('total', total);

interval(1000)
  //Take completa el observable  despues de la cantidad de veces que se especifica
  .pipe(take(4), tap(console.log), reduce(totalReducer))
  .subscribe({
    next: (val) => console.log('next:', val),
    complete: () => console.log('Complete'),
  });
