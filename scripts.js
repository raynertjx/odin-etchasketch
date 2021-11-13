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

function createGrid(rows, cols) {
  gridcontainer.style.setProperty('--grid-rows', rows);
  gridcontainer.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    gridcontainer.appendChild(cell).className = "grid-item";
  };
}

function resetGrid() {
  const indivCells = document.querySelectorAll(".grid-item");
  indivCells.forEach(indivCell => {
    indivCell.style.opacity = "0";
    indivCell.style.backgroundColor = "#ffffff";
  })
}

const gridcontainer = document.getElementById("gridcontainer");
const penBtn = document.getElementById("penbtn");
const rainbowBtn = document.getElementById("rainbowbtn");
const eraserBtn = document.getElementById("eraserbtn");
const clearBtn = document.getElementById("clearbtn");

let currentMode = 'pen';

penBtn.addEventListener("click", () => {
  penBtn.classList.add('active');
  rainbowBtn.classList.remove('active');
  eraserBtn.classList.remove('active');
  penMouseOver();
})

rainbowBtn.addEventListener("click", () => {
  penBtn.classList.remove('active');
  rainbowBtn.classList.add('active');
  eraserBtn.classList.remove('active');
  rainbowMouseOver();
})

eraserBtn.addEventListener("click", () => {
  penBtn.classList.remove('active');
  rainbowBtn.classList.remove('active');
  eraserBtn.classList.add('active');
  eraserMouseOver();
})

clearBtn.addEventListener("click", () => {
    resetGrid();
  });
 
function penMouseOver() {
  const indivCells = document.querySelectorAll(".grid-item");
  indivCells.forEach(indivCell => {
    indivCell.addEventListener("mouseover", () => {
      indivCell.style.opacity = "1";
      indivCell.style.backgroundColor = getColorFromButton();
    })
  })
}

function rainbowMouseOver() {
  const indivCells = document.querySelectorAll(".grid-item");
  indivCells.forEach(indivCell => {
    indivCell.addEventListener("mouseover", () => {
      indivCell.style.opacity = "1";
      indivCell.style.backgroundColor = getRandomColor();
    })
  })
}

function eraserMouseOver() {
  const indivCells = document.querySelectorAll(".grid-item");
  indivCells.forEach(indivCell => {
    indivCell.addEventListener("mouseover", () => {
      indivCell.style.backgroundColor = "#ffffff";
    })
  })
}

window.onload = function() {
  createGrid(16, 16);
  penMouseOver();
  penBtn.classList.add('active');
}

