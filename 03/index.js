let prev = null
const timerSpan = document.querySelector('span#timer')
function handleWindowClick(e){
    if (prev === null){
        prev = e
    } else {
        timerSpan.innerText = e.timeStamp - prev.timeStamp
        prev = e
    }
}

window.addEventListener('click', handleWindowClick)

const ul = document.querySelector('ul')
ul.addEventListener('click', function(e){
    if (e.target.matches('li')){
        console.log(e.target)
        e.target.style.color = 'green'
    }
})

const table = document.querySelector('table')

delegate(table, 'click', 'tr', function(e){
    this.style.backgroundColor = 'yellow'
})

function delegate(parent, type, selector, handler) {
    parent.addEventListener(type, function (event) {
        const targetElement = event.target.closest(selector)
        if (this.contains(targetElement)) handler.call(targetElement, event)
    })
}

// Task 1: Place 2 text/number inputs (N, M) and a button a page. When the button is clicked, generate a table NxM. When a cell is clicked, set the background color of the cell to black. (Recommended to set the cells to fixed size: 20x20px)
// Task 1++: Use a color picker to set the background color. (<input type="color">)
// Task 1++++: Set the background color also when the mouse is dragged with the button pressed. (Event type: mousemove + check buttons)

const widthInput = document.querySelector('#n')
const heightInput = document.querySelector('#m')
const startButton = document.querySelector('button')
const paintTable = document.querySelector('#paint')
const colorPicker = document.querySelector('input[type=color]')

startButton.addEventListener('click', function(e){
    const n = parseInt(widthInput.value)
    const m = parseInt(heightInput.value)
    for (let i = 0; i < m; i++){
        let tr = document.createElement('tr')
        for (let j = 0; j < n; j++){
            let td = document.createElement('td')
            tr.appendChild(td)
        }
        paintTable.appendChild(tr)
    }
})

delegate(paintTable, 'mousemove', 'td', function(e){
    if (e.buttons === 1)
        this.style.backgroundColor = colorPicker.value
})