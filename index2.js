let initialValues = [5, 10, 101, 300];
let doubledValues = initialValues.map(oneValue => {
    if (oneValue % 2 === 0) return oneValue * 2

    return oneValue;
})

// advanced example checking for falsy with the ternary operator
let doubledValues2 = initialValues.map(oneValue => oneValue % 2 ? oneValue : oneValue * 2)

// let doubledValues2 = initialValues.map(function (oneValue) {
//     return oneValue * 2
// })

let doubledValuesGreater50 = initialValues.map(value => {
    if (value > 50) return value * 2
    return value
})

let doubledValuesLower50 = initialValues.map(value => {
    if (value < 50) return value * 2
    return value
})

let doubleValuesEvenElements = initialValues.map((value, idx) => {
    if (idx % 2 === 0) return value * 2
    return value;
}).map(value => value * Math.PI)

let soldierNames = ["a", "b", "c"]
let soldierNamesWithPositions = soldierNames.map(soldier => {
    return {
        name: soldier,
        x: Math.random() * 1000,
        y: Math.random() * 800
    }
})

// let initialValues = [5, 10, 101, 300]
let filteredValues = initialValues.filter(value => value > 50)

let students = [
    { name: "s1", grade: 9 },
    { name: "s2", grade: 4 },
    { name: "s3", grade: 5 },
    { name: "s4", grade: 10 },
    { name: "s5", grade: 9.5 }
]

// let gradeThreshold = 6
// let excelentStudents = students.filter(student => student.grade > gradeThreshold)
// let needToImprovedStudents = students.filter(student => student.grade <= gradeThreshold)

function divideStudents(gradeThreshold) {
    return {
        excelentStudents: students
            .filter(student => student.grade > gradeThreshold),
        needToImprovedStudents: students
            .filter(student => student.grade <= gradeThreshold)
    }
}

let goodStudentsConversation =
    // students with grades greater than 7
    divideStudents(7)
        // map all the good students to only their name
        .excelentStudents.map(student => student.name)
        .map(studentName => `Speak to ${studentName}`)


// let students = [
//     { name: "s1", grade: 9 },
//     { name: "s2", grade: 4 },
//     { name: "s3", grade: 5 },
//     { name: "s4", grade: 10 },
//     { name: "s5", grade: 9.5 }
// ]

// let avg = students.reduce((prev, current) => {
//     return prev + current.grade
// }, 0) / students.length

// let funnyString = students.reduce((acumulator, currentStudent) => {
//     return acumulator + " *** " + currentStudent.name
// }, "no valgo nada")

// here we accumulate add new keys to an empty object via the reduce
// the new keys are  student1, student2...
let studentsBreakDown = students.reduce((acum, curStudent, idx) => {
    acum["student" + (idx + 1)] = 
        `the student name is ${curStudent.name}`

    return acum
}, {})

// this yields >>>
// { "student1": "s1", "student2": "s2", "student3": "s3", "student4": "s4", "student5": "s5" }