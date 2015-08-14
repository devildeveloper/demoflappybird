var Demo=function(){
	var name='';
	var email='';
	var point=0;
	
	function setName(){
		var tokenName=window.prompt('ingrese su nombre');
		if(isNaN(tokenName)){
			this.name=tokenName;
		}else{
			this.setName();
		}
	};
	function getName(){
		return this.name;
	}



	function setPoint(pts){
		this.point=pts;
	};
	function getPoint(){
		return this.point;
	}


	function setEmail(){
		var tokenEmail=window.prompt('ingrese su correo');
		if(isNaN(tokenEmail)){
			this.email=tokenEmail;
		}else{
			this.setEmail();
		}
	};
	function getEmail(){
		return this.email;
	}


	function register(){
		$.ajax({
			url:'http://localhost:1337/flappy/create', //la url para que guarde nombres
			method:'POST',
			data:{
				nom:this.getName(),
				mail:this.getEmail(),
				pts:this.getPoint()
			}
		})		
	}


	return {
		setName : setName,
		getName : getName,

		setPoint: setPoint,
		getPoint: getPoint,

		setEmail: setEmail,
		getEmail: getEmail,

		register: register
	}
}

var demo = new Demo();

