import { range, tap } from 'rxjs';
import { map } from 'rxjs/operators';

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((x) => console.log('antes', x)),
    map((val) => val * 10),
    tap((x) => console.log('despues', x))
  )
  .subscribe((val) => console.log('subs', val));
