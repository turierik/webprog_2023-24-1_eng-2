const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

// Option 1: drawing using shapes - directly on the canvas
// e.g. fillRect, strokeRect, fillText, strokeText, drawImage

ctx.fillStyle = 'orange'
ctx.fillRect(50, 50, 100, 150)

ctx.strokeStyle = 'blue'
ctx.lineWidth = 4
ctx.strokeRect(50, 50, 100, 150)

// Option 2: drawing using paths - not drawn directly
// e.g. moveTo, lineTo, arc, ...

ctx.beginPath()
ctx.moveTo(200, 200)
ctx.lineTo(200, 250)
ctx.lineTo(250, 250)
ctx.lineTo(200, 200)
ctx.fillStyle = 'red'
ctx.fill() // or ctx.stroke()

const circle = {
    x: 300,
    y: 50,
    r: 20,
    vy: 0
}

function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    ctx.arc(circle.x, circle.y, circle.r, 0, 2*Math.PI)
    ctx.fill()
}

function update(dt){
    circle.vy += 0.0001 * dt
    circle.y += circle.vy * dt
}
let last = performance.now()
function gameloop(){
    let dt = performance.now() - last
    last = performance.now()
    draw()
    update(dt)
    requestAnimationFrame(gameloop)
}
gameloop()

// Task:
// - multiple balls
// - bounce the balls off the bottom edge
// - click to add a new ball
// - random colours
