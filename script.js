const slider = document.querySelector('.slider');
let currentIndex = 0;
const images = slider.children;
const scrollAmount = slider.scrollWidth / images.length; // Calculate width per image
const scrollInterval = 3000; // Interval between slides in ms

function autoScroll() {
    currentIndex++;
    // Reset to the first image after reaching the end
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    slider.scrollTo({
        left: scrollAmount * currentIndex,
        behavior: 'smooth' // Smooth transition
    });
}

// Start auto-scroll interval
let intervalId = setInterval(autoScroll, scrollInterval);

// Optional: Pause on hover
slider.addEventListener('mouseover', () => clearInterval(intervalId));
slider.addEventListener('mouseleave', () => intervalId = setInterval(autoScroll, scrollInterval));

const dark = document.getElementById("user");
const hero = document.getElementById("hero");
const mainLogo = document.getElementById("main-logo");
const heroHeader = document.getElementById("hero-header");

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.setProperty('display', 'flex', 'important');
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.setProperty('display', 'none', 'important');
}

const x = window.innerWidth
console.log(x)

const hamburger = document.getElementById("hamburger");
const sidebar = document.querySelector('.side_menu');

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});
