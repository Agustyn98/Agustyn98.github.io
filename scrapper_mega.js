// Paste in console
var tables = document.getElementsByTagName('table');

// After opening the modal
// Check if at least 3 tables are found
if (tables.length >= 3) {
  var thirdTable = tables[2]; // Get the third table (index 2)

  // Find all the table cells (td elements) inside the third table
  var tableCells = thirdTable.getElementsByTagName('td');

  // Check if at least 3 table cells are found
  if (tableCells.length >= 3) {
    var c = tableCells[2].innerHTML; // Get the content of the 3th td 

    console.log('Content of the 3 td in the third table:\n\n');
    console.log(c)


  } else {
    console.log('Not enough td elements found in the third table.');
  }
} else {
  console.log('Not enough tables found on the page.');
}

// Find title (codigo prac + nombre)
var greenElement = document.querySelector('b.green');

if (greenElement) {
  var greenContent = greenElement.innerHTML; // Get the content of the b element

  console.log('Content of b element with class "green":\n');
  console.log(greenContent)
} else {
  console.log('No b element with class "green" found on the page.');
}

var greenContentParts = greenContent.trim().split('-')
var cod = greenContentParts[0].trim()
var nombre = greenContentParts[1].trim()


var rawString = `
<div id="${cod}" class="card mt-4">
    <h5 class="card-header">${nombre}</h5>
    <div class="card-body">
        <p class="card-text">${c}</p>
    </div>
</div>
`;

console.log('Final string: \n')
console.log(rawString)