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
  const subjectKeys = Object.keys(student.subjects);
  const formattedSubjects = subjectKeys.map(subject => {
    return subject.charAt(0).toUpperCase() + subject.slice(1).replace('_', ' ');
  });
  return formattedSubjects;
}

const student = students[0];
const subjects = getSubjects(student);
console.log('Список предметів:', subjects);

    
// Середня оцінка студента
function getAverageMark(student) {
  const marks = Object.values(student.subjects).flat();
  const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
  const averageMark = totalMarks / marks.length;
    return {
        average: averageMark.toFixed(2)
    };
}

const studentWithMarks = students[0];
const averageMark = getAverageMark(studentWithMarks);
console.log('Середня оцінка студента:', averageMark);


// Інформація про студента
function getStudentInfo(student) {
    const infoStudent = {
        course: student.course,
        name: student.name,
        averageMark: getAverageMark(student)
    };
    
    return infoStudent
}
const studentAbout = students[0];
const studentInfo = getStudentInfo(studentAbout);
console.log('Інфоримація про студента:', studentInfo)

// Імена студентів
function getStudentsNames(students) {
    const names = students.map(student => student.name);
    names.sort();
    return names;
}
const studentNames = getStudentsNames(students);
console.log('Імена в алфавітному порядку:', studentNames);

// Найкращий студент
function getBestStudent(students) {
    let bestStudent = null;
    let bestAverageMark = -Infinity;

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
console.log('Найкращий студент -', bestStudent)

// Рахуємо кількість букв у слові
function calculateWordLetters() {
    let word = prompt('Введіть слово для перевірки')
    while (!word || word.trim() === '' || !isNaN(word)) {
        word = prompt('Помилка! Введене слово - некоректне'); 
    }

    const letters = {};

    for (let i = 0; i < word.length; i++){
        const letter = word[i].toLowerCase();

        if(letter !== ' '){
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
document.writeln('Розбір вашого слова {');
for (const letter in wordLetters) {
    document.writeln(`"${letter}": ${wordLetters[letter]},`);
}
document.writeln('}');