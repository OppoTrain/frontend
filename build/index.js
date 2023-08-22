document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper");
    const carousel1 = document.querySelector(".carousel1");
    const carousel2 = document.querySelector(".carousel2");
    const arrowLeft = document.getElementById("left");
    const arrowRight = document.getElementById("right");
    
    let currentCarousel = carousel1;

    arrowLeft.addEventListener("click", () => {
        currentCarousel.style.display = "none"; 
        currentCarousel = currentCarousel === carousel1 ? carousel2 : carousel1; 
        currentCarousel.style.display = "block"; 
    });

    arrowRight.addEventListener("click", () => {
        currentCarousel.style.display = "none"; 
        currentCarousel = currentCarousel === carousel1 ? carousel2 : carousel1;
        currentCarousel.style.display = "block"; 
    });
});

const spans = document.querySelectorAll(".color-changing-text span");
spans.forEach((span, index) => {
    span.style.animationDelay = `${index * 0.1}s`;
});
