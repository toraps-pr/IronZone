const openBtn = document.querySelector(".menu-icon");
const closeBtn = document.querySelector(".close-icon");
const menu = document.querySelector(".navbar-menu");
const navContainer = document.querySelector(".nav-container");

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

//form of fast communication
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


//SIGN UP POPUP LOGIC
const signupButtons = document.querySelectorAll(".present-card button");
const signupPopup = document.getElementById("signupPopup");
const thankYouPopup = document.getElementById("thankYouPopup");
const signupForm = document.getElementById("signupForm");
const trainerInput = document.getElementById("trainerName");
const closeSignupPopup = document.getElementById("close-signup-popup");
const closeThankYou = document.getElementById("closeThankYou");

// Open the form and choose the trainer
signupButtons.forEach(button => {
    button.addEventListener("click", () => {
        const trainerCard = button.closest(".trainer-block").querySelector(".trainer-card .accent");
        if (trainerCard) {
            trainerInput.value = trainerCard.textContent.trim();
        } else {
            trainerInput.value = "Unknown trainer";
        }
        signupPopup.style.display = "flex";
    });
});

// Close the form
closeSignupPopup.addEventListener("click", () => {
    signupPopup.style.display = "none";
});

//Close thank you popup
closeThankYou.addEventListener("click", () => {
    thankYouPopup.style.display = "none";
});

// Sending the form
signupForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(signupForm);

    try {
        const response = await fetch("https://formspree.io/f/xrbakaor", {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            signupPopup.style.display = "none";
            thankYouPopup.style.display = "flex";
            signupForm.reset();
        } else {
            alert("Error while sending form.");
        }
    } catch (error) {
        alert("Network error.");
    }
});


// PURCHASE POPUP LOGIC 
const purchasePopup = document.getElementById("purchasePopup");
const purchaseForm = document.getElementById("purchaseForm");
const closePurchasePopup = document.getElementById("close-purchase-popup");
const thanksForChoosing = document.getElementById("thanksForChoosing");
const closeThanksForChoosing = document.getElementById("closeThanksForChoosing");
const packageInput = document.getElementById("package-type");
const buyButtons = document.querySelectorAll("#prices .prices-card button");

buyButtons.forEach(button => {
    button.addEventListener("click", () => {
        // searching for tiitle of package
        const packageCard = button.closest(".prices-card");
        const packageTitle = packageCard.querySelector(".title-card");
        
        if (packageTitle) {
            packageInput.value = packageTitle.textContent.trim();
        } else {
            packageInput.value = "Unknown package";
        }

        purchasePopup.style.display = "flex";
    });
});

// Close the popup
closePurchasePopup.addEventListener("click", () => {
    purchasePopup.style.display = "none";
});

// sending the form to Formspree
purchaseForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(purchaseForm);

    try {
        const response = await fetch("https://formspree.io/f/movnwpkp", {
            method: "POST",
            body: formData,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            purchasePopup.style.display = "none";  
            thanksForChoosing.style.display = "flex"; 
            purchaseForm.reset();
        } else {
            alert("Error sending form");
        }
    } catch (error) {
        alert("Network error");
    }
});

// close thanks popup
closeThanksForChoosing.addEventListener("click", () => {
    thanksForChoosing.style.display = "none";
});
