// Header Scroll
window.addEventListener('scroll', () => {
	if (window.scrollY > 0) {
		header.classList.add('header--fixed');
	} else {
		header.classList.remove('header--fixed');
	}
});