import { filter, of, range, from, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

// range(1, 10)
//   .pipe(filter((val) => val % 2 === 1))
//   .subscribe(console.log);

range(1, 10).pipe(
  filter((val, i) => {
    console.log('index', i);
    return val % 2 === 1;
  })
);

interface Personaje {
  tipo: string;
  nombre: string;
}
const personajes: Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'Batman',
  },
  {
    tipo: 'heroe',
    nombre: 'Robin',
  },
  {
    tipo: 'villano',
    nombre: 'Joker',
  },
];

// Como lo hice yo
// const onlyVillano$ = from<Personaje[]>(personajes);

// onlyVillano$
//   .pipe(
//     filter((val) => {
//       return val.tipo === 'villano';
//     })
//   )
//   .subscribe(console.log);

//Asi lo hace Fernando

from<Personaje[]>(personajes)
  .pipe(filter((p) => p.tipo !== 'heroe'))
  .subscribe(console.log);

const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map((event) => event.code),
  filter((code) => code === 'Enter')
);

keyup$.subscribe(console.log);
