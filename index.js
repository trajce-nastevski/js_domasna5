let fruits = ['Apple', 'Banana', 'Orange'];
let students = [
    {
        firstName: 'John',
        lastName: 'Doe',
        index: 20201
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        index: 20202
    },
    {
        firstName: 'David',
        lastName: 'Vinoth',
        index: 20203
    },
    {
        firstName: 'Divya',
        lastName: 'Ishitha',
        index: 20204
    },
    {
        firstName: 'Thomas',
        lastName: 'Edgardson',
        index: 20205
    }
];
    // 1. Loop through the arrays and print the elements.
for (let i = 0; i < fruits.length; i++) {
    let printOut = fruits[i];
    console.log(printOut);
}

    /*
    2. Loop through the students array and print:
    a. the properties of the objects.
    */
for (let j = 0; j < students.length; j++) {
let counter = students[j];
    for (let printOut2 in counter) {
        console.log(printOut2);
    }
};

    /*
    2. Loop through the students array and print:
    b. the values of the properties in the objects.
    */

for (let k = 0; k < students.length; k++) {
let value = students[k];
    for (let printOut3 in value) {
        console.log(value[printOut3]);
    }
};

    // 3. Create a loop and print the first 10 numbers.
for (let o = 1; o < 11; o++) {
    console.log(o);
};

    /*
    4. Create a loop and print the first 10 numbers (even only - hint start from 0 and increase the counter for 2).
    */
for (let q = 0; q <= 20; q+=2) {
    console.log(q);
};

    //a. starting from 0 && using a conditional statement (increase the counter for 1)
for (let l = 0; l < 20; l++) {
    if(l % 2 == 0 ){
        console.log(l);
    }
};

    // 5. Create a loop and print the first 10 numbers (odd only - hint start from 1 and increase the counter for 2).
for (let a = 1; a < 20; a += 2) {
    console.log(a);
};
    //    a. starting from 0 && using a conditional statement (increase the counter for 1)
for (let z = 0; z < 20; z++) {
    if(z % 2 !== 0 ){
        console.log(z);
    }
};

    // 6. Find a way to check the type of the array (except for the typeof command).
let isThisAnArray = Array.isArray(students);