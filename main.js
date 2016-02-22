// GO! Event-listeners Homework wk3

// ***   Task 1  ***  //
// 	- Test to see if button works. It does. Yay. 
//var button =  document.querySelector(".navButton")
// var alertFunction = function() {
//   alert("click clack")  
// }
// button.addEventListener('click',alertFunction)

var navDisappear = document.querySelector(".navButton")
var navButton = document.querySelector(".nav-menu")

var buttonState = {
  showing: true,
}

var toggleButton = function() {
  if (buttonState.showing) {
    navButton.style.opacity = 0
    buttonState.showing = false
  }
  else {
    navButton.style.opacity = 1
    buttonState.showing = true
  }
}

navDisappear.addEventListener("click",toggleButton)


// ***   Task 2  ***  //

var inputBox = document.querySelector('input[type="text"].input2')

var itemsListUl = document.querySelector("#itemsList")

var addItem = function(keyEvent) {
  // console.log(keyEvent)
  var inputBox = keyEvent.srcElement
  if (keyEvent.keyCode === 13) {
      var userInput = inputBox.value
      var newLi = document.createElement('li')
      newLi.textContent = userInput
      itemsListUl.appendChild(newLi)
      inputBox.value = ''
  } 
}

inputBox.addEventListener('keydown',addItem)

/////// Note: To prevent the input boxes from task 2 and 3 from 
// linking, we assigned two different classes to both inputs

// ***   Task 3  ***  //

var inputBox3 = document.querySelector('input[type="text"].input3')

var itemsListUl3 = document.querySelector("#itemsList3")

var addItem3 = function(keyEvent3) {
  // console.log(keyEvent)
  var inputBox3 = keyEvent3.srcElement
  if (keyEvent3.keyCode === 13) {
      var userInput = inputBox3.value
      var newLi = document.createElement('li')
      newLi.textContent = userInput
      itemsListUl3.appendChild(newLi)
      inputBox3.value = ''
  } 
}

inputBox3.addEventListener('keydown',addItem3)






