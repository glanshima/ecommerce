'use strict';
/* navbar toggle */
const overlay = document.querySelector('[data-overlay]');
const navOpenBtn = document.querySelector('[data-nav-open-btn]');
const navBar = document.querySelector('[data-navbar]');
const navCloseBtn = document.querySelector('[data-nav-close-btn]');

const navElements = [overlay, navOpenBtn, navCloseBtn];

for (let i = 0; i < navElements.length; i++) {
    navElements[i].addEventListener('click', () => {
        navBar.classList.toggle('active');
        overlay.classList.toggle("active");
    });
}


/* Header & go top btn active on page scroll */

const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 80) {
        header.classList.add('active');
        goTopBtn.classList.add('active');
    } else {
        header.classList.remove('active');
        goTopBtn.classList.remove('active');
    }

})


/* favorite function*/

const addWishListItem = document.querySelectorAll('#fav');
const navActionBadge = document.querySelector('.nav-action-badge');
const favoriteIcon = document.querySelector('#fav-icon');
const actionBtn = document.querySelectorAll('.card-action-btn');
const cardLabel = document.querySelectorAll('#card-label-3');
let favDataOutput = document.querySelector('#wish-data');
let favIconData = 0;
let i, label, addItem;
navActionBadge.textContent = favIconData;
navActionBadge.setAttribute('value', `${favIconData}`);


for (i = 0; i < addWishListItem.length; i++) {
    const addItem = addWishListItem[i];
    //add item wishlist button

    function addToWishList() {

        addItem.classList.add('fas');
        addItem.classList.add('far');
        favIconData++;
        favDataOutput.textContent = favIconData;
        navActionBadge.setAttribute('value', `${favIconData}`);


        if (favIconData >= 1) {
            favoriteIcon.classList.add('fas');
            favoriteIcon.classList.remove('far');
        } else {

            favoriteIcon.classList.remove('fas')
            favoriteIcon.classList.add('far')
        }
    }
    //remove item from wishlist

    function removeWishList() {
        addItem.classList.remove('fas');
        addItem.classList.add('far');
        favIconData--;
        favDataOutput.textContent = favIconData;
        navActionBadge.setAttribute('value', `${favIconData}`);

        if (favIconData >= 1) {
            favoriteIcon.classList.add('fas');
            favoriteIcon.classList.remove('far');

        } else {

            favoriteIcon.classList.remove('fas')
            favoriteIcon.classList.add('far')
        }
    }

    addItem.addEventListener('click', () => {
        label = addItem.closest('.card-action-item').querySelector('.card-action-tooltip');
        if (addItem.classList.contains('fas')) {

            label.textContent = 'Add to Wishlist';
            label.style.cssText = " ";
            removeWishList()
        } else {
            label.textContent = 'Added to Wishlist';
            label.style.cssText = "background-color: #ff6e61; color: #fff";



            addToWishList()
        }
    })
}




function globalClick(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) callback(e);
    })
}














//select one deselect the other

/* 
Array.foreach((array, i) => {
    const div = divs[i];
    div.addEventListener('click', () => {
        for (const div of divs) {
            div.style.property = ""
        }
        div.style.backgrond = color
    })
}) 


for (const myVar of myVars) {
    myVar.addEventListener('click', (e) => {
        for (let i = 0; i < myVar.length; i++) {
            myVar[i].style.background = "value";
            myVar[i].innerHtml = myVar[i].classList;
        }
        let index = classList.indexOf('.' + e.target.className);
        this.style.background = myColours[index];
    })
}

*/