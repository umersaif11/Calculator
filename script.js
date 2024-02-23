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
//to store the display-value for 1st,2nd num
let displayValue; 
//issecondnum var to use as a swtich
//to store 1st & 2nd num
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
            if(b === 0){
                return "Error: division by zero";
            } else{
                return divide(a, b);
            }
        default:
            return 'Invalid operator';
    }
}

const container = document.getElementById('container');
const display = document.getElementById('display');
container.addEventListener('click',(event) => {
    //function to store & display 1st-num
    if(event.target.matches('.operand') && isSecondNum === 'false') {
        displayValue = event.target.value;
        display.textContent = displayValue;
        //var-firstnum-value is stored
        firstNum = parseFloat(displayValue);
    } 
    //function to store operator
    if(event.target.matches('.operator') && event.target.value !== '='){
        operator = event.target.value;
        //switch ready to store 2nd-num
        isSecondNum = 'true';
    }
    //function to store & display 2nd num
    if(event.target.matches('.operand') && isSecondNum === 'true'){
        displayValue = event.target.value;
        display.textContent = displayValue;
        //var-secondNum-value is stored
        secondNum = parseFloat(displayValue);
    }
    //function to show results of caculation
    if(event.target.matches('.operator') && event.target.value === '='){
        let result = operate(operator,firstNum,secondNum);
        displayValue = result;
        display.textContent = displayValue;
        firstNum = secondNum = null;
        operator = null;
        isSecondNum = 'false';
    }
    if(event.target.matches('#clear')) {
        display.textContent = '0';
    }
});
