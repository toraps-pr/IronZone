let openBtn = document.querySelector(".menu-icon");
let closeBtn = document.querySelector(".close-icon");
let menu = document.querySelector(".navbar-menu");
let navContainer = document.querySelector(".nav-container");

openBtn.addEventListener("click",()=>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");

    navContainer.style.backgroundColor = "var(--color-rich-black)";
});

closeBtn.addEventListener("click",()=>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menu.classList.toggle("hidden");

    navContainer.style.backgroundColor = "transparent"; 
});


const menuItems = document.querySelectorAll(".navbar-menu-item");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        
        openBtn.classList.toggle("hide");
        closeBtn.classList.toggle("hide");

        navContainer.style.backgroundColor = "transparent";
    });
});

const wrapper = document.querySelector('.carousel-wrapper');
const cards = document.querySelectorAll('.carousel-card');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
const paginationDots = document.querySelectorAll('.carousel-pagination img');

let currentIndex = 0;

function updateCarousel() {
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentIndex);

        const img = card.querySelector('img');
        if (index === currentIndex) {
            img.src = img.src.replace('white', 'black');
        } else {
            img.src = img.src.replace('black', 'white');
        }
    });

    paginationDots.forEach((dot, index) => {
        dot.src =
            index === currentIndex
                ? 'images/state dot.png'
                : 'images/state dot not active.png';
    });
}

function moveCarousel() {
    const card = cards[currentIndex];
    const wrapperPadding = parseInt(getComputedStyle(wrapper).paddingLeft); 
    wrapper.scrollTo({
        left: card.offsetLeft - wrapper.offsetLeft - wrapperPadding,
        behavior: 'smooth',
    });
    updateCarousel();
}


nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    moveCarousel();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    moveCarousel();
});

updateCarousel();

//first baner button
document.getElementById("close-contact-popup").addEventListener("click", () => {
    document.getElementById("contactPopup").style.display = "none";
});

document.getElementById("consultation-btn").addEventListener("click", () => {
    document.getElementById("contactPopup").style.display = "flex";
});
/*
document.getElementById("openInstagram").addEventListener("click", function() {
    window.open("https://www.instagram.com/toxic.granny", "_blank");
});
*/

//form
const form = document.getElementById("contactForm");
const popup = document.getElementById("successPopup");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    try {
        const response = await fetch("https://formspree.io/f/xovndlkl", {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });
        if (response.ok) {
            popup.style.display = "flex";
            form.reset();
        } else {
            alert("Error sending form");
        }
    } catch (error) {
        alert("Network error");
    }
});

document.getElementById("close-popup").addEventListener("click", () => {
    document.getElementById("successPopup").style.display = "none";
});



