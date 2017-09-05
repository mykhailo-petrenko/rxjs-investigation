import { Observable } from 'rxjs';

export const source = Observable
    .fromEvent(document, 'mousemove')
    .map(e => ({
        x: e.clientX,
        y: e.clientY
    }))
    .filter(({x, y}) => Math.max(x,y) < 500)
    .debounceTime(200);

const circle = document.createElement('div');
circle.setAttribute('id', 'circle');
document.body.appendChild(circle);

export const onNext = ({x, y}) => {
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    console.log([x, y]);
}
