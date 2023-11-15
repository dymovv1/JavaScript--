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


/* --------------------------------------------------------------- */

// №2. Що ввів користувач?

// За допомогою браузерногої команди prompt() запросити користувача ввести будь-яке значення.

// Далі, в залежності від того, що ввів користувач, вивести відповідний тип даних за допомогою повідомлення You entered a {type}. Якщо визначити тип даних однозначно не можливо - виводимо повідомлення You entered a complex data.

// Нарпиклад, користувач ввів: 

// 18 -> You entered a number;
// smth different -> You entered a string;
// False -> You entered a boolean;
// smth 18 very True -> You entered a complex data;
// Будьте уважні! Зверніть увагу на те, в якому регістрі введено дані (lower/upper case) - False та false мають бути однаково визначені як тип boolean.

// При вирішенні цих задач також зверніть увагу на обробку виключень: якщо, на вашу думку, вони можуть виникнути - використовуйте відповідну та коректну конструкцію коду для цього.

function checkTheType() {
    let promptValueCheckType = prompt('Давайте перевіримо тип даних :) введіть якесь значення :');
    const digitPattern = /\d/;
    const complexPattern = /(?=.*\d)(?=.*[a-zA-Z])/; // Регулярний вираз для перевірки наявності цифр і букв

    if (complexPattern.test(promptValueCheckType)) {
        alert('You entered a complex data');
    } else if (promptValueCheckType.toLocaleLowerCase === 'true' || promptValueCheckType.toLocaleLowerCase === 'false') {
        alert('You entered a boolean');
    } else if (digitPattern.test(promptValueCheckType)) {
        alert('You entered a number');
    } else if (promptValueCheckType === '') {
        alert('Unknown data type (empty)');
    } else if (typeof promptValueCheckType === typeof String()) {
        alert('You entered a string');
    }


} 

checkTheType();




