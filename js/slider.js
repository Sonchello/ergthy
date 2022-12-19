const sliderMain = new Swiper('.slider_main', {
	freeMode: true,
	 centeredSlides: true,
	mousewheel: true,
	parallax: true,
    loop: true,
	breakpoints: {
		0: {
			slidesPerView: 1.5,
			spaceBetween: 20
		},
		680: {
			slidesPerView: 3.5,
			spaceBetween: 60
		}
	}
})

document.querySelectorAll('.slider__item').forEach(item => {
	item.addEventListener('click', event => {
		item.classList.toggle('opened')
	})
})
