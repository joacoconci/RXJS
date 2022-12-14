import { interval, Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: (value) => console.log('next:', value),
  error: (error) => console.warn('error :', error),
  complete: () => console.info('completado'),
};

//Genera numeros random cada 1ms
//Cold Observable
const intervalo$ = new Observable<number>((subs) => {
  const intervalID = setInterval(() => {
    subs.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(intervalID);
    console.log('intervalo destruido');
  };
});

//Subject (tipo especial de observables)
/*CARACTERISTICAS: 
1-casteo multiple (muchas subs sujetas al mismo subject y distribuye la misma info 
  donde se subscribe)
2- Tambien es un observer
3- se puede manejar next, error y complete  

*/
const subjetc$ = new Subject();
const subscription = intervalo$.subscribe(subjetc$);

//Subscripcion
/*en vez de subscribirme al intervalo me subscribo al subject */

const subs1 = subjetc$.subscribe(observer);
const subs2 = subjetc$.subscribe(observer);

/* El problema de hacer este subscribe asi es que se generan numeros
 distintos en cada subscripcion */

// const subs1 = intervalo$.subscribe((rnd) => console.log('subs1', rnd));
// const subs2 = intervalo$.subscribe((rnd) => console.log('subs2', rnd));

//Cuando la data es producida por el observable en si mismo, es considerado "Cold Observable"
//Pero cuando es producida FUERA delobservable se llama "Hot Observable"

//Hot Observable
setTimeout(() => {
  subjetc$.next(10);

  subjetc$.complete();
  subscription.unsubscribe();
}, 3500);
