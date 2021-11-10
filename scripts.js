var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML =  slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
  resetGrid();
  createGrid(slider.value, slider.value);
  defaultMouseOver();
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getColorFromButton() {
  let colorPicker = document.getElementById("colorpicker");
  return colorPicker.value;
}

const gridcontainer = document.getElementById("gridcontainer");

function createGrid(rows, cols) {
  gridcontainer.style.setProperty('--grid-rows', rows);
  gridcontainer.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    gridcontainer.appendChild(cell).className = "grid-item";
  };
}

function resetGrid() {
  while (gridcontainer.firstChild) {
    gridcontainer.removeChild(gridcontainer.firstChild);
  }
}

const colorPicker = document.getElementById("colorpicker");
colorPicker.addEventListener("input", () => {
  let color = document.getElementById("colorpicker").value;
  console.log(color);
})

const colorBtn = document.getElementById("colorbtn");
colorBtn.addEventListener("click", () => {
  colorMouseOver();
})

const rainbowBtn = document.getElementById("rainbowbtn");
rainbowBtn.addEventListener("click", () => {
  rainbowMouseOver();
})

const eraserBtn = document.getElementById("eraserbtn");
eraserBtn.addEventListener("click", () => {
  eraserMouseOver();
})
const clearBtn = document.getElementById("clearbtn");
clearBtn.addEventListener("click", () => {
    resetGrid();
    createGrid(slider.value, slider.value);
    defaultMouseOver();
  });

function defaultMouseOver() {
  const indivCells = document.querySelectorAll(".grid-item");
  indivCells.forEach(indivCell => {
    let temp = indivCell.style.opacity;
    let cellOpacity = Number(temp);
    indivCell.addEventListener("mouseover", () => {
      indivCell.style.backgroundColor = "black";
      function add() {
        cellOpacity += 0.1; 
        return cellOpacity.toString();
      }
      indivCell.style.opacity = add();
    })
  })
}

function colorMouseOver() {
  const indivCells = document.querySelectorAll(".grid-item");
  indivCells.forEach(indivCell => {
    let temp = indivCell.style.opacity;
    let cellOpacity = Number(temp);
    indivCell.addEventListener("mouseover", () => {
      indivCell.style.backgroundColor = getColorFromButton();
      function add() {
        cellOpacity += 0.1; 
        return cellOpacity.toString();
      }
      indivCell.style.opacity = add();
    })
  })
}

function rainbowMouseOver() {
  const indivCells = document.querySelectorAll(".grid-item");
  indivCells.forEach(indivCell => {
    indivCell.addEventListener("mouseover", () => {
      indivCell.style.backgroundColor = getRandomColor();
      indivCell.style.opacity = "1";
    })
  })
}

function eraserMouseOver() {
  const indivCells = document.querySelectorAll(".grid-item");
  indivCells.forEach(indivCell => {
    indivCell.addEventListener("mouseover", () => {
      indivCell.style.backgroundColor = "white";
    })
  })
}
createGrid(16, 16);
defaultMouseOver();

