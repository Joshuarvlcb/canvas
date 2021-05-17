// const canvas = document.querySelector('canvas').getContext('2d');


const canvas = document.querySelector('canvas');
const draw = canvas.getContext('2d');

canvas.width = window.innerWidth
canvas.height = window.innerHeight

////////////////////////
//rectangles
//fill rect will make it black and we can chang color with fill style
draw.fillStyle = "#ff0000"

draw.fillRect(0,0,50,50)

//

//first argumnet is the x position
//second argument is the y axis
//3rd argument is width
//4th is the height
draw.strokeRect(100,100,200,50)


///////////////////////
//lines
//this tells the canvas that we want to draw a line
draw.strokeStyle = "#0000FF"
draw.beginPath()

draw.moveTo(50,50)

draw.lineTo(100,50)
//starting point of the line


draw.lineTo(100,100)
//this will render the line

draw.stroke()



console.log(draw)
///////////////////////////////////////////////////////////////////
//Arcs and circles
draw.beginPath()
draw.strokeStyle = "#FFF00"
//3rd argument is the radius size of the circle
//4th argument decides how much of the circle to draw 0 is full circle starting position
//5th argument is radians we need to end ending position
draw.arc(200,200,50,0,2 * Math.PI)
draw.stroke()

new Array(20).fill('').forEach((_,i) => {
    let xpos = Math.random() * window.innerWidth
    let ypos = Math.random() * window.innerHeight
    let rad = Math.random() * 30 + 10

    draw.beginPath()
    draw.strokeStyle = `rgb(${Math.floor(Math.random() * 257)},${Math.floor(Math.random() * 257)},${Math.floor(Math.random() * 257)})`
    draw.arc(xpos,ypos,rad,0,2 * Math.PI)
    draw.stroke()
})

// setInterval(() => {
//     let xpos = Math.random() * window.innerWidth
//     let ypos = Math.random() * window.innerHeight
    
//     draw.fillStyle = `rgb(${Math.floor(Math.random() * 257)},${Math.floor(Math.random() * 257)},${Math.floor(Math.random() * 257)})`
//     draw.fillRect(xpos,ypos,(Math.random() * 70) + 30 ,Math.random() * 90)

// },10)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Animating elements
//this is done with a recursive function a function that calls itself
//we need to use requestAnimationFrame() lets the computer know there is about to be movements on the screen and to re-render the canvas with new information


//Clearing the canvas
//clearRect this will deifne a area of your canvas and remoce all of the rendered images and lines in that area
let xPos = 25
let yPos = 50
let xDir = true
let yDir = true
let image = new Image()
image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/1280px-DVD_logo.svg.png'

const animate = () => {
    requestAnimationFrame(animate)
    draw.clearRect(0,0,window.innerWidth,window.innerHeight)

    // draw.fillStyle = "rgb(0,0,0)"
    // draw.fillRect(xPos,yPos,146,80)

    // draw.beginPath()
    // draw.font = '60px Arial'
    // draw.fillStyle = "rgb(255,0,0)"
    // draw.fillText('DVD',xPos + 10,yPos + 60)
    draw.drawImage(image,xPos,yPos,100,50)

    
    if(xPos >= canvas.width - 100)    xDir = false
    if(xPos <= 0) xDir = true

    if(yPos >= canvas.height - 50)    yDir = false
    if(yPos <= 0) yDir = true

    
    xDir ? xPos += 2:xPos -=2
    yDir ? yPos += 2:yPos -=2
   
}
