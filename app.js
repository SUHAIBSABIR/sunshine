const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});



var a = document.querySelector("#page3")
var b = document.querySelector("#fixed-img")


a.addEventListener("mouseenter", function () {

    b.style.display = "block"

})


a.addEventListener("mouseleave", function () {

    b.style.display = "none"

})

