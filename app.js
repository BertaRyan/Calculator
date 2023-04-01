let firstNum = "";
let secondNum = "";
let operator = ""




function add(firstNum, secondNum) {
    return firstNum += secondNum


}

function subtract(firstNum, secondNum) {
    return firstNum -= secondNum


}

function multiply(firstNum, secondNum) {
    return firstNum *= secondNum


}

function divide(firstNum, secondNum) {
    return firstNum /= secondNum


}




let clear = document.querySelector('.clear')
let display = document.querySelector('.display')
let numbers = document.querySelectorAll('.numbers')
let operators = document.querySelectorAll('.operator')
let equal = document.querySelector('.equal')



clear.addEventListener('click', function () {
    display.textContent = ""
    firstNum = ""
    secondNum = ""
})


equal.addEventListener("click", function () {
    calculate();

    display.textContent = firstNum
})

numbers.forEach(number => {
    number.addEventListener('click', function (e) {
        handleNum(e.target.textContent)
        display.textContent = firstNum
    })
})

operators.forEach((op) => op.addEventListener('click', function (e) {
    operate(e.target.textContent)
    display.textContent = firstNum + "" + operator;
    secondNum.textContent = firstNum
}));





function handleNum(num) {

    if (firstNum.length <= 6) {
        firstNum += num;
    }
}



function operate(op) {
    operator = op;
    secondNum = firstNum;
    firstNum = "";
}


function calculate() {

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);


    if (operator === "+") {
        add(firstNum.textContent, secondNum.textContent)

    } else if (operator === "x") {
        multiply()

    } else if (operator === "/") {
        divide()

    } else if (operator === "-") {
        subtract()

    }

    console.log(firstNum)

    secondNum = roundNumber(secondNum)
    secondNum = secondNum.toString();
    firstNum = firstNum.toString()


}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000;
}









