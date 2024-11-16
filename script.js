const slider = document.querySelector('.slider');
let currentIndex = 0;
const images = slider.children;
const scrollAmount = slider.scrollWidth / images.length; 
const scrollInterval = 3000; 

function autoScroll() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    slider.scrollTo({
        left: scrollAmount * currentIndex,
        behavior: 'smooth'
    });
}


let intervalId = setInterval(autoScroll, scrollInterval);


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


const close = document.getElementById("close");
const message = document.querySelector('.message');

close.addEventListener('click', () => {
    message.style.display = 'none';
});