import { fromEvent, map, tap } from 'rxjs';
const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis orci eget tincidunt efficitur. Donec tempor lorem a varius ullamcorper. Pellentesque finibus tellus ante, at auctor metus placerat faucibus. Pellentesque luctus sapien nunc, egestas aliquam est faucibus ac. Proin magna leo, scelerisque non pulvinar eget, congue a nisi. Mauris varius mauris non lobortis bibendum. Maecenas condimentum nisi sit amet leo vulputate, pellentesque pharetra erat pretium. Phasellus a augue erat. Pellentesque aliquam ligula urna, mollis fermentum mi dapibus in. Ut tempus efficitur enim, vitae tempus nibh porttitor in. Nunc sodales massa sollicitudin, elementum sapien vitae, aliquet est.
<br/><br/>
Ut in nibh eu felis vulputate tincidunt cursus non orci. Donec tortor mi, convallis sit amet lectus quis, faucibus eleifend mauris. Nam blandit enim a rhoncus sagittis. Donec mattis justo non nisi dapibus, sed malesuada mauris faucibus. Aenean ultricies congue turpis, nec efficitur ex volutpat vitae. Mauris aliquet mi ut metus convallis, quis faucibus sem commodo. Proin dictum metus eget odio porttitor sagittis. Proin interdum, nunc vulputate mattis finibus, massa massa feugiat nisi, sit amet faucibus sapien augue quis neque. Fusce pellentesque sapien dolor, vel aliquam ex maximus sed. Suspendisse at augue non dui posuere sodales vel ac nulla. Integer felis elit, sollicitudin vel aliquet ac, dictum gravida ante. Duis libero purus, porta eu interdum non, ornare vitae felis. Nunc lacinia risus id vehicula sollicitudin. Donec fringilla vel erat sit amet laoreet. Donec ac eros tincidunt, fermentum magna vel, aliquet tortor.
<br/><br/>
Vivamus quis turpis vel sapien tempor vestibulum. Phasellus convallis lacus non velit tristique, nec bibendum tellus venenatis. Sed sed aliquam urna. Phasellus auctor ac dolor eu pharetra. Vivamus eleifend metus lacus, nec iaculis ante finibus nec. Nam id purus eu tortor ultricies pretium eget vitae est. Duis aliquet risus in luctus tincidunt. Suspendisse a orci at mi pretium elementum. Morbi nec cursus lacus, quis vehicula lacus. Aliquam blandit metus lectus, sed venenatis sapien suscipit ut. Sed viverra venenatis purus vel rutrum. Pellentesque et interdum diam. Proin iaculis sit amet quam a fermentum.
<br/><br/>
Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras dignissim leo eget ex elementum hendrerit. Pellentesque et tempor ligula. Mauris ultrices enim ac hendrerit lobortis. In vitae erat vel nulla fringilla dapibus. Curabitur tempus erat et nibh fringilla rhoncus. Integer cursus, enim ut cursus elementum, nulla ante consequat justo, id elementum orci enim vitae nisi.
<br/><br/>
Etiam mollis justo ac odio vulputate, ac commodo diam consequat. Cras ac dictum dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pulvinar vitae purus vitae pretium. Morbi nibh lacus, vehicula tincidunt libero eu, faucibus pellentesque magna. Phasellus consequat, quam id fermentum fermentum, libero dui faucibus nunc, ac ullamcorper enim ipsum vitae lorem. Phasellus in sodales libero. In scelerisque eros metus, a vehicula elit bibendum et. Nulla facilisi. Cras congue elementum venenatis. Vestibulum auctor sagittis lectus ac tempor.

<br/><br/>
Etiam mollis justo ac odio vulputate, ac commodo diam consequat. Cras ac dictum dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pulvinar vitae purus vitae pretium. Morbi nibh lacus, vehicula tincidunt libero eu, faucibus pellentesque magna. Phasellus consequat, quam id fermentum fermentum, libero dui faucibus nunc, ac ullamcorper enim ipsum vitae lorem. Phasellus in sodales libero. In scelerisque eros metus, a vehicula elit bibendum et. Nulla facilisi. Cras congue elementum venenatis. Vestibulum auctor sagittis lectus ac tempor.
<br/><br/>
Etiam mollis justo ac odio vulputate, ac commodo diam consequat. Cras ac dictum dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pulvinar vitae purus vitae pretium. Morbi nibh lacus, vehicula tincidunt libero eu, faucibus pellentesque magna. Phasellus consequat, quam id fermentum fermentum, libero dui faucibus nunc, ac ullamcorper enim ipsum vitae lorem. Phasellus in sodales libero. In scelerisque eros metus, a vehicula elit bibendum et. Nulla facilisi. Cras congue elementum venenatis. Vestibulum auctor sagittis lectus ac tempor.
<br/><br/>
Etiam mollis justo ac odio vulputate, ac commodo diam consequat. Cras ac dictum dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam pulvinar vitae purus vitae pretium. Morbi nibh lacus, vehicula tincidunt libero eu, faucibus pellentesque magna. Phasellus consequat, quam id fermentum fermentum, libero dui faucibus nunc, ac ullamcorper enim ipsum vitae lorem. Phasellus in sodales libero. In scelerisque eros metus, a vehicula elit bibendum et. Nulla facilisi. Cras congue elementum venenatis. Vestibulum auctor sagittis lectus ac tempor.`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//funcion que haga el calculo
const porcentajeScroll = (event) => {
  const { scrollTop, scrollHeight, clientHeight } =
    event.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

//Streams

const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  // map((event) => porcentajeScroll(event))
  map(porcentajeScroll),
  tap(console.log)
);

progress$.subscribe((procentaje) => {
  progressBar.style.width = `${procentaje}%`;
});
