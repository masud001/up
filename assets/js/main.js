$(document).ready(function () {
	// hero slider for home page end
	$(".hero_slider").owlCarousel({
		loop: true,
		autoplay: false,
		dots: true,
		autoHeight: true,
		nav: true,
		navText: [
			"<i class='fas fa-arrow-left'></i>",
			"<i class='fas fa-arrow-right'></i>",
		],
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});
	// hero slider for home page start
	// blog_slider for home page end
	$(".blog_slider").owlCarousel({
		loop: true,
		autoplay: false,
		dots: false,
		nav: true,
		navText: [
			"<i class='fas fa-arrow-left'></i>",
			"<i class='fas fa-arrow-right'></i>",
		],
		margin: 15,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
		},
	});
	// blog_slider for home page start
	// arrived_slider home page end
	$(".arrived_slider").owlCarousel({
		loop: true,
		autoplay: false,
		dots: false,
		nav: true,
		navText: [
			"<i class='fas fa-arrow-left'></i>",
			"<i class='fas fa-arrow-right'></i>",
		],
		margin: 15,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
		},
	});
	// arrived_slider for home page start
	// wine_of_weeks home page end
	$(".wine_of_weeks_slider").owlCarousel({
		loop: true,
		autoplay: false,
		dots: false,
		nav: true,
		navText: [
			"<i class='fas fa-arrow-left'></i>",
			"<i class='fas fa-arrow-right'></i>",
		],
		margin: 15,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
		},
	});
	// wine_of_weeks for home page start
	// wine_advocate_slider home page start
	$(".wine_advocate_slider").owlCarousel({
		loop: true,
		autoplay: false,
		dots: false,
		nav: true,
		navText: [
			"<i class='fas fa-arrow-left'></i>",
			"<i class='fas fa-arrow-right'></i>",
		],
		margin: 15,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
		},
	});
	// wine_advocate_slider for home page end
	// customar details page testimonials slider start
	$(".testimonial_slider_wrapper").owlCarousel({
		center: true,
		items: 3,
		loop: true,
		margin: 10,
		responsive: {
			600: {
				items: 4,
			},
		},
	});
	// customar details page testimonials slider end
	// video play button youtube video play

	//
	$(".video_play_btn").magnificPopup({
		type: "iframe",
		iframe: {
			markup:
				'<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				"</div>", // HTML markup of popup, `mfp-close` will be replaced by the close button

			patterns: {
				youtube: {
					index: "youtube.com/", // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

					id: "v=", // String that splits URL in a two parts, second part should be %id%
					// Or null - full URL will be returned
					// Or a function that should return %id%, for example:
					// id: function(url) { return 'parsed id'; }

					src: "//www.youtube.com/embed/%id%?autoplay=1", // URL that will be set as a source for iframe.
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1",
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed",
				},

				// you may add here more sources
			},

			srcAction: "iframe_src", // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
		},
		// other options
	});
});
