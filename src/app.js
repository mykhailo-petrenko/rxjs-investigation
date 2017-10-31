import { Observable } from 'rxjs';

// import {source} from './archive/dealingWithErrors';
import {source, render} from './archive/flatMap';

const placeholder = document.getElementById('requestResult');

source
    .subscribe(
        data => {
            render(placeholder, data);
            console.log('data', data);
        },
        error => console.log('ERR', error),
        () => console.log("COMPLETE")
    );
