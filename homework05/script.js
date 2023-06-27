// Рандомні числа
alert('Визначаємо рандомні числа у проміжках')
function getRandomArray() {
    let length = Number(prompt('Запишіть, кількість чисел'));
    while (isNaN(length) || length.toString().trim() === '' || !length) {
        length = Number(prompt('Це не є числом. Спробуйте ще раз'));
    }

    let min = Number(prompt('Запишіть мінімальне число'));
    while (isNaN(min) || min.toString().trim() === '' || !min) {
        min = Number(prompt('Це не є числом. Спробуйте ще раз. Запишіть мінімальне число'));
    }
    
    let max = Number(prompt('Запишіть максимальне число'));
    while (isNaN(max) || max.toString().trim() === '' || !max || min>max) {
        max = Number(prompt('Спробуйте ще раз. Запишіть максимальне число'));
    }

    const randomArray = [];

    for (let i = 0; i < length; i++){
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNumber);
    }

    return {
        randomArray: randomArray,
        length: length,
        min: min,
        max: max
    }
}

const resRandomArray = getRandomArray();
// document.writeln(`У масиві [${resRandomArray.randomArray}] є ${resRandomArray.length} елементів, мінімальне число в якому - ${resRandomArray.min}, максимальне - ${resRandomArray.max}`)

// Рахуємо середнє арифметичне
alert('Визначаємо середнє арифметичне у ряді чисел')
function getAverage() {
    let numbersString = prompt('Введіть цілі числа через пробіл:');
    while (numbersString.trim() === '' || numbersString.split(' ').some(num => isNaN(Number(num))) || numbersString.split(' ').some(num => !Number.isInteger(Number(num)))) {
        numbersString = prompt('Помилка. Введіть цілі числа через пробіл')
    }

    let numbersArray = numbersString.split(' ');
    let numbers = numbersArray.map(numString => parseFloat(numString.trim()));

    numbers = numbers.filter(num => !isNaN(num) && Number.isInteger(num));
    if (numbers.length === 0) {
        return 'No valid numbers entered';
    }

    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
    return {
        numbers: numbers,
        average: average
    }
    
}
const resAverage = getAverage();
// document.writeln(`Середнє арифметичне чисел ${resAverage.numbers} - ${resAverage.average}`);

// Фільтруємо парні числа
alert('Відкидаємо усі парні числа, залишаємо лише непарні')
function filterEvenNumbers() {
    let numbersString = prompt('Введіть цілі числа через пробіл:');
    while (numbersString.trim() === '' || numbersString.split(' ').some(num => isNaN(Number(num))) || numbersString.split(' ').some(num => !Number.isInteger(Number(num)))) {
        numbersString = prompt('Помилка. Введіть цілі числа через пробіл')
    }

    let numbersArray = numbersString.split(' ');
    let numbers = numbersArray.map(numString => parseFloat(numString.trim()));

    numbers = numbers.filter(num => !isNaN(num) && Number.isInteger(num)&& num % 2 !== 0);
    if (numbers.length === 0) {
        return 'No valid numbers entered';
    }

    return {
        numbers: numbers,
        numbersArray:numbersArray
    }
}
const resOddNumber = filterEvenNumbers();
// document.writeln(`Серед чисел ${resOddNumber.numbersArray}є такі непарні числа: [${resOddNumber.numbers}]`);

// Рахуємо лише додатні числа
alert('Рахуємо лише кількість додатніх чисел');
function countPositiveNumbers() {
    let numbersString = prompt('Введіть цілі числа через пробіл:');
    while (numbersString.trim() === '' || numbersString.split(' ').some(num => isNaN(Number(num))) || numbersString.split(' ').some(num => !Number.isInteger(Number(num)))) {
        numbersString = prompt('Помилка. Введіть цілі числа через пробіл')
    }

    let numbersArray = numbersString.split(' ');
    let numbers = numbersArray.map(numString => parseFloat(numString.trim()));

    numbers = numbers.filter(num => !isNaN(num) && Number.isInteger(num) && num > 0);
    if (numbers.length === 0) {
        return 'No valid positive numbers entered';
    }

    const countPositiveNumbers = numbers.length;

    return {
        numbersArray: numbersArray,
        countPositiveNumbers:countPositiveNumbers
    }
} 

const resCountPosNum = countPositiveNumbers();
// document.writeln(`У ряді чисел ${resCountPosNum.numbersArray} додатніми числами є лише ${resCountPosNum.countPositiveNumbers} елементів`)

alert('Залишамо лише числа, кратні 5');
function getDividedByFive() {
    let numbersString = prompt('Введіть цілі числа через пробіл:');
    while (numbersString.trim() === '' || numbersString.split(' ').some(num => isNaN(Number(num))) || numbersString.split(' ').some(num => !Number.isInteger(Number(num)))) {
        numbersString = prompt('Помилка. Введіть цілі числа через пробіл')
    }

    let numbersArray = numbersString.split(' ');
    let numbers = numbersArray.map(numString => parseFloat(numString.trim()));

    numbers = numbers.filter(num => !isNaN(num) && Number.isInteger(num) && num % 5 === 0);
    if (numbers.length === 0) {
        return 'No valid positive numbers entered';
    }

    return {
        numbersArray: numbersArray,
        numbers:numbers
    }
}

const resDivBy5 = getDividedByFive();
// document.writeln(`Серед чисел ${resDivBy5.numbersArray} є такі, що діляться націло на 5 - ${resDivBy5.numbers}`)

// Визначаємо наймоднішу цифру
alert('Визначаємо наймоднішу цифру серед ряду чисел')
function getModa() {
    let numbersString = prompt('Введіть цілі числа через пробіл:');
    while (numbersString.trim() === '' || numbersString.split(' ').some(num => isNaN(Number(num))) || numbersString.split(' ').some(num => !Number.isInteger(Number(num)))) {
        numbersString = prompt('Помилка. Введіть цілі числа через пробіл')
    }

    let numbersArray = numbersString.split(' ');
    let numbers = numbersArray.map(numString => parseFloat(numString.trim()));

    numbers = numbers.filter(num => !isNaN(num) && Number.isInteger(num));
    if (numbers.length === 0) {
        return 'No valid numbers entered';
    }

    const numbersObject = {};
    for (let number of numbers) {
        const digits = String(number).split('');
        for (let digit of digits) {
            numbersObject[digit] = numbersObject[digit] ? numbersObject[digit] + 1 : 1;
        }
    }

    let moda=null;
    let maxCount = 0;

    for (let digit in numbersObject) {
        if (numbersObject[digit] > maxCount) {
            maxCount = numbersObject[digit];
            moda = digit;
        }
    }

    return {
        numbers: numbers,
        moda: moda
    }
}

const resModa = getModa();
// document.writeln(`Серед чисел ${resModa.numbers} наймоднішою є цифра ${resModa.moda}`)

document.writeln(`У масиві [${resRandomArray.randomArray}] є ${resRandomArray.length} елементів, мінімальне число в якому - ${resRandomArray.min}, максимальне - ${resRandomArray.max}</br>`);
document.writeln(`Середнє арифметичне чисел ${resAverage.numbers} це ${resAverage.average}</br>`);
document.writeln(`Серед чисел ${resOddNumber.numbersArray} є такі непарні числа: [${resOddNumber.numbers}]</br>`);
document.writeln(`У ряді чисел ${resCountPosNum.numbersArray} додатніми числами є лише ${resCountPosNum.countPositiveNumbers} елементів</br>`);
document.writeln(`Серед чисел ${resDivBy5.numbersArray} є такі, що діляться націло на 5 : ${resDivBy5.numbers}</br>`);
document.writeln(`Серед чисел ${resModa.numbers} наймоднішою є цифра ${resModa.moda}`)