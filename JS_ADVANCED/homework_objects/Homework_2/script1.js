//PART 1
function Person(firstName , lastName , age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getFullName = () => {
        console.log(`Full Name: ${this.firstName} ${this.lastName}  Age: ${this.age}`)
    }
}

function Student(firstName , lastName , age ,academyName , studentID ){

    Object.setPrototypeOf(this , new Person(firstName , lastName , age))


    this.academyName = academyName;
    this.studentID =studentID;
    this.study = () => {
        return (`The student ${this.firstName} is studying in the ${academyName}!`)
    }
}

let bob = new Student("Bob" , "Turring" ,30 , "SEDC" , "00001")
let joy = new Student("Joy" , "Hemingwei" , 25 , "Brainster" , "00002")
//console.log(bob.getFullName());
//console.log(bob.study());




//PART 2
function DesignStudent(firstName , lastName , age , studentID , isStudentOfTheMonth){

    Object.setPrototypeOf(this , new Student(firstName , lastName , age ,academyName="DESIGN", studentID ))

    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = () => {
        return `The student ${this.firstName} is doing an adobe exam!`
    }
}


function CodeStudent(firstName , lastName , age , studentID){

    Object.setPrototypeOf(this , new Student(firstName , lastName , age ,academyName="CODE", studentID))

    this.hasIndividualProject = false;
    this.hasGroupProject = false;

    this.doProject = (type) => {
        if(type === `individual`){
            this.hasIndividualProject = true;
            console.log( `Student ${this.firstName} has an Individual project`)
         }
        else if (type === `group`){
            this.hasGroupProject = true;
            console.log(`Student ${this.firstName} has a Group project`);
        }
        else if(type === `none`){
            console.log(`The student ${firstName} has no projects`);
        }
    }
}

function NetworkStudent(firstName , lastName , age ,  studentID , academyPart){

    Object.setPrototypeOf(this, new Student(firstName , lastName , age ,academyName = "NETWORK" , studentID))
    this.academyPart = academyPart;
    this.attendCiscoExam = () => {
        return `The student ${this.firstName} is doing a Cisco exam!`
    }
}

Person.prototype.checkForAcademy = function() {
    console.log(this.academyName)
}
let student1 = new DesignStudent( 1, "", "Jakovlev", 31) 
let student2 = new CodeStudent(2, "Igor", "Igorovski", 18) 
let student3 = new NetworkStudent(5, 3, "Petar", "Igorovski", 18) 

console.log(student1)
console.log(student1.attendAdobeExam())
console.log(student2.doProject('individual'));
console.log(student3)
