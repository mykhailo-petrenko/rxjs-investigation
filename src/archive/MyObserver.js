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

export default MyObserver;