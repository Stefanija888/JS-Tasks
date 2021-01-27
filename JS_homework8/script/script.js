let Animal = {
	name: "Dog",
	kind: "Labrador",
	getSpeak: function(){
		console.log( `${this.name} says:' Hey Bro! '`);
	}
};

Animal.getSpeak();

//homeworkpart2
let Book ={
    title: "The Notebook" ,
    author:"Nikolas Sparks",
    readingStatus: false,
    info: function () {
        if(this.readingStatus) {
            console.log(`Already read ${this.title}`);
        }
        else  {
            console.log(`You still need to read ${this.title}`);
        }
    }
};
Book.info();