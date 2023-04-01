let firstNum = "";
let secondNum = "";
let operator = ""




function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}
let clear = document.querySelector('.clear')
let display = document.querySelector('.display')
let numbers = document.querySelectorAll('.numbers')
let operators = document.querySelectorAll('.operator')
let equal = document.querySelector('equal')



clear.addEventListener('click', function () {
    display.textContent = ""
})




numbers.forEach(number => {
    number.addEventListener('click', function (e) {
        handleNum(number.textContent)
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', function () {
        display.append(operator.innerHTML)
    })
})


function handleNum(num) {

}



function operate(x, y) {
    if (operators.innerHTML == "+") {
        add(x, y);
    } else if (operators.innerHTML == "-") {
        subtract(x, y)
    } else if (operators.innerHTML == "x") {
        multiply(x, y)
    } else {
        divide(x, y)
    }
}

// equal.addEventListener("click", function(){
//    return operate()
// })



function calculate() {

}









