document.addEventListener("DOMContentLoaded",()=>{const e=null!=navigator.userAgent.match(/iPhone/i),t=null!=navigator.userAgent.match(/iPad/i),o=null!=navigator.userAgent.match(/iPod/i),a=document.querySelector(".body"),s=document.querySelector(".header__container"),d=document.querySelector(".burger"),i=document.querySelector(".nav"),r=window.matchMedia("(max-width: 767px)"),c=document.querySelector(".header");document.querySelector(".hero");let n=!1;r.matches&&i.setAttribute("aria-hidden",!0);const l=()=>{d.classList.add("burger--active"),a.classList.add("lock"),i.classList.add("nav--active"),d.setAttribute("aria-expanded",!0),i.setAttribute("aria-hidden",!1),(t||e||o)&&(()=>{let e=window.scrollY;document.querySelector("html").style.scrollBehavior="auto",document.body.classList.add("ios-lock"),document.body.dataset.position=e,document.body.style.top=-e+"px"})(),n=!0},u=()=>{d.classList.remove("burger--active"),a.classList.remove("lock"),i.classList.remove("nav--active"),d.setAttribute("aria-expanded",!1),i.setAttribute("aria-hidden",!0),(t||e||o)&&(()=>{let e=parseInt(document.body.dataset.position,10);document.body.style.top="auto",document.body.classList.remove("ios-lock"),window.scroll({top:e,left:0}),document.querySelector("html").removeAttribute("style"),document.body.removeAttribute("data-position")})(),n=!1};s.addEventListener("click",e=>{e.target.classList.contains("burger")?(()=>{switch(n){case!1:l();break;case!0:u()}})():e.target.classList.contains("nav__link")&&u()}),window.addEventListener("scroll",()=>{r.matches?r.matches&&window.scrollY>0&&c.classList.add("header--fixed"):window.scrollY>0?c.classList.add("header--fixed"):0===window.scrollY&&c.classList.remove("header--fixed")})});
//# sourceMappingURL=main.js.map
