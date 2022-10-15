window.addEventListener("scroll",function(){
    // aller pointer a l'element header de notre page html
    var header = document.querySelector("header");
    header.classList.toggle("stickey",window.scrollY > 0);
})
