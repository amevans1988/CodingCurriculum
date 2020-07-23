(function() {
    console.log(localStorage.searchText)
    if (localStorage.searchText) {
        document.querySelector("#searchResults").innerHTML = localStorage.searchText;
    }
})();