/*
Habitualmente este tipo de patron se usa en calculos de ventas
Comportamientos de parte del frontend , con combo box
Depende del contexto , estrategias y acciones
Escalar la funcionalidad sin tener que añadir switch case
Uso de clases , ademas de cambiar entre diferentes opciones
Modificar sin alternar otras opciones
Sirve cuando el comportamiento de un objeto cambia en el tiempo de ejecucion
*/

/*
class SaleContext{
    constructor(strategy){
        this.strategy = strategy;

    }

    setStrategy(strategy){
        this.strategy = strategy
    }

    calculate(amount){
            return this.strategy.calculate(amount);       
    }

}

class RegularSaleStrategy{

    constructor(tax){
        this.tax = tax;
    }

    calculate(amount){
        return amount + (amount *   this.tax);
    }

}


class DiscountSaleStrategy{
    constructor(tax, discount){
        this.tax = tax;
        this.discount = discount;

    }

    calculate(amount){
        return amount + (amount * this.tax) -  this.discount;
    }
}

class ForeignSaleStrategy{
    // constructor(tax){
    //     this.tax = tax;

    // }
    getDollarPrice(){
        return 20;
    }

    calculate(amount){
        return amount * this.getDollarPrice();
    }
}

const regularSale = new RegularSaleStrategy(0.16);
const sale = new SaleContext(regularSale);
const saleForegin = new ForeignSaleStrategy();
const discountSale = new DiscountSaleStrategy(0.16,2)

console.log(sale.calculate(10))

sale.setStrategy(discountSale);

console.log(sale.calculate(10))

sale.setStrategy(saleForegin)

console.log(sale.calculate(10))
*/
// Explicacion practica

const dummyData = [
    {
        name: "Iron Man",
        country: "U.S.A",
        info: "Playboy, millionare, phylantropous",
        img: "https://th.bing.com/th/id/OIP.q9-C9ghsqTkvurNkfk2LwwHaLi?rs=1&pid=ImgDetMain"
    },
    {
        name: "Hulk",
        country: "U.S.A",
        info: "Scientis in ray gama",
        img: "https://th.bing.com/th/id/OIP.BKiJwTkQtqX-fcz6JPSanAHaHa?rs=1&pid=ImgDetMain"
    }, {
        name: "Captain America",
        country: "U.S.A",
        info: "Steve rogers ",
        img: "https://th.bing.com/th/id/OIP.KlXnPJQZzrjM-aqdyYxOdAHaJP?rs=1&pid=ImgDetMain"
    }
]
let contentDiv = document.getElementById("content");


class InfoContext {
    constructor(strategy, data, element) {

        this.setStrategy(strategy) ;
        this.data = data;
        this.element = element;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    show() {
        this.strategy.show(this.data, this.element);
    }
}

class StrategyList {

    show(data, element) {
        element.innerHTML = data.reduce((ac, hero) => {

            return ac + `<div>
               <h2>${hero.name}</h2>
                 <p>${hero.country}</p>
             </div>
             <hr>`
        }, "")

    }
}


class DetailStrategyList {

    show(data, element) {
        element.innerHTML = data.reduce((ac, hero) => {

            return ac + `<div>
               <h2>${hero.name}</h2>
                 <p>${hero.country}</p>
                 <p>${hero.info}</p>
                 <img style="width:100px" src=${hero.img}/>
             </div>
             <hr>`
        }, "")

    }
}




class ListWithImage {

    show(data, element) {
        element.innerHTML = data.reduce((ac, hero) => {

            return ac + `<div>
               <h2>${hero.name}</h2>
                 <img style="width:100px" src=${hero.img}/>
             </div>
             <hr>`
        }, "")

    }
}

const strategies =[
    new StrategyList(),
    new DetailStrategyList(),
    new ListWithImage(),
]

const info = new InfoContext(new StrategyList(), dummyData, contentDiv);
info.show();

selectOptions.addEventListener("change",(event)=>{

    const option = event.target.value;
    info.setStrategy(strategies[option])
    info.show();
});