// document.addEventListener("DOMContentLoaded", () => {
//     const wrapper = document.querySelector(".wrapper");
//     const carousels = document.querySelectorAll(".wrapper ul[id^='carousel']");
//     const arrowLeft = document.getElementById("left");
//     const arrowRight = document.getElementById("right");
    
//     let currentCarousel = carousels[0];

//     arrowLeft.addEventListener("click", () => {
//         currentCarousel.style.display = "none"; 
//         const currentIndex = Array.from(carousels).indexOf(currentCarousel);
//         currentCarousel = carousels[(currentIndex + 1) % carousels.length];
//         currentCarousel.style.display = "block"; 
//     });

//     arrowRight.addEventListener("click", () => {
//         currentCarousel.style.display = "none"; 
//         const currentIndex = Array.from(carousels).indexOf(currentCarousel);
//         currentCarousel = carousels[(currentIndex + 1) % carousels.length];
//         currentCarousel.style.display = "block"; 
//     });


    
// });

document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper");
    const carousels = document.querySelectorAll(".wrapper ul[id^='carousel']");
    const arrowLeft = document.getElementById("left");
    const arrowRight = document.getElementById("right");

    let currentCarousel = carousels[0];

    arrowLeft.addEventListener("click", () => {
        currentCarousel.style.display = "none"; 
        const currentIndex = Array.from(carousels).indexOf(currentCarousel);
        currentCarousel = carousels[(currentIndex + 1) % carousels.length];
        currentCarousel.style.display = "block"; 
    });

    arrowRight.addEventListener("click", () => {
        currentCarousel.style.display = "none"; 
        const currentIndex = Array.from(carousels).indexOf(currentCarousel);
        currentCarousel = carousels[(currentIndex + 1) % carousels.length];
        currentCarousel.style.display = "block"; 
    });

    // Initialize Swiper with desired transition effect
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        effect: 'flip',
        flipEffect: {
            slideShadows: false, // Set to true for slide shadows
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'custom-bullet-active'
        },
    });
});
