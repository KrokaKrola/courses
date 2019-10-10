function cleanStr(str){
    return str.trim().replace(/  +/g, ' ');
}

function wordsCount(str){
    return cleanStr(str).split(' ').length;
}

function* getWords(str){
    let text = cleanStr(str) + " ";
    let start = 0;
    let current = text.indexOf(' ', start);

    while(current !== -1){
        yield text.substr(start, current - start);
        start = current + 1;
        current = text.indexOf(' ', start);
    }
}

export {wordsCount, getWords};