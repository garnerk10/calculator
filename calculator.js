let operand1 = 0;
let operand2 = 0;
let operator = '';
let isOperatorSelected = false;

const lgDisplay = document.getElementById("lg-display");
const smDisplay = document.getElementById("sm-display");
const clear = document.getElementById("clear");
const numButtons = document.querySelectorAll("[data-number]");
const opButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById("equals");
const decPoint = document.getElementById("point");

const add = (num1, num2) => {
    return num1 + num2
};

const subtract = (num1, num2) => {
    return num1 - num2
};

const multiply = (num1, num2) => {
    return num1 * num2
};

const divide = (num1, num2) => {
    return num1 / num2
};

const operate = (operator, operand1, operand2) => {
    let a = Number(operand1);
    let b = Number(operand2);
    switch (operator){
        case '+':
            return roundNumber(add(a, b));
        
        case '-':
            return roundNumber(subtract(a, b));
        
        case 'x':
            return roundNumber(multiply(a, b));
        
        case '/':
            return roundNumber(divide(a, b));
    };
};

const appendDigit = button => {
    lgDisplay.innerText += button.target.textContent;
};

const selectOperator = button => {
    if(isOperatorSelected === false){
        isOperatorSelected = true;
        operand1 = lgDisplay.textContent;
        operator = button.target.textContent;
        lgDisplay.innerText = '';
        smDisplay.innerText = `${operand1} ${button.target.textContent}`;
    } else if(isOperatorSelected === true && lgDisplay !== ''){
        operand2 = lgDisplay.textContent;
        smDisplay.innerText = `${operate(operator, operand1, operand2)} ${button.target.textContent}`;
        operand1 = operate(operator, operand1, operand2);
        lgDisplay.innerText = '';
        operator = button.target.textContent;

    }
};

numButtons.forEach(button => {
    button.addEventListener('click', appendDigit)
});

opButtons.forEach(button => {
    button.addEventListener('click', selectOperator)
});


const equalsFunction = () => {
    if(isOperatorSelected === true){
        isOperatorSelected = false;
        operand2 = lgDisplay.textContent;
        smDisplay.innerText += ` ${operand2}`;
        lgDisplay.innerText = `${operate(operator, operand1, operand2)}`
    };
};

equalsButton.addEventListener('click', equalsFunction);

const clearFunction = () => {
    lgDisplay.innerText = '';
    smDisplay.innerText = '';
    operand1 = 0;
    operand2 = 0;
    operator = '';
    isOperatorSelected = false;
};

clear.addEventListener('click', clearFunction);

const point = () => {
    lgDisplay.innerText += "."
};

decPoint.addEventListener('click', point);

const roundNumber = num => {
    return Math.round(num * 1000) / 1000;
}
