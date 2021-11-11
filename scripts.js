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
const colorBtn = document.getElementById("colorbtn");
const rainbowBtn = document.getElementById("rainbowbtn");
const eraserBtn = document.getElementById("eraserbtn");
const clearBtn = document.getElementById("clearbtn");
const indivCells = document.querySelectorAll(".grid-item");


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
    indivCell.style.backgroundColor = "white";
    indivCell.style.opacity = "0";
    })
  }

colorBtn.addEventListener("click", () => {
  colorBtn.classList.add('active');
  rainbowBtn.classList.remove('active');
  eraserBtn.classList.remove('active');
  colorMouseOver();
})

rainbowBtn.addEventListener("click", () => {
  colorBtn.classList.remove('active');
  rainbowBtn.classList.add('active');
  eraserBtn.classList.remove('active');
  rainbowMouseOver();
})

eraserBtn.addEventListener("click", () => {
  colorBtn.classList.remove('active');
  rainbowBtn.classList.remove('active');
  eraserBtn.classList.add('active');
  eraserMouseOver();
})

clearBtn.addEventListener("click", () => {
    resetGrid();
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

window.onload = function() {
  createGrid(16, 16);
  defaultMouseOver();
}

