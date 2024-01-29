document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.getElementById('burger-icon');
    const links = document.getElementById('links');
    const menuWrapper = document.getElementById('menu-wrapper')
    burgerIcon.addEventListener('click', () => {
        burgerIcon.classList.toggle('open');
        links.classList.toggle('open');
        menuWrapper.classList.toggle('open');
    });
    menuWrapper.addEventListener('click', ()=>{
        burgerIcon.classList.toggle('open');
        links.classList.toggle('open');
        menuWrapper.classList.toggle('open');
    })
});
window.onscroll = function() {scrollFunction()};
// scrolling effect:
document.addEventListener("DOMContentLoaded", function() {
    var scrollLinks = document.querySelectorAll('a[href^="#"]');

    scrollLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            var section = document.querySelector(this.getAttribute("href"));

            if (section) {
                section.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// images effect:
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('image-container');
    const images = container.querySelectorAll('img');
    let currentImageIndex = 0;
    let currentOffset = 0;
    const imageHeight = images[0].clientHeight;

    function scrollImages() {
        currentOffset += 1;
        images[currentImageIndex].style.transform = `translateY(${currentOffset}px)`;

        if (currentOffset >= imageHeight) {
            images[currentImageIndex].style.transform = 'translateY(0)';
            currentOffset = 0;

            currentImageIndex = (currentImageIndex + 1) % images.length;
        }
    }

    setInterval(scrollImages, 20);
});

const links = document.querySelectorAll("#links a");
const sectionWraps = document.querySelectorAll(".wrap");
// update the active link
// function updateActiveLink() {
//     sectionWraps.forEach((wrap, index) => {
//         console.log("Updating active link");
//         if (indexFound) return;
//         const rect = wrap.getBoundingClientRect();
//         const offsetPosition = 80 + 100;
//         if (rect.top <= offsetPosition && rect.bottom >= offsetPosition) {
//             links.forEach((link) => link.classList.remove("active"));
//             links[index].classList.add("active");
//         }
//     });
// }
// // window.addEventListener('scroll', updateActiveLink);
//
// // add scroll event listener to update the active link
// window.addEventListener("scroll", updateActiveLink);
//
// updateActiveLink();
function updateActiveLink() {
    let indexFound = false;
    const offsetPosition = 80 + 100; // Offset for the navbar and padding

    sectionWraps.forEach((wrap, index) => {
        if (indexFound) return;
        const rect = wrap.getBoundingClientRect();
        const wrapTopRelativeToViewport = rect.top + window.scrollY; // Get the wrap's top relative to the document

        // Check if the wrap's top is within a range of the offsetPosition
        // You might need to adjust this logic based on how you want to detect the active section
        if (wrapTopRelativeToViewport <= window.scrollY + offsetPosition && wrapTopRelativeToViewport + rect.height > window.scrollY + offsetPosition) {
            links.forEach((link) => link.classList.remove("active"));
            links[index].classList.add("active");
            indexFound = true;
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink(); // Initial call to set the active link on page load


//  handle link clicks
function handleLinkClick(event) {
    event.preventDefault();
    links.forEach((link) => link.classList.remove("clicked"));
    event.target.classList.add("clicked");
    const targetSectionId = event.target.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetSectionId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
        });
    }
}

// Add click event listener to each link
links.forEach((link) => {
    link.addEventListener("click", handleLinkClick);
});

document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('#links a');
    var userClickedLink = false; // Flag to indicate if a link was clicked

    function removeActiveClass() {
        links.forEach(function(link) {
            link.classList.remove('active');
        });
    }

    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            removeActiveClass();
            this.classList.add('active');

            userClickedLink = true;
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

                setTimeout(function() {
                    userClickedLink = false;
                }, 1000);
            }
        });
    });

    window.addEventListener('scroll', function() {
        if (userClickedLink) return;

        var scrollPosition = window.scrollY;
        var inSection = false;

        links.forEach(function(link) {
            var targetId = link.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);

            if (targetSection) {
                var sectionTop = targetSection.offsetTop;
                var sectionHeight = targetSection.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    removeActiveClass();
                    link.classList.add('active');
                    inSection = true;
                }
            }
        });

        if (!inSection) {
            removeActiveClass();
        }
    });
});

// buttons decoration
window.addEventListener('scroll', function() {
    if (userClickedLink) return;
    var scrollPosition = window.scrollY + window.innerHeight * 0.1;
    var inSection = false;
    links.forEach(function(link) {
        var targetId = link.getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetId);
        if (targetSection) {
            var sectionTop = targetSection.offsetTop;
            var sectionHeight = targetSection.offsetHeight;
            var sectionBottom = sectionTop + sectionHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom - window.innerHeight * 0.1) {
                removeActiveClass();
                link.classList.add('active');
                inSection = true;
            }
        }
    });

    if (!inSection) {
        removeActiveClass();
    }});

function scrollFunction() {
    var myButton = document.getElementById("join-btn");
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        myButton.style.visibility = "visible";
    } else {
        myButton.style.visibility = "hidden";
    }
}
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
//
// const links = document.querySelectorAll("#links a");
// const sectionWraps = document.querySelectorAll(".wrap");

// function updateActiveLink() {
//     let indexFound = false;  // Declare indexFound here
//
//     sectionWraps.forEach((wrap, index) => {
//         if (indexFound) return;  // Skip further checks if active section is found
//
//         const rect = wrap.getBoundingClientRect();
//         const offsetPosition = 80 + 100;  // Navbar height + padding
//
//         console.log(`Wrap ${index}: rect.top = ${rect.top}, rect.bottom = ${rect.bottom}, offsetPosition = ${offsetPosition}`);
//
//         if (rect.top <= offsetPosition && rect.bottom >= offsetPosition) {
//             console.log(`Activating link ${index}`);
//             links.forEach((link) => link.classList.remove("active"));
//             links[index].classList.add("active");
//             indexFound = true;  // Set flag to true when active section is found
//         }
//     });
// }
//
// // window.addEventListener('scroll', updateActiveLink);
