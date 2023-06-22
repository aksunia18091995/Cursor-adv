const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій",
"Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів",
"Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// Ділимо на команди
function shuffledStudents(students) {
    for (let i = students.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [students[i], students[j]] = [students[j], students[i]];
    }
    return students;
}  

function getPairs(boys, girls) {
    const shuffledBoys = shuffledStudents(boys.slice());
    const shuffledGirls = shuffledStudents(girls.slice());

    const pairs = [];

    for (let i = 0; i < shuffledBoys.length; i ++){
    const pair = [shuffledBoys[i], shuffledGirls[i]];
    pairs.push(pair); 
    }

    return pairs;
}
const boys = ["Олександр", "Ігор", "Олексій"];
const girls = ["Олена", "Іра", "Світлана"];
const pairs = getPairs(boys, girls);
console.log(pairs);

// Роздаємо теми
function shuffledThemes(themes) {
    for (let i = themes.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [themes[i], themes[j]] = [themes[j], themes[i]];
    }
    return themes;
}

function getThemes(pairs, themes) {
    const shuffledThemesArray = shuffledThemes(themes.slice());
    const studentsThemes = [];

    for (let i = 0; i < pairs.length; i++){
        const pair = pairs[i];
        const theme = shuffledThemesArray[i];

        const pairWithTheme=[`${pair[0]} і ${pair[1]}`, theme]
        studentsThemes.push(pairWithTheme);
    }

    return studentsThemes;
}

const studentsThemes = getThemes(pairs, themes);
console.log(studentsThemes);

// Зіставляємо студентів та оцінки
function getMarks(students, marks) {
    const markedStudents = [];

    for (let i = 0; i < students.length; i++){
        const student = students[i];
        const mark = marks[i];

        const studentWithMark = [student, mark];
        markedStudents.push(studentWithMark);
    }

    return markedStudents;
}

const markedStudents = getMarks(students, marks);
console.log(markedStudents);

// Отримання випадкової оцінки
function getRandomMarks(pairs) {
    const marks = [];

    for (let i = 0; i < pairs.length; i++){
        const mark = Math.floor(Math.random() * 5) + 1;
        const pair = pairs[i];
        const markedPair = [...pair, mark];
        marks.push(markedPair);
    }

    return marks;
}

const randomMarks = getRandomMarks(studentsThemes);
console.log(randomMarks);
