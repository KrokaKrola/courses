import 'babel-polyfill';

import {
    wordsCount,
    getWords
} from './words';

let str = '  Всем 12 привет! Ура ура! ';

window.addEventListener('load', function () {
    this.console.log(wordsCount(str));

    for (let some of getWords(str)) {
        this.console.log(some);
    }

});