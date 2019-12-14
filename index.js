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
})