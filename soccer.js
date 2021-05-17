
const canvas = document.querySelector('canvas')
const draw = canvas.getContext('2d')

canvas.height = 500
canvas.width =  800


draw.beginPath()
draw.moveTo(400,0)
draw.lineTo(400,500)
draw.stroke()

draw.beginPath()

draw.arc(400,250,90,0,2 * Math.PI)
draw.stroke();


draw.strokeRect(0,107,130,300);
draw.strokeRect(0,175,70,150);

draw.strokeRect(680,107,130,300);
draw.strokeRect(730,175,70,150);

const canvas2 = document.getElementById('canvas')
canvas2.height = 500
canvas2.width = 800
const draw2 = canvas2.getContext('2d')

let xPos = 25
let yPos = 50
let xDir = true
let yDir = true
let image = new Image()
image.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1024px-Soccerball.svg.png'

const animate = () => {
    requestAnimationFrame(animate)
    draw2.clearRect(0,0,window.innerWidth,window.innerHeight)

    // draw.fillStyle = "rgb(0,0,0)"
    // draw.fillRect(xPos,yPos,146,80)

    // draw.beginPath()
    // draw.font = '60px Arial'
    // draw.fillStyle = "rgb(255,0,0)"
    // draw.fillText('DVD',xPos + 10,yPos + 60)
    draw2.drawImage(image,xPos,yPos,100,100)

    
    if(xPos >= canvas.width - 100)    xDir = false
    if(xPos <= 0) xDir = true

    if(yPos >= canvas.height - 100)    yDir = false
    if(yPos <= 0) yDir = true

    
    xDir ? xPos += 2:xPos -=2
    yDir ? yPos += 2:yPos -=2
   
}
animate()