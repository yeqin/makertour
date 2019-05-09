var timeStarted = 0
var speeda = 0.5

var location1
var location2
var location3
var location4
var location5
var location6
var location7
var location8
var location9

var a = 0

var l1 = 0
var l2 = 0
var l3 = 0
var l4 = 0
var l5 = 0
var l6 = 0
var l7 = 0
var l8 = 0
var l9 = 0

function preload() {

  l1 = loadImage("pic/l1.jpg")
  l2 = loadImage("pic/l2.jpg")
  l3 = loadImage("pic/l3.jpg")
  l4 = loadImage("pic/l4.jpg")
  l5 = loadImage("pic/l5.jpg")
  l6 = loadImage("pic/l6.jpg")
  l7 = loadImage("pic/l7.jpg")
  l8 = loadImage("pic/l8.jpg")
  l9 = loadImage("pic/l9.jpg")

}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  location1 = true
}

function draw() {

  push()
  translate(0, -46)
  image(l1, 0, 0, window.innerWidth, window.innerHeight)

  noStroke()
  fill(255, 150)

  push()
  blendMode(OVERLAY)
  ellipse(300, 50 + 46, 30 + a, 30 + a)
  ellipse(300, 50 + 46, 18 + a, 18 + a)
  ellipse(300, 50 + 46, 10 + a, 10 + a)
  pop()
  a = a + speeda
  if (a > 10) {
    speeda = -0.5
  }
  if (a < 2) {
    speeda = 0.5
  }

  if (location1) {
    image(l1, 0, 0, window.innerWidth, window.innerHeight)
    push()
    blendMode(OVERLAY)
    ellipse(150, 120 + 46, 30 + a, 30 + a)
    ellipse(150, 120 + 46, 18 + a, 18 + a)
    ellipse(150, 120 + 46, 10 + a, 10 + a)
    pop()
  }

  if (location2) {
    image(l2, 0, 0, window.innerWidth, window.innerHeight)
    push()
    blendMode(OVERLAY)
    ellipse(120, 120 + 46, 30 + a, 30 + a)
    ellipse(120, 120 + 46, 18 + a, 18 + a)
    ellipse(120, 120 + 46, 10 + a, 10 + a)
    pop()

  }

  if (location4) {
    image(l4, 0, 0, window.innerWidth, window.innerHeight)
    push()
    blendMode(OVERLAY)
    ellipse(200, 20 + 46, 30 + a, 30 + a)
    ellipse(200, 20 + 46, 18 + a, 18 + a)
    ellipse(200, 20 + 46, 10 + a, 10 + a)
    pop()
  }

  if (location5) {
    image(l5, 0, 0, window.innerWidth, window.innerHeight)
    push()
    blendMode(OVERLAY)
    ellipse(320, 90 + 46, 30 + a, 30 + a)
    ellipse(320, 90 + 46, 18 + a, 18 + a)
    ellipse(320, 90 + 46, 10 + a, 10 + a)
    ellipse(70, 200 + 46, 30 + a, 30 + a)
    ellipse(70, 200 + 46, 18 + a, 18 + a)
    ellipse(70, 200 + 46, 10 + a, 10 + a)
    pop()
  }

  if (location6) {
    image(l6, 0, 0, window.innerWidth, window.innerHeight)
    push()
    blendMode(OVERLAY)
    ellipse(90, 270 + 46, 30 + a, 30 + a)
    ellipse(90, 270 + 46, 18 + a, 18 + a)
    ellipse(90, 270 + 46, 10 + a, 10 + a)
    pop()

  }
  if (location7) {
    image(l7, 0, 0, window.innerWidth, window.innerHeight)
    push()
    blendMode(OVERLAY)
    ellipse(270, 180 + 46, 30 + a, 30 + a)
    ellipse(270, 180 + 46, 18 + a, 18 + a)
    ellipse(270, 180 + 46, 10 + a, 10 + a)
    pop()
  }
  if (location8) {
    image(l8, 0, 0, window.innerWidth, window.innerHeight)
    push()
    blendMode(OVERLAY)
    ellipse(500, 40 + 46, 30 + a, 30 + a)
    ellipse(500, 40 + 46, 18 + a, 18 + a)
    ellipse(500, 40 + 46, 10 + a, 10 + a)
    pop()
  }

  if (location9) {
    image(l9, 0, 0, window.innerWidth, window.innerHeight)
    push()
    blendMode(OVERLAY)
    ellipse(100, 200 + 46, 30 + a, 30 + a)
    ellipse(100, 200 + 46, 18 + a, 18 + a)
    ellipse(100, 200 + 46, 10 + a, 10 + a)
    pop()
  }



  pop()

  noStroke()
  ellipse(mouseX, mouseY, 20, 20)


}

function mousePressed() {

  if ((location1 == true) && mouseX > 150-10 && mouseX < 150+10 && mouseY > 120-10 && mouseY < 120+10) {
    location6 = true
    location1 = false
    location2 = false
    location3 = false
    location4 = false
    location5 = false
    location7 = false
    location8 = false
    location9 = false
  }

  if (location6 == true && mouseX > 80 && mouseX < 100 && mouseY > 260 && mouseY < 280) {
    location5 = true
    location1 = false
    location2 = false
    location3 = false
    location4 = false
    location6 = false
    location7 = false
    location8 = false
    location9 = false
  }

  if ((location5 == true) && mouseX > 320 - 10 && mouseX < 320 + 10 && mouseY > 90 - 10 && mouseY < 90 + 10) {
    location7 = true
    location1 = false
    location2 = false
    location3 = false
    location4 = false
    location5 = false
    location6 = false
    location8 = false
    location9 = false
  }

  if ((location5 == true) && (mouseX > 70 - 10 && mouseX < 70 + 10 && mouseY > 200 - 10 && mouseY < 200 + 10)) {
    location1 = false
    location2 = false
    location3 = false
    location4 = false
    location5 = false
    location6 = false
    location7 = false
    location8 = false
    location9 = true
  }
  if ((location7 == true) && mouseX > 270 - 10 && mouseX < 270 + 10 && mouseY > 180 - 10 && mouseY < 180 + 10) {

    location4 = true
    location1 = false
    location2 = false
    location3 = false
    location5 = false
    location6 = false
    location7 = false
    location8 = false
    location9 = false
    }
  if ((location4 == true) && mouseX > 200 - 10 && mouseX < 200 + 10 && mouseY > 20 - 10 && mouseY < 20 + 10) {
    location2 = true
    location1 = false
    location3 = false
    location4 = false
    location5 = false
    location6 = false
    location7 = false
    location8 = false
    location9 = false
  }
  if (location2 == true && mouseX > 120 - 10 && mouseX < 120 + 10 && mouseY > 120 - 10 && mouseY < 120 + 10) {
    location8 = true
    location1 = false
    location2 = false
    location3 = false
    location4 = false
    location5 = false
    location6 = false
    location7 = false
    location9 = false
  }
  //
  if (location8 == true && mouseX > 500 - 10 && mouseX < 500 + 10 && mouseY > 40 - 10 && mouseY < 40 + 10) {
    location1 = true
    location2 = false
    location3 = false
    location4 = false
    location5 = false
    location6 = false
    location7 = false
    location8 = false
    location9 = false
  }
  if (location9 == true && mouseX > 80 - 10 && mouseX < 120 + 10 && mouseY > 200 - 10 && mouseY < 200 + 10) {
    location1 = false
    location2 = false
    location3 = false
    location4 = false
    location5 = false
    location6 = false
    location7 = false
    location8 = true
    location9 = false
  }

}
