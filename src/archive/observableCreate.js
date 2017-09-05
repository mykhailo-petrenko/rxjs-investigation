import { Observable } from 'rxjs';

const numbers = [1,3,6,3,20];

// const source = Observable.from(numbers);

const source = Observable.create(observer => {
    var index = 0;

    (function produceValue() {
        observer.next(numbers[index++]);

        if (index < numbers.length) {
            setTimeout(produceValue, 100);
        } else {
            observer.complete();
        }
    })();
})
.map(value => value * -1)
.filter(value => value%2===0);

export default source;