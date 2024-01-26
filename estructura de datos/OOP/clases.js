const Pedro = new Object()
Pedro.name = " Pedro "
Pedro.age = 21

console.log(Pedro)


class Person {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName

    }
    hi() {
        return `Hola, mi nombre es ${this.name}  y mi apellido es ${this.lastName}`
    }

}


class Student extends Person{
    constructor(name,lastName, career){
        super(name,lastName)
        this.career = career
    }
    Career(){
        return `I M ${this.name} and I m a ${this.career}`
    }
    hi(){
        return super.hi() + " I like to study"
    }
} 
const carlos = new Person("Carlos", "Carrera")
console.log(carlos)
console.log(carlos.hi())

class WereWolf {
    constructor(race, health, abilitie) {
        this.race = race
        this.health = health
        this.abilities = abilitie

    }
    Owl() {
        return `OWuuuu`
    }
}



const BloodStein = new WereWolf("Big Brown", 100, "Gunslinger")

console.log(BloodStein.Owl())

const Maria = new Student("Maria", "Gracia", "Engineer")
console.log(Maria.Career())
console.log(Maria.hi())