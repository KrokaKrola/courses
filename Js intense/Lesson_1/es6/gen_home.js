export function wordsCount(str) {
    return wordsArray(str).length;
}

function wordsArray(str) {
    return str.split(" ").filter((val) => val !== "");
}

export function* getWords(str) {
    let array = wordsArray(str);
    for (let i = 0; i < wordsCount(str); i++) {
        yield array[i];
    }
}