let add = function(a,b) {
	return a + b;
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
let displayValue; //to store the display-value for later use
let isSecondNum = 'false';

//function which takes operator and two operands
let operate = function(op,a,b){
    switch (op){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return 'Invalid operator';
    }
}

//function to populate display when numbers are clicked
const container = document.getElementById('container');
const display = document.getElementById('display');
container.addEventListener('click',(event) => {
    if(event.target.matches('.operand') && isSecondNum==='false') {
        displayValue = event.target.value;
        display.textContent = displayValue;
    } else if(event.target.matches('#clear')) {
        display.textContent = '0';
    }
});
