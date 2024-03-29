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

let operate = function(op,a,b){
    switch (op){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            if(b === 0){
                return "Error: division by zero";
            } else{
                return divide(a, b);
            }
        default:
            return 'Invalid operator';
    }
}
let operator;
let currentOperand = '';
let previousOperand = null;
let previousResult = null;

const container = document.getElementById('container');
const display = document.getElementById('display');
container.addEventListener('click',(event) => {
    if (event.target.matches('.operand')){
        currentOperand += event.target.value;
        display.textContent = currentOperand;

} else if (event.target.matches('.operator') && event.target.value !== '='){
    if (previousOperand !== null){
        previousResult = operate(operator, previousOperand, parseFloat(currentOperand));
        previousOperand = previousResult;
        display.textContent = previousResult;
    } else {
        previousOperand = parseFloat(currentOperand);
    }
    currentOperand = '';
    operator = event.target.value;

} else if (event.target.matches('.operator') && event.target.value === '='){
    if(currentOperand && (previousOperand !== null)){
        let result = operate(operator, previousOperand, parseFloat(currentOperand));
        display.textContent = result.toFixed(3);
        currentOperand = '';
        previousResult = null;
        operator = null;
        previousOperand = null;
    } else {
        display.textContent = 'Insufficient Operands';
        currentOperand = '';
        previousResult = null;
        operator = null;
        previousOperand = null;
    }

} else if(event.target.matches('#clear')) {
    display.textContent = '0';
    currentOperand = '';
    previousOperand = null;
    previousResult = null;
    operator = null;
}
});



       
    
    
 
