const menulist = document.querySelector('.menu__list');
const hamburger = document.querySelector('.hamburger');


hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active"); {
        if (menulist.classList.contains('menu__list-visible')) {
            menulist.classList.remove('menu__list-visible');
        } else {
            menulist.classList.add('menu__list-visible');
        }
    }
});




const food = document.querySelector('.food');
const dishesItems = document.querySelectorAll('.dishes__item');

food.addEventListener('click', function(event) {
    event.preventDefault();
    const target = event.target;
    const targetItem = target.parentNode;
    if (target.classList.contains('dishes__link')) {
        if (targetItem.classList.contains('dishes__item-active')) {
            targetItem.classList.remove('dishes__item-active');
        } else {
            for (let i = 0; i < dishesItems.length; i++) {
                dishesItems[i].classList.remove('dishes__item-active');
            }
            targetItem.classList.add('dishes__item-active');
        }
    }
    if (target.closest('.dishes__list') === null) {
        for (let i = 0; i < dishesItems.length; i++) {
            dishesItems[i].classList.remove('dishes__item-active');
        }
    }
})


const team = document.querySelector('.team');
const memberItems = document.querySelectorAll('.member__item');

team.addEventListener('click', function(event) {
    event.preventDefault();
    const target = event.target;
    const targetItem = target.parentNode;
    if (target.classList.contains('member__name')) {
        if (targetItem.classList.contains('member__item--active')) {
            targetItem.classList.remove('member__item--active');
        } else {
            for (let i = 0; i < memberItems.length; i++) {
                memberItems[i].classList.remove('member__item--active');
            }
            targetItem.classList.add('member__item--active');
        }
    }
    if (target.closest('.member') === null) {
        for (let i = 0; i < memberItems.length; i++) {
            memberItems[i].classList.remove('member__item--active');
        }
    }
});

const left = document.querySelector('#left');
const right = document.querySelector('#right');
const burgers = document.querySelector('.burgers');

right.addEventListener('click', function(e) {
    e.preventDefault();
    loop("right");
});

left.addEventListener('click', function(e) {
    e.preventDefault();
    loop("left");
})

function loop(direction) {
    if (direction === "right") {
        burgers.appendChild(burgers.firstElementChild);
    } else {
        burgers.insertBefore(burgers.lastElementChild, burgers.firstElementChild);
    }
}


const form = document.querySelector('.order-form');
const orderButton = document.querySelector('#orderButton');

orderButton.addEventListener('click', function(e) {
    e.preventDefault();

    if (validateForm(form)) {

        console.log('все ок');

        /*var formData = new formData(form);

        const xhr = new HMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(JSON.stringify(formData)); */
    }
});

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }
    if (!validateField(form.elements.phone)) {
        valid = false;
    }
    if (!validateField(form.elements.comments)) {
        valid = false;
    }
    return valid;
}

function validateField(field) {
    if (!field.checkValidity()) {
        field.nextElementSibling.textContent = field.validationMessage;
        return false;
    } else {
        field.nextElementSibling.textContent = '';

        return true;
    }
}


const openButton = document.querySelectorAll("#openButton");
const reviewsText = document.querySelector(".reviews__text");
const successOverlay = createOverlay(reviewsText.innerHTML);
const reviews = document.querySelector("#reviews");


for (let i = 0; i < openButton.length; i++) {
    let button = openButton[i];
    button.addEventListener("click", function(e) {
        e.preventDefault();
        reviews.appendChild(successOverlay);
    });
}

function createOverlay(content) {
    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");
    overlayElement.addEventListener("click", function(e) {
        if (e.target === overlayElement) {
            closeElement.click();
        }
    })

    const containerElement = document.createElement("div");
    containerElement.classList.add("container__overlay");

    const contentElement = document.createElement("div");
    contentElement.classList.add("content");
    contentElement.innerHTML = content;

    const closeElement = document.createElement("a");
    closeElement.classList.add("close");
    closeElement.textContent = "x";
    closeElement.href = "#";
    closeElement.addEventListener("click", function(e) {
        e.preventDefault();
        reviews.removeChild(overlayElement);
    });

    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);

    return overlayElement;



}