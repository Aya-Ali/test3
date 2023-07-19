/**
 * 
 * 1-select 
 * 2-add event 
 * 3-action
 */



var imgList = document.querySelectorAll(".item img")
var myImage = document.querySelector("#myImage")
for (var i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener("click", function (e) {
        var imgSrc = e.target.getAttribute("src")
        myImage.setAttribute("src",imgSrc)
    })
}


var img = document.querySelector("img")
document.addEventListener("mousemove", function (event) {
    img.style.top = event.clientY + "px"
    img.style.left = event.clientX + "px"
})``


