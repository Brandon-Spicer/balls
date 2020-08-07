console.log("ya fuckin dummy")

var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')

// make bouncing ball


// credit: https://stackoverflow.com/questions/1484506/random-color-generator
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


balls = new Array(10)  
nBalls = 500 

for (i = 0; i < nBalls; i++) {
	// create a ball with random values
	x = Math.random() * canvas.width
	y = Math.random() * canvas.height
	r = Math.ceil(Math.random()*10)
	// velocities between 1 and 5
	dx = Math.ceil((Math.random()-0.5)*5)
	dy = Math.ceil((Math.random()-0.5)*5) 
	color = getRandomColor()

	balls[i] = [x, y, r, dx, dy, color]
	console.log(balls[i])
}




// animation function
function animate() {
	requestAnimationFrame(animate)


	c.clearRect(0, 0, innerWidth, innerHeight)

	for (i=0; i<nBalls; i++) {
		x = balls[i][0]
		y = balls[i][1]
		r = balls[i][2]
		dx = balls[i][3]
		dy = balls[i][4]
		color = balls[i][5]

		if (i==0) {
			console.log(x, y, r, dx, dy)
		}

		c.beginPath()
		c.arc(x, y, r, 0, r * Math.PI)
		c.fillStyle = color
		c.fill()
		c.stroke()

		// check for collisions with wall
		if (x + r >= canvas.width || x - r <= 0) {
			dx = -dx
		}
		if (y + r >= canvas.height || y - r <= 0) {
			dy = -dy
		}

		balls[i][0] += dx 
		balls[i][1] += dy
		balls[i][3] = dx
		balls[i][4] = dy

	}
}


animate()







// c.fillRect(50, 50, 50, 50)


// x = 100 
// y = 100
// max = 25 
// inc = 20 
// 
// for (i = 0; i <= max; i++) {
// 
// 	c.beginPath()
// 	c.moveTo(x + i*inc, y)
// 	c.lineTo(x + max*inc, y + i*inc)
// 	c.stroke()
// 
// }
// 
// for (i = 0; i <= max; i++) {
// 
// 	c.beginPath()
// 	c.moveTo(y, x + i*inc)
// 	c.lineTo(y + i*inc, x + max*inc)
// 	c.stroke()
// 
// }
// 
// c.beginPath()
// c.arc(x + max*inc/2, y + max*inc/2, 50, 0, 2*Math.PI)
// c.fillStyle = 'black'
// c.fill()
// c.stroke()
// 
// c.beginPath()
// c.arc(x + max*inc/2, y + max*inc/2, 30, 0, 2*Math.PI)
// c.fillStyle = 'red'
// c.fill()
// c.stroke()
// 


