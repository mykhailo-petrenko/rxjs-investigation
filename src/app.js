import { Observable, Observer } from 'rxjs';

var numbers = [1,3,6,3,20];
var source = Observable.from(numbers);

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

source.subscribe(new MyObserver);

source.subscribe(new MyObserver);