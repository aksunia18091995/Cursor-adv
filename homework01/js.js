const bread = 15.678;
const onion = 123.965;
const sugar = 90.2345;

const minPrice = Math.min(bread, onion, sugar); 
console.log('min price: ', minPrice);

const maxPrice = Math.max(bread, onion, sugar);
console.log('max price: ', maxPrice);

const sum = bread + onion + sugar;
console.log('sum: ', sum);

const Bread = Math.floor(bread);
const Onion = Math.floor(onion);
const Sugar = Math.floor(sugar);
console.log('new prices: ', 'bread: ', Bread, 'onion: ', Onion, 'sugar: ', Sugar);

const Sum = Bread + Onion + Sugar;
console.log('new sum: ', Sum);

const roundedSumToHundred = Math.round(Sum / 100) * 100;
console.log('rounded Sum to hundred: ', roundedSumToHundred);

const even = Sum % 2 === 0;
console.log('even Sum or not: ', even);

const rest = 500 - sum;
console.log('rest: ', rest);

const averagePrice = (sum / 3).toFixed(2);
console.log('avarege price: ', averagePrice);

const discount = Math.round(Math.random() * (99 - 1) + 1);
console.log('discount: ', discount, '%');

const discountPrice = (sum - ((sum * discount) / 100)).toFixed(2);
console.log('price with discount: ', discountPrice);

const newProfit = sum / 2 - (sum - discountPrice);
console.log('new profit: ', newProfit.toFixed(2));

const result = `Мінімальна ціна: ${minPrice};<br>
Максимальна ціна: ${maxPrice};<br>
Вартість усіх товарів: ${sum};<br>
Нові ціни без копійок: хліб: ${Bread}, цибуля ${Onion}, цукор ${Sugar};<br>
Нова вартість без копійок: ${Sum};<br>
Округлена сума товарів до сотень: ${roundedSumToHundred};<br>
Чи є сума парним числом? ${even};<br>
Решта  з 500: ${rest};<br>
Середнє значення цін: ${averagePrice};<br>
Знижка: ${discount} %;<br>
Ціна із знижкою: ${discountPrice};<br>
Чистий прибуток: ${newProfit.toFixed(2)}.`

console.log(result);

document.write(result);