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
            return divide(a, b);
        default:
            return 'Invalid operator';
    }
}

const container = document.getElementById('container');
const display = document.getElementById('display');
container.addEventListener('click',(event) => {
    //function to populate display when 1st-number clicked
    if(event.target.matches('.operand') && isSecondNum === 'false') {
        displayValue = event.target.value;
        display.textContent = displayValue;
        //firstnum-value is stored
        firstNum = parseFloat(displayValue);
        //switch ready to store 2nd-num
        isSecondNum = 'true';
    } 
    //function to store operator
    if(event.target.matches('.operator')){
        operator = event.target.value;
        //clear display for 2nd-num;
    }
});
//else if(event.target.matches('#clear')) {
//    display.textContent = '0';
//}