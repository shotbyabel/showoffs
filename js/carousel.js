var Carousel = function(){

	var carousel =  this;
	var wrapper = carousel.children[0];
	var slides = wrapper.children;
	var leftBtn = document.createElement('div');
	var rightBtn = document.createElement('div');
	var position = 0;

	//var leftBtn = document.createElement('div');
	//var rightBtn = document.createElement('div');


	var width = window.innerWidth;
	wrapper.style.width = width  * slides.length + "px";

	this.animate = function(){

		var count = 0;

	setInterval(function (){
		wrapper.style.left = count* (window.innerWidth*-1)+"px";
		count = count +1;
		if(count === slides.length){
			count = 0;
		}
		console.log(count);

	},3500)	

	};

	this.createButtons = function(){

		leftBtn.classList.add('left');
		rightBtn.classList.add('right');

		leftBtn.addEventListener('mousedown', function(){
			position = position + window.innerWidth;
			wrapper.style.marginLeft = position + "px";
			console.log(position);
		});

		rightBtn.addEventListener('mousedown', function(){
			position = position - window.innerWidth;
			wrapper.style.marginLeft = position + "px";

		});


		carousel.appendChild(leftBtn);
		carousel.appendChild(rightBtn);


	};


	this.resize = function(){
		wrapper.style.width = width  * slides.length + "px";
		
		for(var index=0; index < slides.length; index++){
		slides[index].style.width = width + "px";	
	
		}

		//leftBtn.style.top = rightBtn.style.top = (window.innerHeight / 2) + "px";
		

	};

	this.createButtons();
	this.resize();
	this.animate();

	
};
/* end Slider */
