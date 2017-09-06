import { Observable } from 'rxjs';

export const source = Observable.merge( // onErrorResumeNext
    Observable.of(1),
    Observable.throw("asdasd"),
    Observable.from([2, 3, 4]),
    Observable.of(5)
)
.catch(e => {
    console.log('caught', e);
    return Observable.of(200);
});