import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class Slider {
	constructor(){
		this.rightArow = $(".right-arrow");
		this.leftArow = $(".left-arrow");
		this.frontSlide = $(".slider__active");
		this.slideRight();
	}

	slideRight(){
		this.rightArow.click(function(){
			var currentSlide = this.frontSlide;
			var nextSlide = currentSlide;

			this.currentSlide.removeClass("slider__active");
		});
	}
}

export default Slider;