$(document).ready(function () {
	// auto complete in search dropdown menu START
	//code = 2k minified

	function createAuto(i, elem) {
		var input = $(elem);
		var dropdown = input.closest(".dropdown");
		var dropdownmenu = dropdown.find(".dropdown-menu");
		var listContainer = dropdown.find(".list-autocomplete");
		var listItems = listContainer.find(".search-item");
		var hasNoResults = dropdown.find(".hasNoResults");

		listItems.hide();
		listItems.each(function () {
			$(this).data("value", $(this).text());
			//!important, keep this copy of the text outside of keyup/input function
		});

		input.on("input", function (e) {
			if ((e.keyCode ? e.keyCode : e.which) == 13) {
				$(this)
					.closest(".dropdown")
					.removeClass("show")
					.removeClass("in");
				return; //if enter key, close dropdown and stop
			}
			if ((e.keyCode ? e.keyCode : e.which) == 9) {
				return; //if tab key, stop
			}

			var query = input.val().toLowerCase();

			if (query.length > 1) {
				dropdown.addClass("show").addClass("in");
				dropdownmenu.addClass("show");

				listItems.each(function () {
					var text = $(this).data("value");
					if (text.toLowerCase().indexOf(query) > -1) {
						var textStart = text.toLowerCase().indexOf(query);
						var textEnd = textStart + query.length;
						var htmlR =
							text.substring(0, textStart) +
							"<div class='d-flex justify-content-between'>" +
							text.substring(textStart, textEnd) +
							text.substring(textEnd + length) +
							"</div>";

						$(this).html(htmlR);
						$(this).show();
					} else {
						$(this).hide();
					}
				});

				var count = listItems.filter(":visible").length;
				count > 0 ? hasNoResults.hide() : hasNoResults.show();
			} else {
				listItems.hide();
				dropdown.removeClass("show").removeClass("in");
				dropdownmenu.removeClass("show");
				hasNoResults.show();
			}
		});

		listItems.on("click", function (e) {
			var txt = $(this)
				.text()
				.replace(/^\s+|\s+$/g, ""); //remove leading and trailing whitespace
			input.val(txt);
			dropdown.removeClass("show").removeClass("in");
			dropdownmenu.removeClass("show");
		});
	}

	$(".jAuto").each(createAuto);

	$(document).on("focus", ".jAuto", function () {
		$(this).select(); // in case input text already exists
	});
	// auto complete in search dropdown menu END

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
	// wine_advocate_slider home page end
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
	// wine_advocate_slider for home page start

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

const preloader = document.querySelector(".preloader");

const fadeEffect = setInterval(() => {
	// if we don't set opacity 1 in CSS, then   //it will be equaled to "", that's why we   // check it
	if (!preloader.style.opacity) {
		preloader.style.opacity = 1;
	}
	if (preloader.style.opacity > 0) {
		preloader.style.opacity -= 0.1;
	} else {
		clearInterval(fadeEffect);
	}
}, 200);

window.addEventListener("load", fadeEffect);
