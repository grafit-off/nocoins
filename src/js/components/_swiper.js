// swiperMobile
let swiperMobileInit = () => {
	if (window.innerWidth <= 768 && swiperSelector.dataset.mobile == "false") {
		swiper = new Swiper(swiperSelector, {
			containerModifierClass: "swiper",
			wrapperClass: "swiper__wrapper",
			slideClass: "swiper__slide",
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
		swiperSelector.dataset.mobile = "true";
	}
	if (window.innerWidth > 768) {
		console.log('Size');
		swiperSelector.dataset.mobile = "false";
		if (swiperSelector.classList.contains("swiperinitialized")) {
			console.log('Selector');
			swiper.destroy();
		}
	}
};
swiperMobileInit();

window.addEventListener("resize", () => {
	swiperMobileInit();
});

