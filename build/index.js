// document.addEventListener("DOMContentLoaded", () => {
//     const wrapper = document.querySelector(".wrapper");
//     const carousel = document.querySelector(".carousel");
//     const arrowBtns = document.querySelectorAll(".wrapper i");
//     const carouselChildrens = [...carousel.children];

// let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// // Get the number of cards that can fit in the carousel at once
// let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// // Insert copies of the last few cards to beginning of carousel for infinite scrolling
// carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
//     carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
// });

// // Insert copies of the first few cards to end of carousel for infinite scrolling
// carouselChildrens.slice(0, cardPerView).forEach(card => {
//     carousel.insertAdjacentHTML("beforeend", card.outerHTML);
// });

// // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
// carousel.classList.add("no-transition");
// carousel.scrollLeft = carousel.offsetWidth;
// carousel.classList.remove("no-transition");

// // Add event listeners for the arrow buttons to scroll the carousel left and right
// document.getElementById("left").addEventListener("click", () => {
//     carousel.scrollLeft -= firstCardWidth;
// });

// document.getElementById("right").addEventListener("click", () => {
//     carousel.scrollLeft += firstCardWidth;
// });


// const dragStart = (e) => {
//     isDragging = true;
//     carousel.classList.add("dragging");
//     // Records the initial cursor and scroll position of the carousel
//     startX = e.pageX;
//     startScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragging) return; // if isDragging is false return from here
//     // Updates the scroll position of the carousel based on the cursor movement
//     carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// const dragStop = () => {
//     isDragging = false;
//     carousel.classList.remove("dragging");
// }

// const infiniteScroll = () => {
//     // If the carousel is at the beginning, scroll to the end
//     if(carousel.scrollLeft === 0) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
//         carousel.classList.remove("no-transition");
//     }
//     // If the carousel is at the end, scroll to the beginning
//     else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
//         carousel.classList.add("no-transition");
//         carousel.scrollLeft = carousel.offsetWidth;
//         carousel.classList.remove("no-transition");
//     }

//     // Clear existing timeout & start autoplay if mouse is not hovering over carousel
//     clearTimeout(timeoutId);
//     if(!wrapper.matches(":hover")) autoPlay();
// }

// const autoPlay = () => {
//     if (!isAutoPlay || window.innerWidth < 800) {
//         clearTimeout(timeoutId);
//         return;
//     }

//     // Autoplay the carousel after every 2500 ms
//     timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
// };

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("scroll", infiniteScroll);
// wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// wrapper.addEventListener("mouseleave", autoPlay);

// });

document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper");
    const carousel1 = document.querySelector(".carousel1");
    const carousel2 = document.querySelector(".carousel2");
    const arrowLeft = document.getElementById("left");
    const arrowRight = document.getElementById("right");
    
    let currentCarousel = carousel1;

    arrowLeft.addEventListener("click", () => {
        currentCarousel.style.display = "none"; // Hide the current carousel
        currentCarousel = currentCarousel === carousel1 ? carousel2 : carousel1; // Toggle between carousels
        currentCarousel.style.display = "block"; // Show the new current carousel
    });

    arrowRight.addEventListener("click", () => {
        currentCarousel.style.display = "none"; // Hide the current carousel
        currentCarousel = currentCarousel === carousel1 ? carousel2 : carousel1; // Toggle between carousels
        currentCarousel.style.display = "block"; // Show the new current carousel
    });

    // Rest of your logic...
});
