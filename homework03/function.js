// Функція 1
alert('Функція 1 "Найбільше число"')
function getMaxDigit() {
    let number = prompt('Введіть число:');

    while (isNaN(number)|| number.trim()===''||!number) {
        number = prompt('Це не є числом. Спробуйте ще раз');
    }
    const arrayOfNumbers = number.split('').map(Number);
    const maxDigit = Math.max(...arrayOfNumbers);

    return {
        number: number,
        maxDigit: maxDigit
    };
}
const res = getMaxDigit();

// document.writeln(`Функція №1: максимальне число в числі ${res.number} - ${res.maxDigit}`)

// Функція 2
alert('Функція 2 "Визначаємо степінь числа"')
function calcPower(){
    let number = Number(prompt('Введи число: '));
    while (isNaN(number)|| number.toString().trim()===''||!number) {
        number = prompt('Це не є числом. Спробуйте ще раз');
    }

    let exponent = Number(prompt('До якого степеня піднести?'));
    while (isNaN(exponent)|| exponent.toString().trim()===''||!exponent) {
        exponent = prompt('Це не є числом. Спробуйте ще раз ввести степінь');
    }

    let result = 1;

    for (let i = 0; i < exponent; i++){
        result *= number;
    }

    return {
        number: number,
        exponent: exponent,
        result: result
    };
}
const resPower = calcPower();

// document.writeln(`Функція №2: ${resPower.number} піднесене до степеня ${resPower.exponent} буде ${resPower.result}`)

// Функція 3
alert('Функція 3 "Змінюємо першу літеру на велику"')
function formatName() {
    let name = prompt('Введи імʼя:');

    while (name === null || name.trim() === '' || !isNaN(name)) {
        name = prompt('Помилка! Введене імʼя - некоректне'); 
    }
   
    const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    return {
        name: name,
        formattedName: formattedName
    }
}
const resFormattedName = formatName();

// document.writeln(`Функція №3: Імʼя ${resFormattedName.name} виправлено на ${resFormattedName.formattedName}`)

// Функція 4
alert('Функція 4 "Чистий прибуток"')
function calcNetIncome() {
    let salary = Number(prompt('Введіть свою заробітню плату'));
    const tax = 19.5 / 100;

    while (isNaN(salary)|| salary.toString().trim()===''||!salary) {
        salary = prompt('Це не є числом. Спробуйте ще раз ввести свою зарплату');
    }

    const netIncome = salary - salary * tax;
    return {
        salary: salary,
        tax: tax,
        netIncome: netIncome
    }
}
const resNetIncome = calcNetIncome();

// document.writeln(`Функція №4: При доході ${resNetIncome.salary} після оплати податку 19.5% залишиться ${resNetIncome.netIncome} чистого прибутку`)

// Функція 5
alert('Функція 5 "Повертаємо рандомне ціле число"');
function getRandomNumber() {
    let num1 = Number(prompt('Введіть мінімальне значення:'));
    while (isNaN(num1) || num1.toString().trim() === ''||!num1) {
        num1=prompt('Це не є числом. Спробуйте ще раз')
    }

    let num2 = Number(prompt('Введіть максимальне значення:'));
    while (isNaN(num2) || num2.toString().trim() === ''||!num2||num2<num1) {
        num2=prompt('Спробуйте ще раз. Введи більше 2 число')
    }
    
    const randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;
    return {
        num1: num1,
        num2: num2,
        randomNumber: randomNumber
    }
}
const resRandomNumber = getRandomNumber();

// document.writeln(`Функція №5: У проміжку від ${resRandomNumber.num1} до ${resRandomNumber.num2} рандомне число - ${resRandomNumber.randomNumber}`)

// Функція 6
alert('Функція 6 "Кількість повторень букви у слові"');
function countLetter() {
    let word = prompt('Введіть слово:');
    while (!isNaN(word) || word.trim() === '' || !word) {
        word=prompt('Некоректне введення. Введіть ще раз слово')
    }
    
    let letter = prompt('Введіть літеру, кількість якої треба знайти');
    while (!isNaN(letter) || letter.trim() === '' || !letter) {
        letter=prompt('Некоректне введення. Введіть ще раз букву')
    }

    word = word.toLowerCase();
    letter = letter.toLowerCase();

    let count = 0;

    for (let i = 0; i < word.length; i++){
        if (word[i] === letter) {
            count++;
        }
    }

    return {
        word: word,
        letter: letter,
        count: count
    };
}

const resCountLetter = countLetter();

// document.writeln(`Функція №6: У слові "${resCountLetter.word}" буква "${resCountLetter.letter}" зустрічається ${resCountLetter.count} разів.`);

document.writeln(`Функція №1: максимальне число в числі ${res.number} - ${res.maxDigit}<br>`);
document.writeln(`Функція №2: ${resPower.number} піднесене до степеня ${resPower.exponent} буде ${resPower.result}<br>`);
document.writeln(`Функція №3: Імʼя ${resFormattedName.name} виправлено на ${resFormattedName.formattedName}<br>`);
document.writeln(`Функція №4: При доході ${resNetIncome.salary} після оплати податку 19.5% залишиться ${resNetIncome.netIncome} чистого прибутку<br>`);
document.writeln(`Функція №5: У проміжку від ${resRandomNumber.num1} до ${resRandomNumber.num2} рандомне число - ${resRandomNumber.randomNumber}<br>`);
document.writeln(`Функція №6: У слові "${resCountLetter.word}" буква "${resCountLetter.letter}" зустрічається ${resCountLetter.count} разів.`);
