//Set a diferencia de map trabaja con un elmento singular, no con clave , valor

const mySet = new Set();

mySet.add(5)
mySet.add(6)
mySet.add(0)
mySet.add(10)

console.log(mySet)

mySet.add({ name: "pepe" })

console.log(mySet)

//metodo para elminar un objeto
mySet.delete()

// existancia
const book = { "name": "Hola compañeros" }

if (mySet.has(5)) {
    console.log("existe")
} else {
    console.log("no existe")
}

mySet.add(book)

const arrreglos = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 5, 6]

const secondSet = new Set(arrreglos)

// secondSet.add(arrreglos)

for (const item of secondSet) {
    console.log(item)

}

//limpiar set

mySet.clear()
console.log(mySet)


//Ejemplo de set
const functions = new Set()

function addActions(fn) {

    functions.add(fn)
    console.log(functions)
}


function action1(){
    console.log("Action1")
}


function action2(){
    console.log("Action2")
}

function action3(){
    console.log("Action3")
}

function action4(){
    console.log("Action4")
}


function run(){
    for (const fn of functions) {
        fn()
        
    }
}