import	$ from 'jquery';

class Slider {
	constructor(){
		$(".right-arrow").click(function(){
			var currentSlide = $(".slider__active");
			var nextSlide = currentSlide.next();

			currentSlide.fadeOut(300).removeClass("slider__active");
			nextSlide.fadeIn(300).addClass("slider__active");

			if(nextSlide.length == 0) {
				$('.slider__slide').first().fadeIn(300).addClass('slider__active');
			}
		});

		$('.left-arrow').click(function(){
			var currentSlide = $(".slider__active");
			var prevSlide = currentSlide.prev();

			currentSlide.fadeOut(300).removeClass('slider__active');
			prevSlide.fadeIn(300).addClass('slider__active');

			if(prevSlide.length == 0) {
				$('.slider__slide').last().fadeIn(300).addClass('slider__active');
			}
		});
	}

}

export default Slider;