// Dibujar un cuadrado hueco con asteriscos

const drawRectangle = (valueRect) => {


    let rectDrawing = ""
    // Altura del cuadrado
    for (let i = 0; i < valueRect; i++) {
// Anchura del cuadrado
        for (let j = 0; j < valueRect; j++) {

            //Compronar si es columna o si es  fila,
            //Comprobara si esta en la ultima fila o primera fila

            if (i === 0 || i === valueRect - 1 || j === 0 || j === valueRect - 1) {
                rectDrawing += " " + "#" + " ";
            } else {
                rectDrawing += " " + " " + " "; // Espacio interno
            }


        }


        rectDrawing += "\n"

    }
    return rectDrawing

}



console.log(drawRectangle(8))
