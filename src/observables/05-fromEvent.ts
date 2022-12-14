import { fromEvent } from 'rxjs';

/* fromEvent:  permite crear Observables en base a un eventTarget.
    *Eventos del DOM 

toma los eventos emitidos por el scroll
fromEvent<Event>(document, 'scroll')

*/

const src1$ = fromEvent<PointerEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
  next: (val) => {
    console.log('next', val);
  },
};

/*Se puede desestructurar  */
src1$.subscribe(({ x, y }) => {
  console.log('X:', x, 'Y:', y);
});
src2$.subscribe((evento) => {
  console.log(evento.key);
});
