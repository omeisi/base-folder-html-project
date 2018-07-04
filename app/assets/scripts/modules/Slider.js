import	$ from 'jquery';

class Slider {
	constructor(){
		$(".right-arrow").click(function(){
			var currentSlide = $(".tech__container-active");
			var nextSlide = currentSlide.next();

			currentSlide.fadeOut(300).removeClass("tech__container-active");
			nextSlide.fadeIn(300).addClass("tech__container-active");

			if(nextSlide.length == 0) {
				$(".tech__container").first().fadeIn(300).addClass("tech__container-active");
			}
		});

		$(".left-arrow").click(function(){
			var currentSlide = $(".tech__container-active");
			var prevSlide = currentSlide.prev();

			currentSlide.fadeOut(300).removeClass("tech__container-active");
			prevSlide.fadeIn(300).addClass("tech__container-active");

			if(prevSlide.length == 0) {
				$(".tech__container").last().fadeIn(300).addClass("tech__container-active");
			}
		});
	}

}

export default Slider;