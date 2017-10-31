import {Observable} from 'rxjs';

const button = document.getElementById('sendRequest');

export const click = Observable
    .fromEvent(button, 'click');

export const load = (url) => {
    return Observable.fromPromise(fetch(url).then(response => response.json()));
}

export const source = click
    .flatMap(e => load('/static/get.json'));

export const render = (element, list) => {
    const ul = document.createElement('ul');

    list.forEach(({id, name}) => {
        const li = document.createElement('li');
        li.innerText = `#${id}: ${name}`;
        ul.appendChild(li);
    });

    element.innerHTML = '';
    element.appendChild(ul);
}