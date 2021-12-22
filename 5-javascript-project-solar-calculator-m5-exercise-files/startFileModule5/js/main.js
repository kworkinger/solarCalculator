// JavaScript Document
// var foundYou = document.getElementById('overview')
// console.log(foundYou)
// console.log(foundYou.innerText)
// foundYou.innerText = ">>I Changed You<<"

// var foundYou = document.getElementsByTagName('p')
// console.log(foundYou)
// console.log(foundYou[2].innerText)
// foundYou[1].innerText = '..'

// var foundYou = document.getElementsByName('description')
// console.log(foundYou[0].innerText)
// foundYou[0].innerHTML = ">>I changedYou<<"

// var foundYou = document.getElementsByClassName('smallCenter')
// console.log(foundYou[0].innerText)
// foundYou[0].innerText = "<<New Paragraph Info<<"

// var foundYou = document.querySelectorAll('ul#fn_list li')
// console.log(foundYou[0].innerText)
// console.log('LENGTH OF COLLECTION >> '+ foundYou.length)
// foundYou[0].innerText = "<<I Changed You>>"

// var foundYou = document.getElementById('sw_list')
// console.log(foundYou)
// var childArray = foundYou.getElementsByTagName('li')
// console.log(childArray)
// childArray[0].innerText = ">>These Items"
// childArray[1].innerText = ">>Have Just"
// childArray[2].innerText = ">>Been Changed"

// var newOptions = ["Orange", "Red", "Blue"]

// var foundYou = document.getElementById('myForm')
// console.log(foundYou)

// var selectArray = foundYou.getElementsByTagName('option')
// console.log(selectArray)

// for (i=0; i<selectArray.length; i++) {
//     selectArray[i].innerText = newOptions[i]
// }

// var foundYou = document.getElementById('myForm')
// console.log(foundYou)

var selectArray = foundYou.getElementsBy('input')
console.log(selectArray)

for (i=0; i<selectArray.length; i++) {
    console.log(selectArray[i].value)
}