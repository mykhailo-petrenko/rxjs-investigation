import { Observable } from 'rxjs';

var numbers = [1,3,6,3,20];
// var source = Observable.from(numbers);

var source = Observable.create(observer => {
    var index = 0;

    (function produceValue() {
        observer.next(numbers[index++]);

        if (index < numbers.length) {
            setTimeout(produceValue, 500);
        } else {
            observer.complete();
        }
    })();
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
