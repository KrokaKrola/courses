let sum = (a, b) => a + b;
let divide = (a, b) => {
    if (b == 0) {
        throw new Error('division by zero')
    }
    return a / b;
}

export function mathOp(a, b, sign) {
    switch (sign) {
        case "/":
            return divide(a, b);
        case "+":
            return sum(a, b);
    }
}