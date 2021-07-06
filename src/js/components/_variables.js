// Variables
const isiPhone = (navigator.userAgent.match(/iPhone/i) != null);
const isiPad = (navigator.userAgent.match(/iPad/i) != null);
const isiPod = (navigator.userAgent.match(/iPod/i) != null);

const body = document.querySelector('.body');
const headerContainer = document.querySelector('.header__container');
const burgerBtn = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const mediaMobile = window.matchMedia("(max-width: 767px)");
const header = document.querySelector('.header');
const hero = document.querySelector('.hero');
const swiperSimpleSelector = document.querySelector(".simple__swiper");
const swiperPlatformSelector = document.querySelector('.simple__swiper--platform');
