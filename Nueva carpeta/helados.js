
/*/perros = ["Beagles", "labradores", "criollos"];

document.write(perros[2])*/


let autos = {
	deportivos: "BMW",
	carreras: "Ferrari",
	lujo:"Bugati",
	buenos: "Mazda"
};

let deportivos = autos["deportivos"];
let carreras = autos["carreras"];
let lujo = autos["lujo"];
let buenos = autos["buenos"];

frase = `el auto deportivo mas caro es: <b>${deportivos}</b> <br>
		 el mejor auto de carreras es: <b>${carreras} </b><br>
		 el auto de lujo mas caro es: <b>${lujo}</b> <br>
		 La mejor marca de autos es: <b>${buenos}</b>`;


document.write(frase);
