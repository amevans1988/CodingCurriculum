// Dynamic contact list - This was a lot of fun.

var tableLast = document.querySelector('#lastJS');
var tableFirst = document.querySelector('#firstJS');
var tableDelete = document.querySelector('#deleteJS');
var nameInput;
var fullNames = null;
var newNames = [];

function updateTable(nameInput) {

    // 1 Get values from input and separates them by the comma. If there are existing elements in the contact table, add to list.
    getValues();

    // 2 Split the full name(s) and assign them last then first in an array
    createNLF();

    // 3 Sort the array as alphabetical by last name
    sortNLF();

    // 4 Clear the current first and last names array and clear table html
    resetTable();

    // 5 With the namesLastFirst array sorted by last name, take all current elements and split them into two arrays by their first and last names while assigning an identical index in both arrays
    createFirstAndLast();

    // 6 Based on the updated lastNames array, assigns 3 cells for each element in one row - last name from the looping array, first name with identical index, and adds a delete button assigned an id equal to that index.
    addTable();
}

const addName = () => { 
    event.preventDefault();
    nameInput = document.querySelector('#textInput').value;
    updateTable(nameInput);
    document.querySelector('#textInput').value = '';
}

const deleteName = (index) => {
    // The master 'fullNames' list is not sorted alphabetically - finds the index of the deleted name in the master list.
    var indexToDelete = (fullNames.indexOf(`${firstNames[index]} ${lastNames[index]}`));
    fullNames.splice(indexToDelete, 1)
    nameInput = '';
    createNLF();
    sortNLF();
    resetTable();
    createFirstAndLast();
    addTable();
}



const getValues = () => {
    if (nameInput === '') {
        alert('At least one name is required.');
    } else if (nameInput.includes(', ') || nameInput.includes(' ,')) {
        alert('Please do not include a space before or after each comma.')
    } else if (nameInput.includes('  ')) {
        alert('Please do not add multiple spaces in the input field.')
    } else if (nameInput.indexOf(' ') >= 0) {
        if (fullNames === null) {
            fullNames = nameInput.split(',');
        } else {
            // If contact list already exists and you want to add multiple names
            if (nameInput.includes(',')) {
                addMultipleNames = nameInput.split(',')
                for (i = 0; i < addMultipleNames.length; i++) {
                        // Evaluates each name being added to prevent duplicates 
                        for (k = 0; k < fullNames.length; k++) {
                            if (addMultipleNames[i] == fullNames[k]) {
                                alert(`${addMultipleNames[i]} is already on the contact list - Not added.`)
                                // This break only stops comparing the current name to the master name list. The parent loop that evaluates each new name being added will continue.
                                break;
                            } else {
                                // This loops can run many times over depending on the current name list and the amount of names attempting to be added. This ensures that each new name will only be added one time.
                                if (newNames.includes(addMultipleNames[i]) || fullNames.includes(addMultipleNames[i])) {}
                                else {
                                    newNames.push(addMultipleNames[i])
                                }
                            }
                        }
                }
            } else {
                    // Loops through the current name list to check for duplicates 
                    for (i = 0; i < fullNames.length; i++) {
                        if (fullNames[i] === nameInput) {
                            alert(`${fullNames[i]} is already on the contact list.`);
                            newName = null;
                        } else {
                            newName = nameInput;
                        }
                    }
                    // Needs to be added outside of the loop to prevent infinite
                    if (newName !== null) {
                        fullNames.push(newName);
                    }
            }
            // If adding multiple names to an existing list - update the list with only the new names not currently present on the list. Duplicate names will not be added.
            fullNames = fullNames.concat(newNames); 
        }
    // If the text entry does not contain at least one space
    } else {
        alert('Please include a space between first and last name.')
    }
}

const createNLF = () => {
    namesLastFirst = [];
    for (i = 0; i < fullNames.length; i++) {
        splitName = fullNames[i].split(' ');
        namesLastFirst.push(`${splitName[1]} ${splitName[0]}`);
    }
}

const sortNLF = () => {
    namesLastFirst.sort();
}

const resetTable = () => {
    lastNames = [];
    firstNames = [];
    tableLast.innerHTML = '';
    tableFirst.innerHTML = '';
    tableDelete.innerHTML = '';
}

const createFirstAndLast = () => {
    for (i = 0; i < namesLastFirst.length; i++) {
        currentName = namesLastFirst[i].split(' ');
        lastNames.push(currentName[0])
        firstNames.push(currentName[1]);
        currentName = [];
    }
}

const addTable = () => {
    for (i = 0; i < lastNames.length; i++) {
        // If multiple names were added, and one or more of the strings between each comma does not contain a space, it will alert the user and delete that item from all arrays.
        if (lastNames[i] === `undefined` || firstNames[i] === `undefined`) {
            alert(`Invalid entry: "${firstNames[i]}". Please add a space between the first and last name. Not added to contact list.`);
            deleteName(i);
            // if multiple invalid entries, it will continue to loop and alert for each invalid.
            i++;
        } else {
            tableLast.innerHTML += `<p class='tableEntries'><span class='last-names'>${lastNames[i]}</span></p>`;
            tableFirst.innerHTML += `<p class='tableEntries'>${firstNames[i]}</p>`;
            tableDelete.innerHTML += `<p class='buttonEntries'><span class='delete-button'><button id=${i} onClick=deleteName(${i})><img id='deleteIcon' src="images/delete.png" width="15" height="15"></button></span></p>`;
        }
    }
}