import { Observable } from 'rxjs';

// import {source} from './archive/dealingWithErrors';
import {source, render} from './archive/flatMap';

const placeholder = document.getElementById('requestResult');
const renderer = (data) => render(placeholder, data);

var published = source.share();

published.subscribe(
    renderer,
    error => console.log('ERR', error),
    () => console.log("COMPLETE")
);
published.subscribe(
    (data) => console.log('IMPUBLICHED', data),
    error => console.log('ERR', error),
    () => console.log("COMPLETE")
);

// published.connect();