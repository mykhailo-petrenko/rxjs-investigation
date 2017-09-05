import { Observable } from 'rxjs';

import {source, onNext} from './archive/observableFromEvent';

source.subscribe(
    onNext,
    // value => console.log('value', value),
    e => console.error(e),
    () => console.log('COMPLETE')
);

