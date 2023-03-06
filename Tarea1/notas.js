let cantidad= prompt("¿Cuantos alumnos son?");
let alumnos=[];

for (i = 0; i < cantidad; i++ ) {
	alumnos[i]= [prompt("Cual es tu nombre alumno" + (i+1)),0];
}

const asistencia = (nombre,p)=>{
	let presente = prompt(nombre);
	if (presente=="P" || presente=="p"){
		alumnos[p][1]++;
	}
}

for(i =0; i<30; i++){
	for (alumno in alumnos){
		asistencia(alumnos[alumno][0],alumno);
	}
}
for(alumno in alumnos){
	let resultado=`${alumnos[alumno][0]}:<br>
	________Asistencias:${alumnos[alumno][1]}<br>
	________Ausencias: ${30 - alumnos[alumno][1]}`;
	if (30 - alumnos[alumno][1]>18) {
		resultado+= "<b style='color:red'> REPROBADO POR INASISENCIAS </b><br><br>";
	} ;
	else{
		resultado+= "<br><br>"
	}
	document.write(resultado)
}
