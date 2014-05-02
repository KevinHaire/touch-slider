var currentImage;
var SlideWidth;
var numOfImages;


$(document).ready(function(){

	var images = [
		"http://www.shopmidland.com/microsite/photogallery/10044362.jpg",
    "http://www.mcdonalds.ca/content/dam/Canada/en/Promo/blt/img/burger.png",
    "http://www.discountcar.com/images/cars/large/large-car4.png",
    "http://www.bestbuy.ca/multimedia/Products/500x500/102/10218/10218592.jpg",
    "http://www.colliertax.com/images/boat.jpg",
    "http://go-tire.com/images/display/117/tires-provo-utah.jpg"
	];

	numOfImages = images.length;

	for (var i = 0; i < numOfImages; i++) {
  	$('#slider1 .slideContainer').append('<div class="slide"><img src="'+images[i]+'"><span>'+i+'</span></div>');
	}  

	slideWidth = ($('.slideContainer').width()/numOfImages)/$('.slideContainer').width()*100;
	$('.slideContainer').css('width', numOfImages*100+'%');
	$('.slide').css('width', slideWidth+'%');
	
	currentImage = 0;

	$('.left').click(function(){
		moveLeft();
	})

	$('.right').click(function(){
		moveRight();
	})



//FUNCTIONS

	//Init touch swipe
	$('.slide').swipe( {
		triggerOnTouchEnd : true,
		swipeStatus : swipeStatus,
		allowPageScroll:"vertical"
	});

	function slideImage(slideWidth, currentImage)
	{
		// console.log("-"+slideWidth*currentImage+"%")
		$('.slideContainer').css("-webkit-transform", "translateX(-"+slideWidth*currentImage+"%)");
	}

	

	function swipeStatus(event, phase, direction, distance, fingers){
		if ( phase =="end" )
		{
			if (direction == "left"){
				moveRight();
			}	
			else if (direction == "right"){
				moveLeft();
			}
		}
	}

	function moveLeft() {
		if (currentImage >= 1) {
			currentImage--;
			slideImage(slideWidth, currentImage);		
		}
	}

	function moveRight() {
		if (currentImage != numOfImages-1) {
			currentImage++;
			slideImage(slideWidth, currentImage);
		}
	}

;})
