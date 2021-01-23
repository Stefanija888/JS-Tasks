
//homeworkpart1
let stringArray = ["Hello ", "There", "! ", "Welcome ", "on ", "our ", "page!", '"'];

function SumString() {
    let sum = '"';
    for (i = 0; i < stringArray.length; i++) {

        sum += stringArray[i];

    }

    return sum;
}
console.log(SumString());

//homeworkpart2

function calltheNumber() {
    for (i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(`${i} \n `);

        }
        else {
            console.log(`"${i}" `);
        }
    }
}

calltheNumber();

//homeworkpart3
let numbersArray = [2, 40, 5, 8, 10, 6, 2, 12, 7, 55];

function sumNumbers(array) {
    if (array.length === 0) {
        console.log("Error!")
    } else {
        console.log("Ok!");
    }       

    let rez = 0;

    if (array[0] > array[1]) {
        max = array[0];
        min = array[1];
    }
    else {
        max = array[1];
        min = array[0];
    }

    for (i = 2; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];

        }

        else if (array[i] < min) {
            min = array[i];
        }
    }
    rez = min + max;
    console.log(`Min is: ${min}`);
    console.log(`Max is: ${max}`);
    console.log(`Sum is: ${rez}`);

}

sumNumbers(numbersArray);

//homeworkpart4
let firstnames = ["Greg ", "Bob ", "Jill ", "Max ",];
let lastnames = ["Gregory", "Wurtz", "Murray", "Kerry"];


function studentsNames() {
    for (i = 1; i < firstnames.length; i++) {
        console.log(i + "." + firstnames[i] + lastnames[i]);

    }
}

studentsNames();