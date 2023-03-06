/*/function saludar() {
	

respuesta = prompt("¡Hola como estas!");
if (respuesta == "bien") 
{
	alert("me alegro")
}
else
{
	alert("Que mal");
}
}
saludar()/*/

/*/function sum(num1,num2) {
	let rest = num1 + num2;
	document.write(rest);
	document.write("<br>")
}

sum(12,32)
sum(25,45)/*/
/*/function sumar(num1,num2) {
	let res = num2 + num1;
	return res;
}

let resultado = sumar(20,45)
document.write(resultado)/*/

// let nombre = prompt("¿Hola, como es tu nombre?")
// function saludar(nombre) {
	// let sal = `Hola¡ ${nombre}! como estas?`;
	// document.write(sal)
// }
// 
// saludar(nombre)

const saludar = (nombre) => { document.write("Hola como estas?" + nombre);
}
saludar(" pedro")