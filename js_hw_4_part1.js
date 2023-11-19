'use strict'

// №1. FizzBuzz game

// За допомогою браузерногої команди prompt() запросити користувача ввести будь-яке число.

// Далі, в залежності від того, яке число ввів користувач, вивести відповідне повідомлення:

// Fizz, якщо число ділиться на 3 без залишку;
// Buzz, якщо число ділиться на 5 без залишку;
// FizzBuzz, якщо число одночасно ділиться на 3 та на 5 без залишку;
// Non Divisible, якщо число не ділиться на 3 чи на 5.

// document.addEventListener('DOMContentLoaded', function () {
//     document.body.style.background = 'black';
// });

function numberDivisible () {

    const promptNumber =  prompt('Введіть будь ласка число!?');
    const promptValue = Number(promptNumber); 
    console.log(promptValue) 
    console.log(typeof promptValue); 


    if (promptValue % 3 === 0 && promptValue % 5 === 0) {
        alert('FizzBuzz');
    } else if (promptValue % 3 === 0) {
        alert('Fizz');
    } else if (promptValue % 5 === 0) {
        alert('Buzz');
    } else if (!(promptValue % 3 === 0 && !promptValue % 5 === 0)) {
        alert('Non Divisible');
    }   
}

numberDivisible();