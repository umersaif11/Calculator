let add = function(a,b) {
	return a+b;
};

let subtract = function(a,b) {
	return a - b;
};

let multiply = function(a,b) {
    return a * b;
};

let divide = function(a,b) {
	return a / b;
};

let firstNum;
let operator;
let secondNum;

let operation = function(firstNum,secondNum,operator){
    switch (operator){
        case '+':
            return add(firstNum,secondNum);
        case '-':
            return subtract(firstNum,secondNum);
        case '*':
            return multiply(firstNum,secondNum);
        case '/':
            return divide(firstNum,secondNum);
        default:
            return 'Invalid operator';
    }
}