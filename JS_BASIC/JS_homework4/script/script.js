 //Homework#1
 //solution1
 let names = ["Greg", "Bob", "Jill", "Max",];
 let mood = ["Happy", "Lazy", "Hungry", "Sad"];
 let activity = ["Singing", "Sleeping", "Eating", "Crying"];

 function tellStory() {
     for (i = 0; i < names.length; i++) {
         console.log("This is " + names[i] + " he is a nice person.  Today he is " + mood[i] + ". He is " + activity[i] + " all day.")
     }
 }

 tellStory();




 //Homework#2


let arrayNum = [1,2,3,4,5];
function SumOfArrayNumbers() {
    let sum = 0;
    for(i=0; i<arrayNum.length; i++) {
        sum += arrayNum[i] ;
    }

    return sum;
}
console.log(SumOfArrayNumbers());

