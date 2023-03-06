
dineromaria = prompt("cuanto dinero tienes Maria?");
dinerojuan = prompt("cuanto dinero tienes Juan?");
dineroraul = prompt("cuanto dinero tienes Raul?");

dineromaria = parseInt(dineromaria);

if (dineromaria >= 0.6 && dineromaria < 1){
	alert("Maria comprate el helado de agua");
	alert("Maria te sobra" + (dineromaria - 0.6));
}

else if (dineromaria >= 1 && dineromaria < 1.6){
	alert("Maria comprate el helado de crema");
	alert("Maria te sobra" + (dineromaria - 1));
}

else if(dineromaria >=1.6 && dineromaria<1.7){
	alert("Maria comprate el helado de heladix");
	alert("Maria te sobra" + (dineromaria - 1.6));
}

else if(dineromaria >=1.7 && dineromaria<1.8) {
	alert("Maria comprate el helado heladovich");
	alert("Maria te sobra" + (dineromaria - 1.7));
}
else if (dineromaria>=1.8 && dineromaria<2.9) {
	alert("Maria compre el helado helardo");
	alert("Maria te sobra" + (dineromaria - 1.8));
}
else if(dineromaria>=2.9){
	alert("Maria comprate el helado de confites o el pote de 1/4 KG");
	alert("Maria te sobra" + (dineromaria - 2.9));
}

else {
	alert("Maria Lo siento no tienes suficiento dinero para un helado")
}

if(dinerojuan >= 0.6 && dinerojuan <1){
	alert("Juan comprate el helado de agua");
}

else if (dinerojuan >=1 && dinerojuan<1.6){
	alert("Juan comprate el helado de crema");
}

else if(dinerojuan >=1.6 && dinerojuan<1.7){
	alert("Juan comprate el helado de heladix")
}

else if(dinerojuan >=1.7 && dinerojuan<1.8) {
	alert("Juan comprate el helado heladovich")
}
else if (dinerojuan>=1.8 && dinerojuan<2.9) {
	alert("Juan compre el helado helardo")
}
else if(dinerojuan>=2.9){
	alert("Juan comprate el helado de confites o el pote de 1/4 KG")
}

else {
	alert("Juan Lo siento no tienes suficiento dinero para un helado")
}

if(dineroraul >= 0.6 && dineroraul <1){
	alert("raul comprate el helado de agua");
}

else if (dineroraul >=1 && dineroraul<1.6){
	alert("raul comprate el helado de crema");
}

else if(dineroraul >=1.6 && dineroraul<1.7){
	alert("raul comprate el helado de heladix")
}

else if(dineroraul >=1.7 && dineroraul<1.8) {
	alert("raul comprate el helado heladovich")
}
else if (dineroraul>=1.8 && dineroraul<2.9) {
	alert("raul compre el helado helardo")
}
else if(dineroraul>=2.9){
	alert("raul comprate el helado de confites o el pote de 1/4 KG")
}

else {
	alert("raul Lo siento no tienes suficiento dinero para un helado")
}