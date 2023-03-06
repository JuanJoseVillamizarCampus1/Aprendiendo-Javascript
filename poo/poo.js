class animal {

	constructor(kind,age,color){
		this.kind = kind;
		this.age = age;
		this.color = color;
		this.info = `Soy un ${this.kind}, y tengo ${this.age},años, soy de color ${this.color}.`;
	}

	verinfo(){
		document.write(this.info + "<br>")
	
}
}

	const perro = new animal ("perro","5","Amarillo")
	const camuro = new animal ("Camuro","2","negro con blanco")
	const avestruz = new animal ("avestruz","10","rosa")

	perro.verinfo();
	camuro.verinfo();
	avestruz.verinfo();
