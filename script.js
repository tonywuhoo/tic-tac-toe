let Board = document.getElementsByClassName("Board")
let Box = document.getElementsByClassName("box")
for (let i = 0; i < Box.length; i++){
  Box[i].addEventListener("click", doThis)
}
let possibilites = [["a1", "a2", "a3"], ["b1", "b2", "b3"], ["c1", "c2", "c3"], ["c1", "b2", "a3"], ["a1", "b2", "c3"], ["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"]]
let player = 0
function doThis() {
  if (player === 0) {
    document.getElementById(event.target.id).style.backgroundColor = "black";
    event.target.dataset.type = "clicked"
    for (let i = 0; i < possibilites.length; i++) {
      for (let j = 0; j < possibilites[i].length; j++) {
        if (possibilites[i][j] === event.target.id) {
          possibilites[i][j] = "black"
        }
      }
    }
    whosTurn.innerText = "Green's Turn"
    checkWIN()
    player = 1
  }
  else {
    document.getElementById(event.target.id).style.backgroundColor = "green";
    event.target.dataset.type = "clicked"
    for (let i = 0; i < possibilites.length; i++) {
      for (let j = 0; j < possibilites[i].length; j++) {
        if (possibilites[i][j] === event.target.id) {
          possibilites[i][j] = "green"
        }
      }
    }
    whosTurn.innerText = "Black's Turn"
    checkWIN()
    player = 0
  }
  function checkWIN() {
    counter = 0
    for (let i = 0; i < possibilites.length; i++) {
      if (possibilites[i][0] === "black" && possibilites[i][1] === "black" && possibilites[i][2] === "black") {
        modalContent.innerText = "Black Wins"
        ToggleModal()
      }
      if (possibilites[i][0] === "green" && possibilites[i][1] === "green" && possibilites[i][2] === "green") {
        modalContent.innerText = "Green Wins"
        ToggleModal()
      }
    }
    for (let i = 0; i < Box.length; i++){
      if (Box[i].dataset.type === "clicked") {
        counter++
      }
      if (counter === 9) {
        modalContent.innerText = "Its a Tie"
        counter = 0
        ToggleModal()
      }
    }
  }
}

function reset() {
  for (let i = 0; i < Box.length; i++){
    Box[i].style.backgroundColor = "#ffffb3"
  }
  possibilites = [["a1", "a2", "a3"], ["b1", "b2", "b3"], ["c1", "c2", "c3"], ["c1", "b2", "a3"], ["a1", "b2", "c3"], ["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"]]
  for (let i = 0; i < Box.length; i++){
    Box[i].dataset.type = "poop"
  }
}
