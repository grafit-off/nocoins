// Header Scroll
window.addEventListener('scroll', () => {
	headerFixed();
});
const headerFixed = () => {
	if (!mediaMobile.matches) {
		if (window.scrollY > 0) {
			header.classList.add('header--fixed');
		} else if (window.scrollY === 0) {
			header.classList.remove('header--fixed');
		}
	} else if (mediaMobile.matches && window.scrollY > 0) {
		header.classList.add('header--fixed');
	}
}
headerFixed();