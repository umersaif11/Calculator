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
    
});
