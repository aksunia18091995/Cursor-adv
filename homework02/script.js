let num1;

do { 
    num1 = Number(prompt('Введіть ціле перше число'));
} while (
    num1 === NaN || !Number.isInteger(num1) || !num1
)

console.log(num1);

let num2;

do { 
    num2 = Number(prompt('Введіть ціле друге число'))
} while (
    num2 === NaN || !Number.isInteger(num2)|| !num2
)

console.log(num2);

const requestEven = confirm('Пропускаємо парні числа?');
let sum = 0;

for (num1; num1 <= num2; num1++){
    if (requestEven === true && num1 % 2 == 0) {
        continue;
    } 
    sum = sum+num1;
}

document.writeln('Cума: ', sum)
