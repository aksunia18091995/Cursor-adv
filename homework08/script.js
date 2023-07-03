class Student{
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this._marks=[];
        this._dismissed = false;
    }

    getInfo() {
        console.log ('Студент', this.course, 'курсу', this.university, this.fullName);
    }

    get marks() {
        if (this._dismissed) {
            console.log('Студент виключений. Оцінки недоступні.');
            return null;
        }
        console.log('Оцінки студента:', this._marks);
        return this._marks;
    }

    set marks(val) {
        if (!this._dismissed) {
            if (typeof val === 'number' && !isNaN(val)) {
              this._marks.push(val);  
            } else if (Array.isArray(val)) {
                this._marks = this._marks.concat(val);
            } else {
                console.log('Недійсний формат оцінки')
            }
        } else {
            console.log('Студент виключений. Немовжливо додати оцінку.')
        }
    }

    getAverageMark() {
        if (this._marks.length === 0) {
        console.log('Оцінок немає. Середній бал не може бути обчислений.');
        return -1;
        }

        const average = (this._marks.reduce((total, mark) => total + mark, 0)) / this._marks.length;
        console.log('Середній бал:', average.toFixed(1));
        return average;
    }

    dismiss() {
        this._dismissed = true;
        console.log('Студента виключено!')
    }

    recover() {
        this._dismissed = false;
        console.log('Cтудента поновлено!')
    }
}

const student = new Student("Вищої Школи Психотерапії м. Одеса", "1го", "Остап Родоманський Бендер");
student.getInfo();
student.marks = [5, 4, 4, 5];
student.marks;
student.marks = 5;
student.marks;
student.getAverageMark();
student.dismiss();
student.marks;
student.recover();
student.marks;

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName);
        setInterval(() => {
            this.getScholarship();
        }, 30000);
    }
    
    getScholarship() {
        if (this._dismissed) {
            console.log('Студент виключений. Немає права на стипендію.');
            return;
        }

        if (this.getAverageMark() >= 4.0) {
            console.log('Ви отримали 1400 грн стипендії!!!')
        } else {
            console.log('У вас занизький бал. Ви не можете претендувати на стипендію')
        }

    }
}

const budgetStudent = new BudgetStudent("Вищої Школи Психотерапії м. Одеса", "1го", "Остап Родоманський Бендер");
budgetStudent.marks = [5, 4, 4, 5];
student.getInfo();
budgetStudent.getScholarship();
budgetStudent.dismiss();
