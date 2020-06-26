var nameInput, fullName, nameID;

var tableHTML = document.querySelector('#fromJS');
var splitName = [];
var nameArr = [];
var namesLastFirst = [];
var currentName = [];
var lastNames = [];
var firstNames = [];

document.querySelector("#nameInput > input[type=text]:nth-child(1)").addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        addName();
    }
});

function updateTable(nameInput) {

    // 1 Get values from input
    if (nameInput === '') {
        alert('At least one name is required.');
    } else if (nameInput.includes(', ')) {
        alert('Please do not add a space after each comma.')
    } else {
        fullNames = nameInput.split(',');
    }

    // 2 Split the full name
    for (i = 0; i < fullNames.length; i++) {
        splitName = fullNames[i].split(' ');
        namesLastFirst.push(`${splitName[1]} ${splitName[0]}`);
    }

    // 3 Sort the array so so last name will be alphabetical
    namesLastFirst.sort()

    // 4 clear the current names array and html
    lastNames = [];
    firstNames = [];
    tableHTML.innerHTML = '';

    // 5 Split the namesLastFirst and add to separate arrays with the same index
    for (i = 0; i < namesLastFirst.length; i++) {
        currentName = namesLastFirst[i].split(' ');
        lastNames.push(currentName[0])
        firstNames.push(currentName[1]);
        currentName = [];
    }

    // 6 Add names to the table
    for (i = 0; i < firstNames.length; i++) {
        tableHTML.innerHTML += `<p><span class='last-names'>${lastNames[i]}</span> ${firstNames[i]}</p>`
    }
}

const addName = () => { 
    event.preventDefault();
    nameInput = document.querySelector("#nameInput > input[type=text]:nth-child(1)").value
    updateTable(nameInput);
    document.querySelector("#nameInput > input[type=text]:nth-child(1)").value = '';
}

// for (i = 0; i < nameArr.length; i++) {
//     if (tableHTML === '') {
//         tableHTML = `<td>${nameArr[i]}</td>`;
//         document.querySelector('#fromJS').innerHTML = tableHTML;
//     } else {
//         document.querySelector('#fromJS').innerHTML = '';
//         tableHTML += `<td>${nameArr[i]}</td>`;
//         document.querySelector('#fromJS').innerHTML = tableHTML;
//         break;
//     }
// }

// const toTable = () => {

//     // Loop through array and add table cells
//     for (var i=0; i<nameArr.length; i++) {
//         tableHTML += "<td>" + nameArr[i] + "</td><br>";

//         // Break into next row
//         var next = i+1;
//         if (next%=0 && next!=nameArr.length) {
//             tableHTML += "</tr><tr>";
//         }
//     }
//     document.querySelector('#tableContainer').innerHTML = tableHTML;
// }

// console.log('are we getting here?')
// document.querySelector('#fromJS').innerHTML = `<td>test</td>`;
// for (i = 0; i < lastNames.length; i++) {
//     if (document.querySelector('#fromJS').innerHTML === '') {
//         document.querySelector('#fromJS').innerHTML = `<td class='last-names'>${lastNames[0]}</td> <td>${firstNames[0]}</td>`;
//         // document.querySelector('#fromJS').innerHTML += `</tr>`
//     } else {
//         document.querySelector('#fromJS').innerHTML += `<tr>`;
//         document.querySelector('#fromJS').innerHTML += `<td class='last-names'>${lastNames[i]}</td> <td>${firstNames[i]}</td>`;
//     }
// }