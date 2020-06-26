document.querySelector('#textInput').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        addName();
        console.log('Thank god its friday')
    }
});