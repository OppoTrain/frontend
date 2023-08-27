document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.getElementById('burger-icon');
    const links = document.getElementById('links');
    const button =document.getElementById('GetStart-btn');
    burgerIcon.addEventListener('click', () => {
        burgerIcon.classList.toggle('open');
        links.classList.toggle('open');
        button.classList.toggle('open');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector("#our-team-section");
    const carousels = document.querySelectorAll("#our-team-section ul[class^='carousel']");
    const arrowLeft = document.getElementById("left");
    const arrowRight = document.getElementById("right");

    let currentCarousel = carousels[0];

    arrowLeft.addEventListener("click", () => {
        currentCarousel.style.display = "none"; 
        const currentIndex = Array.from(carousels).indexOf(currentCarousel);
        const prevIndex = (currentIndex - 1 + carousels.length) % carousels.length;
        currentCarousel = carousels[prevIndex];
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

document.addEventListener("DOMContentLoaded", () => {
    const sectionLinks = document.querySelectorAll("#our-story-section-wrap");
    
    sectionLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior
            
            const target = link.getAttribute("data-target");
            const targetSection = document.getElementById(target);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
                
                // Update the URL without the full ID
                history.replaceState(null, null, `#${target}`);
            }
        });
    
    });
});
