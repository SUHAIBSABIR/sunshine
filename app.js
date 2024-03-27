// const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true
// });



var a = document.querySelector("#page3")
var fixed = document.querySelector("#fixed-img")
var elem = document.getElementById("elem")
var image = elem.getAttribute("data-image")
console.log(image)



a.addEventListener("mouseenter", function () {

    fixed.style.display = "block"
    fixed.style.backgroundImage

})


a.addEventListener("mouseleave", function () {

    fixed.style.display = "none"

})


