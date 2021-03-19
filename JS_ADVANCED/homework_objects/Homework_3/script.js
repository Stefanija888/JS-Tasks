class Animal {
    constructor(name, type, age, size) {
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }
    eat(input) {
        if (input) {
            if (this.type === `herbivore`) {
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals`)
            } else if
                (this.type !== `herbivore` && this.size < input.size) {
                    console.log(`The animal ${this.name} tried to eat  ${input.name} but it was too large.`)
            }else if
                (this.type !== `herbivore`) {
                    this.isEaten = true;
                    console.log(` The animal ${this.name} ate ${input.name}.`)
            } 
        } else if(!input) {
            console.log(`The animal ${this.name} is eating ${input}`)
        }

    }

}

let mouse = new Animal(`Jerri`, `herbivore`, 1, 100)
let cat = new Animal(`Zizi`, `carnivore`, 3, 200)
let dog = new Animal(`Lara`, `carnivore`, 3, 300)


mouse.eat(cat);
cat.eat(mouse);
dog.eat(cat);
cat.eat(dog);

