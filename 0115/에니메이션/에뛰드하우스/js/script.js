jQuery(document).ready(function(){

	if(!Modernizr.csstransitions) {//최신 브라우저가 아니라면,
		var timeInterval = 1000;
		
		function animateForSide(el) {
			var randomDelayTime = Math.random() * 3000; /* 0 through 9 */
			el.animate({opacity:'0.5'},'slow','swing');
			el.delay(randomDelayTime);
			el.animate({opacity:'1'},'slow','swing');
	
		}
		
		function temp() {
			animateForSide($('#side .secondLine .specialCube'));
			animateForSide($('#side .thirdLine .specialCube'));
			animateForSide($('#side .fourthLine .specialCube'));
			animateForSide($('#side .fifthLine .specialCube'));
			animateForSide($('#side .sixthLine .specialCube'));
			animateForSide($('#side .topLine .specialCube'));
		}
		
		function animateInfi() {
				var timer = setInterval(temp, timeInterval);
		}
		
		animateInfi();
		
		
	}
	
});
