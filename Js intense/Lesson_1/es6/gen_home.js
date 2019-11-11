export function wordsCount(str) {
    return cleanStr(str).split(" ").length;
}

function cleanStr(str) {
    return str.trim().replace(/  +/g, " ")
}

export function* getWords(str) {
    let newStr = cleanStr(str) + " ";
    let current = 0;
    let spaceIndex = newStr.indexOf(" ", current);

    while (spaceIndex !== -1) {
        yield newStr.slice(current, spaceIndex);
        current = spaceIndex + 1;
        spaceIndex = newStr.indexOf(" ", current);
    }

    // for (let i = 0; i < newStr.length; i++) {
    //     if (newStr[i] === " ") {
    //         yield newStr.slice(spaceIndex, i);
    //         spaceIndex = i + 1;
    //     }
    // }

}