//Crear una funcion , como parametro un arreglo de pelicuals con las caracteristicas
// titulo
// director
// vista
//  devuelva el mensaje de  Ya has visto "....."  en caso de que la pelicula haya sido vista
//  devuelva el mensaje de  Te falta ver "....."  en caso de que la pelicula haya sido vista 


const moviesToWatch = [
    {
        titulo: "Lord of the rings",
        director: "Sombody",
        vista: false,
    },
    {
        titulo: "Justice League",
        director: "Zack Snider",
        vista: true,
    },
    {
        titulo: "Toy Story",
        director: "Pixar",
        vista: false,
    },
]

const checkViewMovies = (movieArray) => {
    
    const newMovies = []
   
    for(let movie of movieArray){
        
        if(movie.vista === true){
        newMovies.push( ` Ya has visto :${movie.titulo} del director ${movie.director}`)

        }else{
            newMovies.push( ` Te falta ver :${movie.titulo} del director ${movie.director}`)
            
        }


    }

    return newMovies

}


console.log(checkViewMovies(moviesToWatch))