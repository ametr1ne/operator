const kf = 517 / 1920

let edgePadding = document.body.clientWidth * kf

 let options = {
     container: '.comments-slider',
     items: 1,
     controlsContainer: ".comments-controls",
     mouseDrag: true,
     edgePadding: edgePadding
 }

let slider = tns(options);

window.addEventListener("resize", function () {

    edgePadding = document.body.clientWidth * kf

    options = {
        container: '.comments-slider',
        items: 1,
        controlsContainer: ".comments-controls",
        mouseDrag: true,
        edgePadding: edgePadding
    }

    slider.destroy()

    slider = tns(options)
})

if (document.body.clientWidth <= 1024) {
    document.querySelector(".header-burger").addEventListener("click", function () {
        document.body.classList.toggle("opened")
    })
}

