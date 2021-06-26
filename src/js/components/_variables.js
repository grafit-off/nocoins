// Variables
// Iphones
const isiPhone = (navigator.userAgent.match(/iPhone/i) != null);
const isiPad = (navigator.userAgent.match(/iPad/i) != null);
const isiPod = (navigator.userAgent.match(/iPod/i) != null);

const body = document.querySelector('.body');
const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const mediaMobile = window.matchMedia("(max-width: 767px)");
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');