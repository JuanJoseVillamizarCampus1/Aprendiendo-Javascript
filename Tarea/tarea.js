let free = false;

const validarEdad = (time)=>{
	let edad = prompt("¿Cual es tu edad?");
	if (edad>17){
		if(time>=2 && time <7 && free==false){
			alert("Podes pasar gratis papu porque sos la primer persona en pasar despues de las 2AM")
			free= true;
		}
			else{
				alert(`Son las ${time}hrs podes pasar pero debes pagar tigre`);
			}
	}else{
		alert("Mira papu, sos menor de edad por ende no puedes entrar");
	}
}
validarEdad(23);
validarEdad(24);
validarEdad(1);
validarEdad(2);
validarEdad(3);
validarEdad(0.2);
validarEdad(0.6);
validarEdad(2.4);
validarEdad(5);