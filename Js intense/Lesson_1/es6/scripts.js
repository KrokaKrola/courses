/* global require Symbol document*/
import "babel-polyfill";
import $ from "jquery";
import "slick-slider";
import Timer from "./timer.js";
// console.log($(document));
let some = require("./some.js");

import {
    inc
} from "./other.js";

import {
    gen
} from "./gen.js";

import {
    wordsCount,
    getWords
} from "./gen_home";



// console.log(some);



window.addEventListener("load", function () {
    let timer = new Timer(this.document.querySelector(".timer1"), 10);
    window.console.log(timer);

    console.log(some);

    some.inc()
    some.inc()
    some.inc()
    some.inc()

    console.log(some);

    // console.log(cnt);

    inc();
    inc();
    inc();

    // other.inc();
    // other.inc();
    // other.inc();
    // other.inc();
    // other.inc();

    // console.log(other);

    let arr = [100, 200, 300];

    for (let num of arr) {
        console.log(num);
    }

    let forPasport = Symbol();

    let user = {
        firstName: "Name",
        lastName: "Last",
        [forPasport]: 4354535345434
    }


    console.log(user[forPasport]);

    for (let key in user) {
        console.log(`${key}: ${user[key]}`);
    }

    let someObj = {
        to: 10,
        [Symbol.iterator]: function () {
            let current = 0;
            let stop = this.to;
            return {
                next() {
                    if (current <= stop) {
                        return {
                            done: false,
                            value: current++
                        }
                    } else {
                        return {
                            done: true
                        }
                    }
                }
            }
        }
    }

    // for (let some of someObj) {
    //     console.log(some);
    // }


    let someGen = gen(1, 5);

    for (let some of someGen) {
        console.log(some);
    }

    // $(".test").slick({
    //     slidesToShow: 2,
    //     infinite: false,

    //     // the magic
    //     responsive: [{

    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 3,
    //             infinite: true
    //         }

    //     }, {

    //         breakpoint: 600,
    //         settings: {
    //             slidesToShow: 2,
    //             dots: true
    //         }

    //     }, {

    //         breakpoint: 300,
    //         settings: "unslick" // destroys slick

    //     }]
    // });

    let str = '     Всем   s   привет!   Ура  f   ура!       f     ';
    console.log(wordsCount(str))
    for (let some of getWords(str)) {
        console.log(some); // выводит 4 слова
    }
})