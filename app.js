
window.onscroll = function () {
    var posicion = window.pageYOffset || document.documentElement.scrollTop;
    var elemento1 = document.getElementById("icon-heart");
    var elemento2 = document.getElementById("icon_fire");
    elemento1.style.bottom = posicion * 0.1 + "px";
    elemento2.style.top = posicion * 0.1 + "px";
}


document.querySelector(".menu-bars").addEventListener("click",mostar_menu);

function mostar_menu(){
    document.querySelector(".menu").classList.toggle("mostrar_menu")
}