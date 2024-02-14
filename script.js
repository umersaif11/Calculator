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
//function which takes operator and two operands
let firstNum;
let operator;
let secondNum;
let operate = function(operator,firstNum,secondNum){
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
let displayValue; //to store the display-value for later use
//function to populate display when numbers are clicked
const container = document.getElementById('container');
const display = document.getElementById('display');
container.addEventListener('click',(event) => {
    if(event.target.matches('.operand')){
        displayValue = event.target.value;
        display.textContent = displayValue;
    }
});
