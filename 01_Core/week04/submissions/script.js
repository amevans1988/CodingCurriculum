// document.querySelector('#searchText').addEventListener('keyup', function(event) {
//     if (event.keyCode === 13) {
//         addName();
//     }
// });

const getSearchResults = () => {
    // event.preventDefault();
    var searchText = (document.querySelector('#searchText').value);
    localStorage.searchText = searchText;
}
