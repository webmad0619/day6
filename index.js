let myArray = [1, 2, 3, false, { a: 5 }]
let myArray2 = [1, 2, 3, 4, 5]

let obj1 = { name: "javi", salary: 50000 }
let obj2 = {
    name: "javi",
    salary: 50000,
    depts: ["finance", "webdev"]
}

// for (key in obj2) {
//     /*
//         obj1["name"]
//         obj1["salary"]
//     */
//     console.log(`key(${key}): ${obj2[key]}`)
// }

let test = [[1, 2, 3], [1, 2, 3], [1, 2, 3, 44, 99]]

let grades = [
    // dani's students grades
    [9, 10, 10, 9, 8],
    // german's students grades
    [9, 10, 10, 9, 8, 1, 1, 10]
]

var gradesAcum = 0
for (var i = 0; i < grades[1].length; i++) {
    gradesAcum += grades[1][i]
    // these lines are absolutely the same
    // but I prefer the first one, for brevity
    // gradesAcum = gradesAcum + grades[1][i]

    // console.log(grades[1][i])
}

// console.log(`The total score obtained by all student was ${gradesAcum}`)



// never do this, you are creating
// a var for each object!!

// const bob   = { name: "Bob", age: 17 };
// const susy  = { name: "Susy", age: 18 };
// const ted   = { name: "Ted", age: 18 };
// const sarah = { name: "Sarah", age: 20 };
// const bill  = { name: "Bill", age: 19 };


// var allStudents = [
//     { name: "Bob", age: 17 },
//     { name: "Susy", age: 18 },
//     { name: "Ted", age: 18 },
//     { name: "Sarah", age: 20 },
//     { name: "Bill", age: 19 }
// ]

// const twoD = [
//     ["Bob", "Susy", "Ted"],
//     ["Lilly", "Sarah", "Bill"],
//     ["Thomas", "Barry", "Alex", "Miri"]
// ]

// for (var i = 0; i < twoD.length; i++) {
//     for (var j = 0; j < twoD[i].length; j++) {
//         console.log(`the item ${i}, ${j} (${twoD[i][j]}) has the length ${twoD[i][j].length}`)
//     }
// }


// const bootcampsIronhackMadrid = [
//     [
//         { firstName: 'Tomas', lastName: 'Bechtelar' },
//         { firstName: 'Nico', lastName: 'Schamberger', age: 26 },
//         { firstName: 'Ashleigh', lastName: 'Kutch', age: 29 },
//         { firstName: 'Lulu', lastName: 'Considine', age: 20 },
//         { firstName: 'Garland', lastName: 'Waelchi', age: 21 }
//     ],
//     [
//         { firstName: 'Charlie', lastName: 'Rolfson', age: 100 },
//         { firstName: 'Austin', lastName: 'Schowalter', age: 26 },
//         { firstName: 'Emie', lastName: 'Franecki', age: 29 },
//         { firstName: 'Okey', lastName: 'Runte', age: 18 },
//         { firstName: 'Jameson', lastName: 'Jakubowski', age: 22 }
//     ],
//     [
//         { firstName: 'Antwan', lastName: 'Marquardt', age: 22 },
//         { firstName: 'Eugenia', lastName: 'Nienow', age: 23 },
//         { firstName: 'Keely', lastName: 'Hagenes', age: 29 },
//         { firstName: 'Jazmin', lastName: 'Aufderhar', age: 29 },
//         { firstName: 'Stanley', lastName: 'Hand', age: 22 }
//     ],
//     [
//         { firstName: 'Vincent', lastName: 'Langworth', age: 20 },
//         { firstName: 'Mervin', lastName: 'Blick', age: 28 },
//         { firstName: 'Damien', lastName: 'Rohan', age: 28 },
//         { firstName: 'Fabian', lastName: 'Kautzer', age: 22 },
//         { firstName: 'Lilliana', lastName: 'Lesch', age: 26 }
//     ],
//     [
//         { firstName: 'Antonette', lastName: 'Stokes', age: 25 },
//         { firstName: 'Alexandrine', lastName: 'DuBuque', age: 22 },
//         { firstName: 'Braeden', lastName: 'Walker', age: 26 },
//         { firstName: 'Derick', lastName: 'Weber', age: 22 },
//         { firstName: 'Robert', lastName: 'Beatty', age: 30 }
//     ]
// ];

// function getAvgAge(arrayPosition) {
//     var agesAccumulator = 0

//     var studentsIWantToCheck = bootcampsIronhackMadrid[arrayPosition]

//     for (var i = 0; i < studentsIWantToCheck.length; i++) {
//         if (studentsIWantToCheck[i].hasOwnProperty("age")) {
//             agesAccumulator += studentsIWantToCheck[i].age
//         }
//     }
//     return agesAccumulator / studentsIWantToCheck.length
// }

// console.log(getAvgAge(0))

// const classRoom = {
//     teacher: { firstName: 'Greg', lastName: 'Dach', age: 38 }
// };

const classRoom = {
    teacher: {
        firstName: 'Greg',
        lastName: 'Dach',
        age: 38,
        address: {
            street: "3085 Kelton Knolls",
            city: "Aldaside",
            state: "Maryland"
        }
    }
};

// classRoom.teacher.address.city yields "Aldaside"


const school = {
    name: "Fake School 1",
    classRooms: [
        {
            teacher: { firstName: 'Marcelino', lastName: 'Padberg', age: 25 },
            students: [
                { firstName: 'Aliyah', lastName: 'Schulist', age: 18 },
                { firstName: 'Cleveland', lastName: 'Towne', age: 28 },
                { firstName: 'Jan', lastName: 'Quitzon', age: 18 },
                { firstName: 'Alaina', lastName: 'Runolfsdottir', age: 18 },
                { firstName: 'Gerhard', lastName: 'Bergstrom', age: 23 }
            ]
        },
        {
            teacher: { firstName: 'Edwardo', lastName: 'Schowalter', age: 28 },
            students: [
                { firstName: 'Manley', lastName: 'Doyle', age: 18 },
                { firstName: 'Maximilian', lastName: 'Gleichner', age: 19 },
                { firstName: 'Sid', lastName: 'Rohan', age: 30 },
                { firstName: 'Catalina', lastName: 'Hilpert', age: 27 },
                { firstName: 'Gerald', lastName: 'O\'Keefe', age: 26 }
            ]
        }
    ]
}


// Of the school, first classroom, of it, the first student's firstname
// school.classRooms[0].students[0].firstName

let randomBeer = [{ "id": 194, "name": "Hardkogt IPA", "tagline": "A Special Double IPA For Our Danish Friends.", "first_brewed": "06/2010", "description": "Brewed for the beer maniacs in Denmark, this Double IPA quivered with kumquat, kiwi and orange pith all held together with a honeycomb malt body.", "image_url": "https://images.punkapi.com/v2/194.png", "abv": 7.6, "ibu": 175, "target_fg": 1014, "target_og": 1072, "ebc": 40, "srm": 20, "ph": 4.4, "attenuation_level": 80.6, "volume": { "value": 20, "unit": "litres" }, "boil_volume": { "value": 25, "unit": "litres" }, "method": { "mash_temp": [{ "temp": { "value": 63, "unit": "celsius" }, "duration": 90 }], "fermentation": { "temp": { "value": 21, "unit": "celsius" } }, "twist": null }, "ingredients": { "malt": [{ "name": "Extra Pale", "amount": { "value": 6.25, "unit": "kilograms" } }, { "name": "Crystal 150", "amount": { "value": 0.25, "unit": "kilograms" } }, { "name": "Caramalt", "amount": { "value": 0.46, "unit": "kilograms" } }], "hops": [{ "name": "Columbus", "amount": { "value": 30, "unit": "grams" }, "add": "start", "attribute": "bitter" }, { "name": "Columbus", "amount": { "value": 40, "unit": "grams" }, "add": "middle", "attribute": "flavour" }, { "name": "Centennial", "amount": { "value": 40, "unit": "grams" }, "add": "middle", "attribute": "flavour" }, { "name": "Simcoe", "amount": { "value": 40, "unit": "grams" }, "add": "middle", "attribute": "flavour" }, { "name": "Columbus", "amount": { "value": 40, "unit": "grams" }, "add": "end", "attribute": "flavour" }, { "name": "Centennial", "amount": { "value": 40, "unit": "grams" }, "add": "end", "attribute": "flavour" }, { "name": "Simcoe", "amount": { "value": 40, "unit": "grams" }, "add": "end", "attribute": "flavour" }, { "name": "Columbus", "amount": { "value": 60, "unit": "grams" }, "add": "dry hop", "attribute": "aroma" }, { "name": "Centennial", "amount": { "value": 70, "unit": "grams" }, "add": "dry hop", "attribute": "aroma" }, { "name": "Simcoe", "amount": { "value": 70, "unit": "grams" }, "add": "dry hop", "attribute": "aroma" }], "yeast": "Wyeast 1272 - American Ale II™" }, "food_pairing": ["Thick cut salami pieces on tiger bread", "Chilli spiced pork pie", "Poached pear and blue cheese crumble"], "brewers_tips": "It’s better to over-pitch your yeast here to ensure the beer ferments out.", "contributed_by": "Sam Mason <samjbmason>" }]

// when the window loads, we dynamically add a div and an image to represent
// the json info we downloaded from the random beer PUNK API https://api.punkapi.com/v2/beers/random
window.onload = function () {
    let beerDOMEl = document.createElement("div")
    let beerImgDOMEl = document.createElement("img")
    beerImgDOMEl.src = randomBeer[0].image_url
    beerImgDOMEl.height = 200
    beerDOMEl.innerHTML = `${randomBeer[0].name} //// ${randomBeer[0].tagline}`
    beerDOMEl.className = "beer"
    document.body.appendChild(beerDOMEl)
    document.body.appendChild(beerImgDOMEl)
}