document.querySelector(".number1")
document.querySelector(".number2")
var resultado = document.querySelector("p")


function sum() {
    resultado.innerHTML = parseInt(number1.value) + parseInt(number2.value)

}
function sub() {
    resultado.innerHTML = parseInt(number1.value) - parseInt(number2.value)

}

function multiply() {
    resultado.innerHTML = parseInt(number1.value) * parseInt(number2.value)

}

function divide() {
    resultado.innerHTML = parseInt(number1.value) / parseInt(number2.value)

}
function resetNumber() {

    resultado.innerHTML = " = "
}
