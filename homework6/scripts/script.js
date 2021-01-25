
//homeworkpart1
let headers = document.getElementsByTagName("h1");
let header3 = document.getElementsByTagName("h3");
let paragraphs = document.getElementsByTagName("p");
//console.log(headers);

headers[0].innerText = "Cool Page - Changed!";
headers[1].innerText = "Also changed header!";
header3[0].innerText = "Header 3 changed!";


paragraphs[0].innerText = "First paragraph is changed.";
paragraphs[1].innerText = "Second paragraph is changed.";



//homeworkpart2
let numbarray = [1, 2, 3, 4, 5, 6, 7];
let arrayDiv = document.getElementById("array");
let arraySum = document.getElementById("sum");
let sum = 0;

function PrintElements(array) {
    for (let numb of array) {
        arrayDiv.innerHTML += `
        <li> ${(numb)}</li>
    `;
    }

}


function SumOfElements(array) {
    if (array.length === 0) {
        console.log("You provided empty array!")
    } else {
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        arraySum.innerHTML += sum;
    }
}

SumOfElements(numbarray);
PrintElements(numbarray);

