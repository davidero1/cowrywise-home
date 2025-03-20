"use-strict";


// get hold of barsicon div that contains the icon


document.querySelector(".barsicon").addEventListener("click", function() {
    const navBox = document.querySelector(".bannerbox");
    const icon = document.querySelector(".fa-solid");
    navBox.classList.toggle("show");
    icon.classList.toggle("fa-xmark");
});