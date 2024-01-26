const map = new Map()

//insertar información

map.set(2, "Hector")
map.set(9, "Pedro")
map.set(6, "Roberto")
map.set(1, "Carlos")
map.set(10, "Mori")

//Se remplaza automaticamente el valor
console.log(map)
map.set(2, "Panfilo")
console.log(map)

//Obtener un valor
//Se usa el metodo de get con la clave
console.log(map.get(9))

console.log(map.get(109))

// Validar si existe algo , devuelve True o False
console.log(map.has(9))

//Eliminar Valores
console.log(map.delete(9))
console.log(map)



const objetKey = { id: 1, hash: "abs" }
const objetKeySecond = { id: 2, hash: "abs" }


map.set(objetKey, "Pepe")
map.set(objetKeySecond, "Marco")
console.log(map)


console.log(map.get(objetKeySecond))
//Al momento de tener dos objeto con dos referencias y buscar uno de llos, no se encuentra
// como tal dicha referencia

map.set(10, "Pepe").set(5, "Robert")

console.log(map)


//Devolver los valores del map
for (const value of map.values()) {
    console.log(value)
}

//Devolver las llaves del map
for (const key of map.keys()) {
    console.log(key)
}


//Devolver los items del map
for (const item of map) {
    console.log(item)
}

//Eliminar mapa
map.clear()
console.log(map)


let codeInput = document.getElementById("code");
let customerInput = document.getElementById("customer");
let divContnet = document.getElementById("content");
const customers = new Map();


function add(){
    customers.set(codeInput.value,customerInput.value);
    show();
    codeInput.value="";
    customerInput.value="";
    codeInput.focus();
}
function show() {
    divContnet.innerHTML = "";

    for (const item of customers) {
        divContnet.innerHTML += `<div><b>  ${item[0]}</b>  ${item[1]} </div>`;
    }
}
