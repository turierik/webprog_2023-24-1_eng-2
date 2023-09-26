// querySelector and querySelectorAll + basics

const h = document.querySelector('h1')
h.innerText = 'Changed text'
h.innerHTML = "Some <i>italic</i> text"
h.style.color = 'blue'
h.style.backgroundColor = 'yellow'

const ps = document.querySelectorAll('p')
for (const p of ps)
    p.style.color = 'green'

// Generating single elements

const p = document.createElement('p')
p.innerText = 'New paragraph'
document.body.appendChild(p)

// Task: generate a list from an array
const fruits = ["apple", "banana", "coconut", "dragonfruit"]

for (const fruit of fruits){
    const li = document.createElement('li')
    li.innerText = fruit
    document.querySelector('ul').appendChild(li)
}

// + short version :)
document.querySelector('ul').innerHTML =
    fruits.map(fruit => `<li>${fruit}</li>`).join('')

// Task: generate a table from a matrix

const matrix = [
    [ 1, 2, 3 ], 
    [ 4, 5, 6 ], 
    [ 7, 8, 9 ]
]

for (const row of matrix){
    const tr = document.createElement('tr')
    for (const cell of row){
        const td = document.createElement('td')
        td.innerText = cell
        tr.appendChild(td)
    }
    document.querySelector('table').appendChild(tr)
}

// + short version :)
document.querySelector('table').innerHTML = 
    matrix.map(row => `<tr>${
        row.map(cell => `<td>${cell}</td>`).join('')
    }</tr>`).join('')

// Event Handling - the 3 steps
// 1. select every element that is involved in the event
const helloButton = document.querySelector('button')
const outputP = document.querySelector('#output')

// 2. write a handler function
let counter = 0
function handleHelloButton(){
    counter++
    outputP.innerText = `Said hello ${counter} times.`
}

// 3. add an event listener to the trigger
helloButton.addEventListener('click', handleHelloButton)

// Task: Generate an integer between 1 and 100. The user has to guess the number using a text field and a button. Respond with: lower, higher, correct.
const target = Math.floor(Math.random() * 100) + 1
const guessButton = document.querySelector('#guessbutton')
const guessInput  = document.querySelector('#guessinput')
const guessOutput = document.querySelector('#guessoutput')

function handleGuessButton(){
    const guess = +guessInput.value
    if (guess < target)
        guessOutput.innerText = "GO HIGHER!"
    else if (guess > target)
        guessOutput.innerText = "GO LOWER!"
    else
        guessOutput.innerText = "CORRECT!"
}

guessButton.addEventListener('click', handleGuessButton)

// Task: Turn a text field's background red if there more than 8 chars in it.

const redInput = document.querySelector('#red')

function handleRedInput(){
    redInput.style.backgroundColor = redInput.value.length > 8 ? 'red' : 'white'
}

redInput.addEventListener('input', handleRedInput)