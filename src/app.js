import { Observable } from 'rxjs';

import {source} from './archive/dealingWithErrors';

source.subscribe(
    value => console.log(value),
    e => console.error(e),
    () => console.log('COMPLETE')
);

