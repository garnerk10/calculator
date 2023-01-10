let operand1 = 0;
let operand2 = 0;
let operator = '';
let isOperatorSelected = false;

const lgDisplay = document.getElementById("lg-display");
const smDisplay = document.getElementById("sm-display");
const clear = document.getElementById("clear");
const numButtons = document.querySelectorAll("[data-number]");
const opButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById("equals")

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
            return add(a, b);
        
        case '-':
            return subtract(a, b);
        
        case 'x':
            return multiply(a, b);
        
        case '/':
            return divide(a, b);
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

    };
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
