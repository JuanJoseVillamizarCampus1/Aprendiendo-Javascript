class phones{
	builder(color, weight, rdp, rdc, ram){
		this.color = color;
		this.weight = weight;
		this.resolutionScreen= rdp;
		this.resolutionDeCamera = rdc;
		this.ramm = ram; 
		this.power = true;
	}
	powerbuttom(){
		if (this.power == true){
			alert("phone on");
			this.power = false;
		} else{
			alert("phone off")
		}
	}

	restart()
		{

		if (this.power == false)
		{
			alert("restart phone");
		}
		else
		{
			alert("phone off")
		}
	}
	photo(){
		alert(`Photo taken at a resolution ${this.resolutionDeCamera}`)
	}
	video(){
		alert(`Recording video in a resolution ${this.resolutionDeCamera}`)
	}
}
