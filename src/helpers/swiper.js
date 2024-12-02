import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

export function initializeSlider() {
    new Swiper('.mySwiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
    })
}
