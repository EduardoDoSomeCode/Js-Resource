class SingletonTS{
    private static instance:SingletonTS;
    public random :number;

    private constructor(){
        this.random = Math.random();

    }

    public static getInstance(): SingletonTS{
        if(!this.instance){
            this.instance = new SingletonTS();
        }

        return this.instance;
    }
}


// Al momento de crear un singleton en Typescript se necesita  traer el instancia
// const mySingleton = new SingletonTS();
const mySingleton = SingletonTS.getInstance();
const mySingleton2 =SingletonTS.getInstance();


console.log(mySingleton.random)
console.log(mySingleton2.random)
