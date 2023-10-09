// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
const grid = document.getElementById("grid");
// Add a row
function addR() {
    var row = grid.insertRow(numRows);
    var cell = row.insertCell(0); 
    for(let i = 0; i < numCols-1; i++) {
        var cell = row.insertCell(0); 
    }
    numRows++;
}

// Add a column
function addC() {
    if (numRows === 0) {
        addR();
    } else {
        for (let i = 0; i < numRows; i++) {
            grid.rows[i].insertCell(-1);
        }
    }
    numCols++;
}

// Remove a row
function removeR() {
    grid.deleteRow(-1); 
    numRows--;
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}