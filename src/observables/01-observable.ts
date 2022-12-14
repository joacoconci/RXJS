import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
  next: (value) => console.log('siguiente [next]:', value),
  error: (error) => console.warn('error [obs]:', error),
  complete: () => console.info('completado[obs]'),
};

const obs$ = new Observable<string>((subs) => {
  subs.next('Hola');
  subs.next('Mundo');

  subs.next('Hola');
  subs.next('Mundo');

  //forzar Error
  //   const a = undefined;

  //   a.nombre = 'Fernando';

  // lo que se incluya despues del complete no se ejecutara
  subs.complete();

  subs.next('Hola');
  subs.next('Mundo');
});

obs$.subscribe(observer);

// obs$.subscribe(
//   (valor) => console.log('next:', valor),
//   (error) => console.warn('error:', error),
//   () => console.info('Completado')
// );
