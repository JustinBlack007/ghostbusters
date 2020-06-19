$(document).ready(function() {
    const menuBtn = $(".m-menu-button")
    const mMenu = $(".m-menu")
    const tab = $(".tab")

    tab.on("click", function() {
        tab.removeClass("active")
        $(this).toggleClass("active")
        $(".content-tab").removeClass("visible")
        $($(this).attr("data-target")).toggleClass("visible")

    })

    menuBtn.on("click", function() {
        mMenu.toggleClass("active")
        $("body").toggleClass("no-scrole")
    })
    const mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        loop: true,
        slidesPerView: 4,
        spaceBetween: 25,
        breakpoints: {
            992: {
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1,
                slidesOffsetAfter: 50,
                navigation: {
                    nextEl: ".button-next"
                }
            }
        }
      })

})