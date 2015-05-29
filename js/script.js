
$(document).ready(function() {

	var $lumuFrames = $('#frame-list li');

	for (var i = 1; i <= $lumuFrames.length; i++) {
		$lumuFrames.removeClass('active');
	}

	if ($(window).width() > 768) {

		$lumuFrames.eq(0).addClass('active');

		var controller = $.superscrollorama();		

		controller.addTween('#light-meter',
			TweenMax.fromTo( $('#traveling-lumu'), .5, 
				{css:{top: 0}, immediateRender:true}, 
				{css:{top: 302}}), // change the final top position
			440, // length of scrolling
			100);  //scrolling Y offset 

		controller.addTween('#light-meter',
			TweenMax.to( $('#iphone-screen-2'), .5, 
				{css:{opacity: 1}, immediateRender:true}), 
			0, 
			530);

		// var steps_offset = -100;

		// controller.addTween('#step1', (new TimelineLite)
		// 	.to('#step-circle-outer', .5, {
		// 		top: 250
		// 	}).to('#step-circle-outer', .1, {
		// 		top: 251
		// 	}).to('#step-circle-outer', .5, {
		// 		top: 500
		// 	}).to('#step-circle-outer', .1, {
		// 		top: 501
		// 	}).to('#step-circle-outer', .5, {
		// 		top: 750
		// 	}), 750, steps_offset);

		// controller.addTween('#step1', (new TimelineLite)
		// 	.to('#step1-left', .4, {
		// 		opacity: 1
		// 	}).to('#step1-left', .1, {
		// 		opacity: 1
		// 	}).to('#step1-left', .4, {
		// 		opacity: 0
		// 	}), 500, steps_offset);

		// controller.addTween('#step2', (new TimelineLite)
		// 	.to('#step2-left', .4, {
		// 		opacity: 1
		// 	}).to('#step2-left', .1, {
		// 		opacity: 1
		// 	}).to('#step2-left', .4, {
		// 		opacity: 0
		// 	}), 500, steps_offset);

		// controller.addTween('#step3', (new TimelineLite)
		// 	.to('#step3-left', .4, {
		// 		opacity: 1
		// 	}).to('#step3-left', .1, {
		// 		opacity: 1
		// 	}), 250, steps_offset);	


		// // New lumu process
		
		// controller.addTween('#step11',
		// 	TweenMax.to( $('#step-subject'), .5, 
		// 		{css:{opacity: 0}}), 
		// 	0, 
		// 	150);	

		// controller.addTween('#step11',
		// 	TweenMax.fromTo( $('#step-lumu'), .5, 
		// 		{css:{top: 0}, immediateRender:true}, 
		// 		{css:{top: 300, left:-95}}), 
		// 	0, 
		// 	150);	

		// controller.addTween('#step22',
		// 	TweenMax.fromTo( $('#flip-camera'), .5,
		// 		{css:{opacity: 0, left: 0}, immediateRender:true},
		// 		{css:{opacity: 1, left: 100}}), 
		// 	0, 
		// 	-150);

		// controller.addTween('#step22', (new TimelineLite)
		// 	.to('#step-arrow', .7, {
		// 		opacity: 1, left: 95
		// 	}), 0, -150);

		// controller.addTween('#step22', (new TimelineLite)
		// 	.to('#step-arrow', .7, {
		// 		opacity: 0
		// 	}), 0, 100);

		// controller.addTween('#step33',
		// 	TweenMax.to( $('#step-lumu'), .5, 
		// 		{css:{opacity: 0}, immediateRender:true}), 
		// 	0, 
		// 	-200);

		// controller.addTween('#step33',
		// 	TweenMax.fromTo( $('#flip-camera'), .5,
		// 		{css:{top: 0, left: 100}},
		// 		{css:{top: 360, left: 40}}), 
		// 	0, 
		// 	-200);

		// controller.addTween('#step33',
		// 	TweenMax.to( $('#step-subject-2'), .5, 
		// 		{css:{opacity: 1}}), 
		// 	0, 
		// 	-200);


		$(window).resize(function() {

		 // Stuff in here happens on ready and resize.

		 // var cf_offset = $(window).height() * 220/800;

		 // controller.removeTween('#cf');

		 // controller.addTween('#cf', TweenMax.to( $('#cf_top'), .5, {css:{opacity: 0}}), 0, cf_offset);
		 // controller.addTween('#cf', TweenMax.to( $('#effect-from-text'), .5, {css:{opacity: 0}}), 0, cf_offset);
		 // controller.addTween('#cf', TweenMax.to( $('#effect-to-text'), .5, {css:{opacity: 1}}), 0, cf_offset);


	}).resize(); // Trigger resize handlers.      

	} else {
		// $('#step1-left').css({opacity: 1});
		// $('#step2-left').css({opacity: 1});
		// $('#step3-left').css({opacity: 1});
	} 

});//ready
