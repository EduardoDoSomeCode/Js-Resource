class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.head = null

    }
}


class DoubleLinkList {
    constructor() {
        this.head = null;
        this.next = null;
        this.length = 0;
    }

    add(value) {
        this.length++;
        const node = new Node(value)

        if (this.head === null) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
    }
    show() {
        let current = this.head

        console.log("*********************************");
        console.log(`Cabeza ${this.head?.value}`);
        console.log(`Cola ${this.tail?.value}`);

        while (current !== null) {
            console.log(`Valor : ${current.value} Siguiente: ${current.next?.value} Anterior: ${current.prev?.value}`)
            current = current.next


        }

    }
    reverse() {
        let current = this.tail

        console.log("*********************************");
        console.log(`Cabeza ${this.head?.value}`);
        console.log(`Cola ${this.tail?.value}`);

        while (current !== null) {
            console.log(`Valor : ${current.value} Siguiente: ${current.next?.value} Anterior: ${current.prev?.value}`)
            current = current.prev


        }

    }
    clear() {
        this.head = null;
        this.tail = null;
    }

    delete(value){
        if(this.length === 0) return;

        if(this.head.value === value){
            if(this.length === 1){
                this.head = null
                this.tail = null
            }else{
                this.head = this.head.next
                this.head.prev = null
            }

            this.length--
        }else if(this.tail.value === value){
                this.tail  = this.tail.prev;
                this.tail.next = null
                this.length--

        }else{
            let current = this.head;

            while(current.next !== null){
                if(current.next.value === value){

                    current.next = current.next.next
                    current.next.prev = current;
                    this.length--
                    break;
                }
                current = current.next
            }
        }

    }
}


// const musiList = new DoubleLinkList();

// musiList.add("A")
// musiList.add("B")
// musiList.add("C")


// musiList.show()

// // musiList.delete("C")
// // musiList.delete("C")

// // musiList.show()

// musiList.reverse()


const titleMovie = document.getElementById("title")
const imageMovie = document.getElementById("image")
const infoMovie = document.getElementById("info")

const movieDoubleLinklist = new DoubleLinkList()

movieDoubleLinklist.add({ name: "Avenger", picture: "img/avenger.jpg" })
movieDoubleLinklist.add({ name: "SpiderMan", picture: "img/spiderman.jpg" })
movieDoubleLinklist.add({ name: "Ironman", picture: "img/ironman.jpg" })

movieDoubleLinklist.show()
let movie = movieDoubleLinklist.head

const showMovie =()=>{
    titleMovie.innerText = movie.value.name
    imageMovie.src = movie.value.picture


    const movieNext = movie.next?.value
    const moviePrev = movie.prev?.value

    infoMovie.innerHTML = (moviePrev ? `Anterior: ${moviePrev.name}` : "No hay anterior")
    infoMovie.innerHTML += (movieNext ? `| Siguiente: ${movieNext.name}` : " | No hay  pelicula siguiente")

}
showMovie()

const prevMovie =()=>{
    if(movie.next){
        movie= movie.next
        showMovie()
    }
}

const nextMovie =()=>{

    if(movie.prev){
        movie = movie.prev
        showMovie()
    }
}