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
const main = document.getElementById("main");

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
    main.classList.toggle('brightness')
});


const close = document.getElementById("close");
const message = document.querySelector('.message');

close.addEventListener('click', () => {
    message.style.display = 'none';
});


// Displaying the Footer Links
const angleDown = document.querySelectorAll(".angle_down");
const footerLinks = document.querySelectorAll('.fl ul');

angleDown.forEach((angle, index) => {
    let linksVisible = false;
    angle.addEventListener('click', () => {
        const link = footerLinks[index];
        if(!linksVisible){
            link.style.display = 'block';
            angle.style.transform = 'rotate(180deg)';
            angle.style.transition = 'all 0.2s ease-in-out';
            link.style.transition = 'all 0.2s ease-in-out';
            linksVisible = true;
        }
        else{
            link.style.display = 'none';
            angle.style.transform = 'rotate(0deg)';
            angle.style.transition = 'all 0.2s ease-in-out';
            link.style.transition = 'all 0.2s ease-in-out';
            linksVisible = false;
        }  
    });
});