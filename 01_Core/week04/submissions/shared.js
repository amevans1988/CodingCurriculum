/* Shared JS */

var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

const showList = () => {    
    if (mobileNav.style.display === '' || mobileNav.style.display === 'none') {
        mobileNav.style.display = 'block';
    } else {
        mobileNav.style.display = 'none';
    }
}

