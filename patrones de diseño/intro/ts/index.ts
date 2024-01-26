
class Drink{

    private name:string;

    constructor(name:string){
        this.name = name;
    }

    Info():string{
        return this.name;
    }
}

//interfaz
interface Product{
price:number;
getPrice:string;
}

//Herencia
class Beer extends Drink implements Product{
    private alcohol:number;
    price: number;

    constructor(name:string , alcohol:number){
            super(name);

            this.alcohol = alcohol;
    }

    getPrice(): string{
        
        return "$ "+this.price

    }

    Info(){
        return super.Info() + " " + this.alcohol; 
    }

    

}
const myDrink = new Drink("Agua");
console.log(myDrink.Info())

const jager = new Beer("Jager", 29);

console.log(jager.Info()) 