'use strict'
// №2 Сума та добуток діапазону чисел
// За допомогою браузерної команди prompt() почергово запросити у користувача 2 різних числа. В залежності від того, що ввів користувач:

// Якщо будь-яке введене значення не є числом - повторити запит на введення даних з текстом Only numbers, please;
// Якщо обидва значення числові - вивести добуток всіх парних чисел та суму всіх не парних чисел у заданому діапазоні. 
// Діапазон - числа між значеннями, що їх ввів користувач, включаючи самі значення. Вивід відформатувати з використанням повідомлень 
// Сума = {значення суми} та Добуток = {значення добутку} (фігурні дужки самі по собі не потрібні, тут лиш для відображення форматування).
// Приклади:

// Введено значення 5 та 15, результат роботи програми: Сума = 60 (5 + 7 + 9 + 11 + 13 + 15), Добуток = 80640 (6 * 8 * 10 * 12 * 14)
// Введено значення 20 та 7, результат роботи програми: Сума = 91 (7 + 9 + 11 + 13 + 15 + 17 + 19), Добуток = 77414400 (8 * 10 * 12 * 14 * 16 * 18 * 20)

function getUserNumberInput(promptMessage) {
    let userInput;
    let isValidInput = false;

    while (!isValidInput) {
        userInput = prompt(promptMessage);

        if (!isNaN(userInput)) {
            isValidInput = true;
        } else {
            alert("Only numbers, please");
        }
    }

    return parseInt(userInput);
}

const firstNumber = getUserNumberInput("Введіть перше число:");
const secondNumber = getUserNumberInput("Введіть друге число:");

let sum = 0;
let product = 1;

const start = Math.min(firstNumber, secondNumber);
const end = Math.max(firstNumber, secondNumber);

for (let i = start; i <= end; i++) {
    i % 2 === 0 ? (product *= i) : (sum += i);
}

alert(`Сума = ${sum}, Добуток = ${product}`);
