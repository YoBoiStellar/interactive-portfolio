const $ = document.querySelector.bind(document)
$("#image").style.backgroundImage=`url(${$("#background").dataset.url})`;
const e = $(".title");
document.addEventListener("scroll", () => e.style.opacity = 1-(window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop)/200)
setTimeout(()=>document.scrollingElement.scrollLeft=20,100)