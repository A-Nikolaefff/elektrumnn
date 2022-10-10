//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
}

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}

let slider_main_banner = new Swiper('.slider-main-banner__body', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false,
	},
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 800,
	pagination: {
		el: '.slider-main-banner__pagination',
		clickable: true,
	},
});

let product__big_slider = new Swiper('.slider-photo__big-slider-body', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 900,
	thumbs: {
		swiper: {
			el: '.slider-photo__small-slider-body',
			slidesPerView: 5,
			spaceBetween: 5,
			autoHeight: false,
			centerInsufficientSlides: true,
			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 5,
					autoHeight: true,
				},
				400: {
					slidesPerView: 4,
					spaceBetween: 5,
				},
				500: {
					slidesPerView: 5,
					spaceBetween: 5,
				},
				600: {
					slidesPerView: 6,
					spaceBetween: 5,
				},
				700: {
					slidesPerView: 7,
					spaceBetween: 5,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 5,
				},
			},
		}
	},
	navigation: {
		nextEl: '.slider-photo__big-slider-button_next',
		prevEl: '.slider-photo__big-slider-button_prev',
	},
	on: {
		lazyImageReady: function () {
			ibg();
		},
	}
});

let big_slider1 = new Swiper('.slider-photo__big-slider-body1', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 900,
	thumbs: {
		swiper: {
			el: '.slider-photo__small-slider-body1',
			slidesPerView: 5,
			spaceBetween: 5,
			autoHeight: false,
			centerInsufficientSlides: true,
			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 5,
					autoHeight: true,
				},
				400: {
					slidesPerView: 4,
					spaceBetween: 5,
				},
				500: {
					slidesPerView: 5,
					spaceBetween: 5,
				},
				600: {
					slidesPerView: 6,
					spaceBetween: 5,
				},
				700: {
					slidesPerView: 7,
					spaceBetween: 5,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 5,
				},
			},
		}
	},
	navigation: {
		nextEl: '.slider-photo__big-slider-button_next1',
		prevEl: '.slider-photo__big-slider-button_prev1',
	},
});

let big_slider2 = new Swiper('.slider-photo__big-slider-body2', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 900,
	thumbs: {
		swiper: {
			el: '.slider-photo__small-slider-body-2',
			slidesPerView: 5,
			spaceBetween: 5,
			autoHeight: false,
			centerInsufficientSlides: true,
			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 5,
					autoHeight: true,
				},
				400: {
					slidesPerView: 4,
					spaceBetween: 5,
				},
				500: {
					slidesPerView: 5,
					spaceBetween: 5,
				},
				600: {
					slidesPerView: 6,
					spaceBetween: 5,
				},
				700: {
					slidesPerView: 7,
					spaceBetween: 5,
				},
				768: {
					slidesPerView: 7,
					spaceBetween: 5,
				},
			},
		}
	},
	navigation: {
		nextEl: '.slider-photo__big-slider-button_next2',
		prevEl: '.slider-photo__big-slider-button_prev2',
	},
});

let big_slider3 = new Swiper('.slider-photo__big-slider-body3', {
	observer: true,
	observeParents: true,
	slidesPerView: 1,
	spaceBetween: 0,
	autoHeight: true,
	speed: 900,
	thumbs: {
		swiper: {
			el: '.slider-photo__small-slider-body3',
			slidesPerView: 5,
			spaceBetween: 5,
			autoHeight: false,
			centerInsufficientSlides: true,
			breakpoints: {
				320: {
					slidesPerView: 3,
					spaceBetween: 5,
					autoHeight: true,
				},
				400: {
					slidesPerView: 4,
					spaceBetween: 5,
				},
				500: {
					slidesPerView: 5,
					spaceBetween: 5,
				},
				600: {
					slidesPerView: 6,
					spaceBetween: 5,
				},
				700: {
					slidesPerView: 7,
					spaceBetween: 5,
				},
				768: {
					slidesPerView: 4,
					spaceBetween: 5,
				},
			},
		}
	},
	navigation: {
		nextEl: '.slider-photo__big-slider-button_next3',
		prevEl: '.slider-photo__big-slider-button_prev3',
	},
});