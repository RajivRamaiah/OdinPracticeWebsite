
const controls = document.querySelector('.controls');

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function (event) {
  resetGrid();
});

function resetGrid(){
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(element => {
    element.style.backgroundColor = "white";
  });
}
function buildGrid(squareHeight) {
  const grid = document.body.querySelector('.grid');
  gridArea = grid.clientHeight * grid.clientWidth;
  let gridSize = Math.trunc(gridArea/(squareHeight*squareHeight));
  for (let i=0; i<gridSize; i++) {
      const grid = document.querySelector('.grid');
      let size = grid.clientWidth;
      let width = squareHeight-2
      // console.log(width);
      // console.log(width+"px");
      var boxDiv = document.createElement("div");
      boxDiv.classList.add('box');
      boxDiv.style.width = width+"px";
      boxDiv.style.height = width+"px";
      boxDiv.style.border = "1px solid black";
      boxDiv.style.backgroundColor = "#ffffff";
      // boxDiv.style.margin = "20px auto";
      // boxDiv.textContent = "This is an HTML box!";

      // boxDiv.addEventListener('click', () => {
      //     boxDiv.classList.toggle('.active');
      //     boxDiv.style.backgroundColor = "#008e93";
      //     console.log("active");
      // });

      boxDiv.addEventListener('mouseover', function (event) {
          // Add the "active" class to only divs with a "box" class
          if (event.target.matches('.box')) {
            event.target.classList.add('active');
            
            event.target.style.backgroundColor = "#008e93";
            console.log("Set color)");
          }
        });


  
      grid.appendChild(boxDiv);
  }
}

let numSquares = 10
buildGrid(500/numSquares);