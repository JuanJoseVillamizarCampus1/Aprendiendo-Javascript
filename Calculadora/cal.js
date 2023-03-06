const suma = (num1,num2)=>{
	return parseInt(num1) + parseInt(num2);
}
const resta = (num1,num2)=>{
	return parseInt(num1) - parseInt(num2);
}
const multiplicacion = (num1,num2)=>{
	return parseInt(num1) * parseInt(num2);
}
const division = (num1,num2)=>{
	return parseInt(num1) / parseInt(num2);
}

alert("¿Que operacion deseas realizar?");
let operacion = prompt("1: suma, 2: resta, 3: multiplicacion, 4:division");
if (operacion == 1) {
	let numero1 = prompt("pimer numero para sumar");
	let numero2 = prompt("segundo numero para sumar");
	resultado = suma(numero1,numero2);
	alert(`tu resultado es ${resultado}`);
}


else if (operacion == 2) {
	let numero1 = prompt("pimer numero para restar");
	let numero2 = prompt("segundo numero para restar");
	resultado = resta(numero1,numero2);
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
	let numero1 = prompt("pimer numero para multiplicar");
	let numero2 = prompt("segundo numero para multiplicar");
	resultado = multiplicacion(numero1,numero2);
	alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
	let numero1 = prompt("pimer numero para dividir");
	let numero2 = prompt("segundo numero para dividir");
	resultado = division(numero1,numero2);
	alert(`tu resultado es ${resultado}`);
}
else{
	alert("operacion no encontrada")
}


