var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1,
    },
    speed: 5000,
    slidesPerView: 3,
    breakpoints: {
        0: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

let nav = document.querySelector("#h_navArea");
let btn = document.querySelector(".h_toggle-btn");

btn.onclick = () => {
    nav.classList.toggle("h_open")
}

