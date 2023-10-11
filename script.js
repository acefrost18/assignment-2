// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
const grid = document.getElementById("grid");
// Add a row
function addR() {
    var row = grid.insertRow(numRows);
    var cell = row.insertCell(0); 
    cell.addEventListener("click", function() {
        this.style.backgroundColor = colorSelected;
    });
    for(let i = 0; i < numCols; i++) {
        cell = row.insertCell(0); 
        cell.addEventListener("click", function() {
            this.style.backgroundColor = colorSelected;
        });

    }
    numRows++;
}

// Add a column
function addC() {
    if (numRows === 0) {
        addR();
    } 
    else {
        for (let i = 0; i < numRows; i++) {
           var cell = grid.rows[i].insertCell(-1);
            cell.addEventListener("click", function() {
                this.style.backgroundColor = colorSelected;
            });
        }
        numCols++;
    }
}

// Remove a row
function removeR() {
    if(numRows > 0) {
        grid.deleteRow(-1); 
        numRows--;
    }
    
}

// Remove a column
function removeC() {
    if(numCols == 0) {
        while(numRows > 0) {
            removeR();
        }
    }
    if(numCols > 0) {
        for (let i = 0; i < numRows; i++) {
            grid.rows[i].deleteCell(-1);
        }
        numCols--;
    }
    
    
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    const cells = grid.querySelectorAll("td"); 
    cells.forEach(cell => {
        if(cell.style.backgroundColor === "white" || cell.style.backgroundColor === "") {
            cell.style.backgroundColor = colorSelected;
        }
    });
}

// Fill all cells
function fillAll(){
    const cells = grid.querySelectorAll("td");
    cells.forEach(cell => {
        cell.style.backgroundColor = colorSelected;
    });
}

// Clear all cells
function clearAll(){
    const cells = grid.querySelectorAll("td");
    cells.forEach(cell => {
        cell.style.backgroundColor = "White";
    });
}
