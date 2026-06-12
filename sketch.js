let chamarra = 0;
let playera = 0;
let pantalon = 0;
let ropainterior = 0;
let zapatos = 0;





function setup() 
{
	createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw()
{
textSize(80);
fill(0);
textFont("Timmes New Roman"); 

text("s/agua", width/2, 100);
text("¿Cuántas prendas traes el día de hoy?" ,400, height/2);
text("chamarra", 400, height/2 + 100);

// Desactivar texto sugerido y buscar en referencias de p5.js input text.
// sustituir valores de variables.
// condicionales. 
text("_", 400, height/2 + 200);

}
