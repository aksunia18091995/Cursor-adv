const students = [{
name: "Tanya",
course: 3,
subjects: {
math: [4, 4, 3, 4],
algorithms: [3, 3, 3, 4, 4, 4],
data_science: [5, 5, 3, 4]
}
}, {
name: "Victor",
course: 4,
subjects: {
physics: [5, 5, 5, 3],
economics: [2, 3, 3, 3, 3, 5],
geometry: [5, 5, 2, 3, 5]
}
}, {
name: "Anton",
course: 2,
subjects: {
statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
english: [5, 3],
cosmology: [5, 5, 5, 5]
}
}];

// Розподіляємо студент і предмети
function getSubjects(student) {
    const subjects = Object.keys(student.subjects);
    const formattedSubjects = subjects.map(subject => {
        const words = subject.split('_');
        const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
        if (capitalizedWords.includes('Science')) {
            const index = capitalizedWords.indexOf('Science');
            capitalizedWords[index] = 'science';
        }
        return capitalizedWords.join(' ');
    });
        
    return {
        name: student.name,
        subjects: formattedSubjects.map(subject=>`"${subject}"`).join(', ')
    };
}
for (let i = 0; i < students.length; i++){
    const studentSubjects = getSubjects(students[i]);
    document.writeln(`${studentSubjects.name} вивчає [${studentSubjects.subjects}]<br>`);
}
    
// Середня оцінка студента
function getAverageMark(student) {
    const marks = Object.values(student.subjects).flat();
    const sum = marks.reduce((total, mark) => total + mark, 0);
    const average = sum / marks.length;
    return {
        average: average.toFixed(2),
        name:student.name
    }
}

for (let i = 0; i < students.length; i++){
    const studentMarkAverage = getAverageMark(students[i]);
    document.writeln(`У ${studentMarkAverage.name} середній бал ${studentMarkAverage.average}<br>`);
}

// Інформація про студента
function getStudentInfo(student) {
    const infoStudent = {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student).average
    };
    
    return infoStudent
}
for (let i = 0; i < students.length; i++){
const infoOfStudents = getStudentInfo(students[i]);
    document.writeln(`"Курс": ${infoOfStudents.course}, "Ім'я": "${infoOfStudents.name}", "Середня оцінка": ${infoOfStudents.averageMark}<br>`)
}

// Імена студентів
function getStudentsNames(students) {
    const names = students.map(student => student.name);
    const sortedNames = names.sort();
    return sortedNames.map(name=>`"${name}"`);
}
const studentNames = getStudentsNames(students);
document.writeln(`Імена в алфавітному порядку [${studentNames}]<br>`);

// Найкращий студент
function getBestStudent(students) {
    let bestStudent = null;
    let bestAverageMark = 0;

    for (let i = 0; i < students.length; i++){
        const averageMark = getAverageMark(students[i]).average;
            
        if (averageMark > bestAverageMark) {
            bestAverageMark = averageMark;
            bestStudent = students[i].name;
        }
    }
    return bestStudent;
}
const bestStudent = getBestStudent(students);
document.writeln(`Найкращий студент - "${bestStudent}"<br>`)

// Рахуємо кількість букв у слові
function calculateWordLetters() {
    let word = prompt('Введіть слово для перевірки')
    while (!word || word.trim() === '' || !isNaN(word)) {
        word = prompt('Помилка! Введене слово - некоректне'); 
    }

    const letters = {};

    for (let i = 0; i < word.length; i++){
        const letter = word[i].toLowerCase();

        if(letter!==' '){
            if (letters.hasOwnProperty(letter)) {
                letters[letter]++;
            } else {
                letters[letter] = 1;
            }
        }
    }
    return letters;
}

const wordLetters = calculateWordLetters();
document.writeln(`Розбір вашого слова ${JSON.stringify(wordLetters)}`)