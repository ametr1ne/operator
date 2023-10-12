const kf = 517 / 1920

let edgePadding = document.body.clientWidth * kf

let options = {
    container: '.comments-slider',
    controlsContainer: ".comments-controls",
    mouseDrag: true,
    items: 3,
    responsive: {
        320: {
            items: 1,
            fixedWidth: 284,
            preventScrollOnTouch: "auto",
            nav: false,
        },
        768: {
            edgePadding: edgePadding,
            items: 1,
            nav: true,
            fixedWidth: false,
        },
        1024: {
            edgePadding: 0,
            items: 3
        }
    }
}

let slider = tns(options);

window.addEventListener("resize", function () {

    edgePadding = document.body.clientWidth * kf

    options = {
        container: '.comments-slider',
        controlsContainer: ".comments-controls",
        mouseDrag: true,
        responsive: {
            320: {
                items: 1,
                fixedWidth: 284,
                preventScrollOnTouch: "auto",
                nav: false,
            },
            768: {
                edgePadding: edgePadding,
                items: 1,
                nav: true,
                fixedWidth: false,
            },
            1024: {
                edgePadding: 0,
                items: 3
            }
        }
    }

    slider.destroy()

    slider = tns(options)

    burgerHandler()
})

burgerHandler()

function burgerHandler() {
    if (document.body.clientWidth <= 1024) {
        document.querySelector(".header-burger").addEventListener("click", function () {
            document.body.classList.toggle("opened")
        })
    }
}

const nav_links = document.querySelectorAll(".header-menu__link")

nav_links.forEach(function (item, index) {
    item.addEventListener("click", function () {
        document.body.classList.remove("opened")
    })
})

