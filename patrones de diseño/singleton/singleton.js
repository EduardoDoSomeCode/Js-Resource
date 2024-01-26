
//Solo exite una instancia o objeto de una clase
//Es parte del patron creacional , nos crea un objeto
//Algunas personas consideran al singleton como un antiPatron
//Pero este se encuentra mucho en injeccion de dependencias
class Singleton {

    constructor() {

        this.random = Math.random();
        if (Singleton.instance) {

            return Singleton.instance
        }

        Singleton.instance = this
    }

    getInstance() {
        return Singleton.instance
    }
}

const mySingleton = new Singleton()
const mySingleton2 = new Singleton()


// console.log(mySingleton.random)
// console.log(mySingleton2.random)
// console.log(mySingleton === mySingleton2)


//Caso practico de Singleton

class DayOfTheWeek {
    dayEs = [
        "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"
    ]
    dayEn = ["Monday", "Tuesday", "Wedsneday", "Friday", "Saturday", "Sunday"]

    constructor(lang) {

        this.lang = lang;

        if (DayOfTheWeek.instance) {
            return DayOfTheWeek.instance;

        }

        DayOfTheWeek.instance = this;

    }

    geyDays(){
        return this.lang === "es" ? this.dayEs:this.dayEn;
    }
}


const WeekDays = new DayOfTheWeek("en")
const weekDays2 = new DayOfTheWeek()

console.log(WeekDays.geyDays())
console.log(weekDays2.geyDays())