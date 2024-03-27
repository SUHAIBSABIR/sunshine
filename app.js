const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});



var a = document.querySelector("#page3")
var fixed = document.querySelector("#fixed-img")
var elem = document.getElementById("elem")

var image = elem.getAttribute("data-image")

console.log(image)
console.log(image)
console.log(image)



a.addEventListener("mouseenter", function () {

    fixed.style.display = "block"
    // fixed.style.backgroundImage = `url('${image}')`

})


a.addEventListener("mouseleave", function () {

    fixed.style.display = "none"

})


var elems = document.querySelectorAll("#elem")


console.log(elems)

elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {

        var image = e.getAttribute("data-image")

        fixed.style.backgroundImage = `url(${image})`
        console.log(image)
    })

})