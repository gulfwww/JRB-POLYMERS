const swiper = new Swiper('.swiper', {
	slidesPerView: 1,
	spaceBetween: 10,
	freeMode: true,
	loop: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		768: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
	},
});
