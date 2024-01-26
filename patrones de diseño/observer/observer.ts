interface IObserver<T>{
    refresh(value : T) : void;

}

interface ISubject<T>{
    
    OBSERVERS:IObserver<T>[];

    subscribe(observer: IObserver<T>) : void;
    unsubscribe(observer:IObserver<T>) : void;
    notify(value:T):void;

}


class Subject<T> implements ISubject<T>{
    observers : IObserver<T>[];

    constructor(){
        this.observers=[];
    }
    OBSERVERS: IObserver<T>[];

    subscribe(observer: IObserver<T>){
        this.observers.push(observer);
    }

    unsubscribe(observer:IObserver<T>){
        this.observers = this.observers.filter((obs) => obs !== observer);

    }

    notify(value:T){
        this.observers.forEach(e =>{
            e.refresh(value);
        })

    }
}

class Observer<T> implements IObserver<T>{
    private fn: (value: T) => void;

    constructor(fn:(value: T) => void){
        this.fn = fn;
    }

    refresh(value:T):void{
        this.fn(value);
    }
}

const subjet = new Subject<Number>();
const obs = new Observer<Number>((n) =>{
    console.log(`Hello ${n}`)
})

subjet.subscribe(obs);
subjet.notify(1.2);
subjet.notify(3);