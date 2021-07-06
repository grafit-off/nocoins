// swiperMobile
let swiperSimpleMobileInit = () => {
	if (window.innerWidth <= 768 && swiperSimpleSelector.dataset.mobile === "false") {
		swiperSimple = new Swiper(swiperSimpleSelector, {
			containerModifierClass: "swiper",
			wrapperClass: "swiper__wrapper",
			slideClass: "swiper__slide",
			loop: true,
			spaceBetween: 15,
			pagination: {
				el: ".swiper__pagination",
				clickable: true,
				bulletElement: 'button',
				bulletClass: 'swiper-pagination-bullet btn-reset'
			},
			a11y: {
				paginationBulletMessage: 'Перейти к слайду {{index}}',
			},
			breakpoints: {
				300: {
					slidesPerView: 1.3,
				},
				450: {
					slidesPerView: 1.8,
				},
			},
		});
		swiperSimpleSelector.dataset.mobile = "true";
	}
	if (window.innerWidth > 768) {
		swiperSimpleSelector.dataset.mobile = "false";
		if (swiperSimpleSelector.classList.contains('swiperinitialized')) {
			swiperSimple.destroy();
		}
	}
};
swiperSimpleMobileInit();


let swiperPlatformMobileInit = () => {
	if (window.innerWidth <= 768 && swiperPlatformSelector.dataset.mobile === "false") {
		swiperPlatform = new Swiper(swiperPlatformSelector, {
			containerModifierClass: "swiper",
			wrapperClass: "swiper__wrapper",
			slideClass: "swiper__slide",
			loop: true,
			spaceBetween: 15,
			pagination: {
				el: ".swiper__pagination",
				clickable: true,
				bulletElement: 'button',
				bulletClass: 'swiper-pagination-bullet btn-reset'
			},
			a11y: {
				paginationBulletMessage: 'Перейти к слайду {{index}}',
			},
			breakpoints: {
				300: {
					slidesPerView: 1.3,
				},
				450: {
					slidesPerView: 1.8,
				},
			},
		});
		swiperPlatformSelector.dataset.mobile = "true";
	}
	if (window.innerWidth > 768) {
		swiperPlatformSelector.dataset.mobile = "false";
		if (swiperPlatformSelector.classList.contains('swiperinitialized')) {
			swiperPlatform.destroy();
		}
	}
};
swiperPlatformMobileInit();

window.addEventListener("resize", () => {
	swiperSimpleMobileInit();
	swiperPlatformMobileInit();
});