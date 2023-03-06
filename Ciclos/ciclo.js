/*/let num = 0;

while (num < 7){
	num++;
	document.write(num)
	if (num ==5){
		break;
	}
}
/*/

/*/for (let i = 10; i > 5; i--) {
	document.write(i+"<br>")
}
/*/
/*/let nombres = ["sacha", "pocho", "ache", "blanco"]

for (nombre in nombres){
	document.write(nombres[3]);
}/*/
array1 =["Martha","Coruma","Cheja"];
array2=["Anju","Godie",array1,"otro"];


forRancio:
for (let array in array2){
	if(array == 2){

		for(let array of array1){
			continue forRancio;
			document.write(array + "<br>");

		}
	}else{
		document.write(array2[array]+ "<br>")
	}
}