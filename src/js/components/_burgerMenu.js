// Burger Menu
let menuIsOpen = false;

if (mediaMobile.matches) {
	nav.setAttribute('aria-hidden', true);
}

const burgerMenuOpen = () => {
	burgerBtn.classList.add('burger--active');
	body.classList.add('lock');
	nav.classList.add('nav--active')
	burgerBtn.setAttribute('aria-expanded', true);
	nav.setAttribute('aria-hidden', false);
	if (isiPad || isiPhone || isiPod) {
		disableScroll();
	}
	menuIsOpen = true;
}

const burgerMenuClose = () => {
	burgerBtn.classList.remove('burger--active');
	body.classList.remove('lock');
	nav.classList.remove('nav--active')
	burgerBtn.setAttribute('aria-expanded', false);
	nav.setAttribute('aria-hidden', true);
	if (isiPad || isiPhone || isiPod) {
		enableScroll();
	}
	menuIsOpen = false;
}

const burgerMenuSwitch = () => {
	switch (menuIsOpen) {
		case false:
			burgerMenuOpen();
			break;
		case true:
			burgerMenuClose();
			break;
	}
}

headerContainer.addEventListener('click', (e) => {
	if (e.target.classList.contains('burger')) {
		burgerMenuSwitch();
	} else if (e.target.classList.contains('nav__link') && window.innerWidth < 768) {
		burgerMenuSwitch();
	}
})
