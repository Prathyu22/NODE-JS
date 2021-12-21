const button = document.querySelector('button')
const input = document.querySelector('input')
const div = document.querySelector('div')

console.log(button,input,div) // To check whether these are loaded or not.

const arr = [1,2,3,4,5]
localStorage.setItem('inputValue',JSON.stringify(arr))
console.log(JSON.parse(localStorage.getItem('inputValue')))
// div.innerHTML = localStorage.getItem("inputValue")
// button.addEventListener('click', (req,res) => {
//     localStorage.setItem('inputValue',input.value)
//     div.innerHTML = input.value
// })
//inner.HTML replaces the string.

//localStorage.setItem('inputValue',"Something")
//console.log(localStorage.getItem("inputValue"))
