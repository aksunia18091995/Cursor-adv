const ukraine = { name: 'Ukraine', tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { name: 'Latvia', tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const lithuania = { name: 'Lithuania', tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// Вигадана зп і кількість податків
function getMyTaxes(salary) {
    return this.tax * salary;
}
const salary = 2000;

const ukraineTaxe = getMyTaxes.call(ukraine, salary);
const latviaTaxe = getMyTaxes.call(latvia, salary);
const lithuaniaTaxe = getMyTaxes.call(lithuania, salary);

document.writeln(`Iтівець в Україні платить ${ukraineTaxe}, у Латвії ${latviaTaxe}, у Литві ${lithuaniaTaxe} при зарплаті у 2000 <br>`)

// Середня кількість податків в кожній країні
function getMiddleTaxes() {
    return (this.tax * this.middleSalary).toFixed(2);
}
const ukraineTaxes = getMiddleTaxes.call(ukraine);
const latviaTaxes = getMiddleTaxes.call(latvia);
const lithuaniaTaxes = getMiddleTaxes.call(lithuania);

document.writeln(`Iтівець в Україні платить ${ukraineTaxes}, у Латвії ${latviaTaxes}, у Литві ${lithuaniaTaxes} за даними по середній оплаті<br>`)

// Скільки всього податків платять ітівці в кожній країні
function getTotalTaxes(){
    return (this.tax * this.middleSalary * this.vacancies).toFixed(2);
}

const ukraineTotal = getTotalTaxes.call(ukraine);
const latviaTotal = getTotalTaxes.call(latvia);
const lithuaniaTotal = getTotalTaxes.call(lithuania);

document.writeln(`Iтівець в Україні платить ${ukraineTotal}, у Латвії ${latviaTotal}, у Литві ${lithuaniaTotal} усі працівники цієї сфери, за даними вакансіями<br>`)

// Рандомайзер з таймером
function getMySalary(country) {
    setInterval(() => {
        const salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
        const taxes = (country.tax * salary).toFixed(2);
        const profit = (salary - taxes).toFixed(2);

        const result = {
            сountry:country.name,
            salary: salary,
            taxes: parseFloat(taxes),
            profit: parseFloat(profit)
        };

        console.log(result);
    }, 10000);
}
getMySalary(ukraine);
getMySalary(lithuania);
getMySalary(latvia);

document.writeln(`Рандомайзер з таймером дивіться у КОНСОЛІ. Появиться через 10 секунд`);