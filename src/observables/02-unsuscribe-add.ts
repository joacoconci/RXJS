import { Observable, Observer } from 'rxjs';

const observer: Observer<number> = {
  next: (value) => console.log('next:', value),
  error: (error) => console.warn('error :', error),
  complete: () => console.info('completado'),
};

const intervalo$ = new Observable<number>((subscriber) => {
  //crear contador
  let contador = 0;
  const interval = setInterval(() => {
    //cada segundo
    contador++;
    subscriber.next(contador);
    console.log('intervalo');
  }, 1000);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  //se agrega este return, si no el  timeout seguira realizando la accion
  //por mas que se haya echo el unsubscribe
  return () => {
    clearInterval(interval);
    console.log('intervalo destruido');
  };
});

const subscripcion1 = intervalo$.subscribe(observer);
const subscripcion2 = intervalo$.subscribe(observer);

//Encadenar subscribciones de la subscripcion original
//De esta formas solo se hace el unsuscribe solo del intervalo original y se cancelan
//los demas
subscripcion1.add(subscripcion2);

setTimeout(() => {
  // subscripcion1.unsubscribe();
  // subscripcion2.unsubscribe();

  console.log('completado timeout');
}, 3000);
