/* Shared JS */

var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav'); // For some reason this wasn't working? Ask Tyler

document.querySelector('.header-div').innerHTML = `
<div class="backdrop"></div>
<div class='background'></div>
        <header>
            <div class='logo'>
                <a href='index.html'><img src='images/rg-nav.png'></a>
            </div>
            <nav class='navbar'>
                <ul>
                    <li class='navbar__search'>
                        <a href='products.html'>Search</a>
                        <ul class='searchDrop'>
                            <form action='search.html'>
                                <input id='searchText' type='text' placeholder='What are you looking for?'>
                                <br><br>
                                <input type='submit' value="Search" onclick='return getSearchResults()'>
                            </form>
                        </ul>
                    </li>
                    <li class='navbar__categories'>
                        <a href='products.html'>Categories</a>
                        <ul class='categoryDrop'>
                            <p><a href='products.html'>-Desktops</a></li></p>
                            <p><a href='products.html'>-Laptops</a></li></p>
                            <p><a href='products.html'>-Headsets</a></p>
                            <p id='last'><a href='products.html'>-Mice</a></p>
                        </ul>
                    </li>
                    <li class='navbar__li'>
                        <a href='products.html'>All Products</a>
                    </li>
                    <li class='navbar__li'>
                        <a href='contactus.html'>Contact Us</a>
                    </li>
                </ul>
            </nav>

            <div class='cart-logo'>
                <a href='cart.html'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
            </div>

            <div>
                <button class="toggle-button" onclick='return showList()'>
                    <span class="toggle-button__bar"></span>
                    <span class="toggle-button__bar"></span>
                    <span class="toggle-button__bar"></span>
                </button>
            </div>

        </header>

        <nav class="mobile-nav">
            <ul class="mobile-nav__items">
                <li class="mobile-nav__item">
                    <a href="cart.html">Cart</a>
                </li>
                <li class="mobile-nav__item">
                    <a href="search.html">Search</a>
                </li>
                <li class="mobile-nav__item">
                    <a href="products.html">Categories</a>
                </li>
                <li class="mobile-nav__item">
                    <a href="products.html">All Products</a>
                </li>
                <li class="mobile-nav__item">
                    <a href="contactus.html">Contact Us</a>
                </li>
            </ul>
        </nav>`

document.querySelector('.footer-div').innerHTML =`
        <footer>
            <div class='break'></div>
            <h4><span class='redtext'>Red</span>Gamers</h4>
            <ul class='footer-bottom'>
                <li>&copy; 2020 RedGamers</li>
                <li><a href='#'>Contact Us</a>
                <li><a href='#'>Privacy Policy</a>
                <li><a href='#'>Return Policy</a>
                <li><a href='#'>Careers</a>
            </ul>

        </footer>`

var mobileNav = document.querySelector('.mobile-nav');

const showList = () => {    
    if (mobileNav.style.display === '' || mobileNav.style.display === 'none') {
        mobileNav.style.display = 'block';
    } else {
        mobileNav.style.display = 'none';
    }
}