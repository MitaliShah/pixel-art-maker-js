//Define Variables
const size = document.querySelector("#sizePicker");
const submitButton = document.querySelector("#submit");
const grid = document.querySelector("#pixelCanvas");


//create a function to make a grid
function makeGrid(evt){
    //Erase grid on submit button click
     grid.innerHTML = "";
    //Take input from users
  let height = document.querySelector("#inputHeight").value;
  let Width = document.querySelector("#inputWidth").value;
    evt.preventDefault();
    
    // Fill cell with selected color
  
 		grid.addEventListener("click", function(event){
        let color = document.querySelector("#colorPicker").value;
        event.target.style.backgroundColor = color;
      });

  //when size is submitted by user call makeGrid function
       //draw grid
        for (let i = 1; i <= height; i++){  
            let newHeight = document.createElement("tr");
          grid.appendChild(newHeight);
              for (let j = 1; j <= Width; j++){
              let newWidth = document.createElement("td");
                newHeight.appendChild(newWidth);
              }
         }

}
document.getElementById("sizePicker").addEventListener("submit", makeGrid);
