const scrollers = document.querySelectorAll(".scroller");


/* Animation for text slide */
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach(scroller => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller-inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute("aria-hidden", true);
            scrollerInner.appendChild(duplicatedItem);
        })
    })
}

 /* Changing image and text for projects area*/

const projectH2 = document.querySelector(".project-h2");
const projectText = document.querySelector(".project-text");
const projectLink = document.querySelector(".github-link");
const projectImage = document.querySelector(".image-container");

document.querySelector(".pl-2").addEventListener("click", function() {   

    projectImage.src = "images/library.jpg";
    projectH2.innerText = "Library DB with flask";
    projectText.innerText = "Browsing SQLlite db data with flask and changing/adding data";
    projectLink.href = "https://github.com/Ramia128/RamiPYFO";
    projectLink.target = "_blank"

});

document.querySelector(".pl-1").addEventListener("click", function() {

    projectImage.src = "images/projectgdp.jpg";
    projectH2.innerText = "GDP, GDP per capita and Life expectancy!";
    projectText.innerText = "Project that reads world GDP, GDP per capita and life expectancy csv data and while using pandas for datacleaning and matplotlib to check graphs";
    projectLink.href = "https://github.com/Ramia128/PYFOu2";
    projectLink.target = "_blank"
    
});

document.querySelector(".pl-3").addEventListener("click", function() {

    projectImage.src = "images/rövarspråk.png";
    projectH2.innerText = "Rövarspråk!";
    projectText.innerText = "Program that takes a string input and converting it to rövarspråk";
    projectLink.href = "https://github.com/Ramia128/Inlam/tree/main/Inl%C3%A4mning";
    projectLink.target = "_blank"

});

/*icon change */
const mail = document.querySelector(".fa-regular");

mail.addEventListener("mouseenter", function() {

    mail.classList.toggle("fa-envelope");
    mail.classList.toggle("fa-envelope-open");

});

mail.addEventListener("mouseleave", function() {

    mail.classList.toggle("fa-envelope-open");
    mail.classList.toggle("fa-envelope");

});

const phone = document.querySelector(".fa-solid");

document.querySelector(".phone-area").addEventListener("mouseenter", function() {

    phone.classList.toggle("fa-phone");
    phone.classList.toggle("fa-phone-volume");

})

document.querySelector(".phone-area").addEventListener("mouseleave", function() {

    phone.classList.toggle("fa-phone-volume");
    phone.classList.toggle("fa-phone");

})

