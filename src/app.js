import { Observable, Observer } from 'rxjs';

var numbers = [1,3,6,3,20];
var source = Observable.from(numbers);

source.subscribe(
    value => console.log('value', value),
    e => console.error(e),
    () => console.log('COMPLETE')
);

class MyObserver {
    next(value) {
        console.log('value: ', value);
    }

    error(e) {
        console.error(e);
    }

    complete() {
        console.log('COMPLETE');
    }
}

// source.subscribe(new MyObserver);
