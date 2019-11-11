import 'babel-polyfill';
import Timer from './lesson2/timer';

import some from "./lesson2/getters";
// console.log(some);
// console.log(some.cnt);
// some.cnt = 5;
// console.log(some.cnt);
// some.cnt = -10;
// console.log(some.cnt);
// some.cnt = 100;
// console.log(some.cnt);

/* 
let some = {
    i: 2
};

function double(n, m) {
    return this.i * this.i * n + m;
}

let doubleFunction = (n) => {
        //this equal to doubleFunction
}

let doubleFF = (function (n, m) {
    //arrow function 
}).bind(this);

console.log(double.call(some, 5, 2));
console.log(double.apply(some, [5, 2]));

let contextDouble = double.bind(some);

console.log(contextDouble(6, 4));

let timer = new Timer(document.querySelector(".timer1"), 10);

let carringExp = double.bind(some, 3);

carringExp(10);

for (var index = 0; index < 5; index++) {
    window.setTimeout(function () {
        console.log(index)
    }, index * 200);
} 
*/
/* 
import data from './lesson2/proxy';

console.log(data.a);
data.a = 5;
console.log(data.a);

import VueGetters from './lesson2/vue-getters';
import VueProxy from './lesson2/vue-proxy';

let vg = new VueGetters({
    el: ".elem1",
    data: {
        clicks: 1,
        name: "Some!"
    },
    template: `<div><h2>{{ clicks }}</h2>{{ name }}</div>`
});

setTimeout(() => {
    vg.data.clicks = 5;
}, 2000);

let vp = new VueProxy({
    el: ".elem2",
    data: {
        clicks: 1,
        name: "Some!"
    },
    template: `<div><h2>{{ clicks }}</h2>{{ name }}</div>`
});

document.querySelector(".elem2").addEventListener("click", function () {
    vp.data.clicks++;
}) */


import {
    watchObj,
    EmailParser
} from './lesson2/hw';

let parser = new EmailParser('info@ntschool.ru');
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);

parser.email = 'some@nz';
console.log(parser.name);
console.log(parser.domain);
console.log(parser.isCorrect);

let div = document.createElement('div');
document.body.appendChild(div);

let cleverDiv = watchObj(div, function (prop, val) {
    console.log(prop, val);
});

cleverDiv.innerHTML = '<strong>HTML</strong><em>Changed</em>';

cleverDiv.style.color = 'red';

cleverDiv.querySelector('em').style.color = 'green';

cleverDiv.classList.add("some");