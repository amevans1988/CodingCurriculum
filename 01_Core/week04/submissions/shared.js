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

(function() {
    document.querySelector('.header-div').innerHTML = `<div class="backdrop"></div><div class='background'></div><header><div class='logo'><a href='index.html'><img src='../../images/rg-nav.png'></a></div><nav class='navbar'><ul><li class='navbar__search'><a href='#'>Search</a><ul class='searchDrop'><form action='search.html'><input id='searchText' type='text' placeholder='What are you looking for?'><br><br><input type='submit' value="Search" onclick='return getSearchResults()'></form></ul></li><li class='navbar__categories'><a href='#'>Categories</a><ul class='categoryDrop'><p><a href='#'>Desktops</a></li></p><p><a href='#'>Laptops</a></li></p><p><a href='#'>Headsets</a></p><p id='last'><a href='#'>Mice</a></p></ul></li><li class='navbar__li'><a href='#'>All Products</a></li><li class='navbar__li'><a href='#'>About Us</a></li><li class='navbar__li'><a href='#'>Contact Us</a></li></ul></nav><div class='cart-logo'><a href='cart.html'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div><div><button class="toggle-button" onclick='return showList()'><span class="toggle-button__bar"></span><span class="toggle-button__bar"></span><span class="toggle-button__bar"></span></button></div></header><nav class="mobile-nav">
    <ul class="mobile-nav__items"><li class="mobile-nav__item"><a href="#">Cart</a></li><li class="mobile-nav__item"><a href="#">Search</a></li><li class="mobile-nav__item"><a href="#">Categories</a></li><li class="mobile-nav__item"><a href="#">All Products</a></li><li class="mobile-nav__item"><a href="#">About Us</a></li><li class="mobile-nav__item"><a href="#">Contact Us</a></li></ul></nav>'`;
})();

(function() {
    console.log('hello?')
    document.querySelector('.footer-div').innerHTML = `<footer><hr><h4>RedGamers</h4><ul class='footer-bottom'><li>&copy; 2020 RedGamers</li><li><a href='#'>Contact Us</a><li><a href='#'>Privacy Policy</a><li><a href='#'>Return Policy</a><li><a href='#'>Careers</a></ul></footer>`;
})();