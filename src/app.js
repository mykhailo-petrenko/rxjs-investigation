import { Observable } from 'rxjs';

var numbers = [1,3,6,3,20];
// var source = Observable.from(numbers);

var source = Observable.create(observer => {
    observer.next(1);
    observer.next(2);
    observer.next(4);

    // observer.error("Some error :(");

    observer.next(6);

    observer.complete();
});

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

source.subscribe(new MyObserver);
