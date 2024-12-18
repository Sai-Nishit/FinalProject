let bgImg; 
let zombieImg; 

let sensorData = [0, 0, 1]; 
let targetX, targetY; 
let pointerX, pointerY; 
let recordedX = null, recordedY = null; 
let gameState = "height";
let serial;
let lives = 3;
let buttonPressed = false;


let bgMusic;
let hitSound;
let missSound;


let fadeAlpha = 0; 
let fadeIn = false;

function preload() {
  bgImg = loadImage("bg.png"); 
  zombieImg = loadImage("Zombie.png"); 


  bgMusic = loadSound("BG.mp3", () => console.log("Background music loaded."));
  hitSound = loadSound("hit_sound.mp3", () => console.log("Hit sound loaded."));
  missSound = loadSound("miss_sound.mp3", () => console.log("Miss sound loaded."));
}

function setup() {
  createCanvas(windowWidth, windowHeight);


  serial = new p5.SerialPort();
  serial.open("COM5"); 
  serial.on("data", serialEvent);


  targetX = random(100, width - 100);
  targetY = random(100, height - 100);

  pointerX = width / 2;
  pointerY = height / 2;

  noCursor(); 

 s
  setTimeout(() => {
    serial.write("LED_ON,4\n"); 
    serial.write("LED_ON,3\n"); 
    serial.write("LED_ON,5\n"); 
    console.log("LEDs turned on at game start.");
  }, 1000); 

  console.log("Click anywhere to start the game.");
}

function draw() {
  background(30);

  drawBackground();
  drawZombie();
  updateCursorPosition();
  drawCrosshair(pointerX, pointerY);

  if (fadeIn) drawFadeAnimation();

  displayLives();
  displayMessages();
}

function drawBackground() {
  imageMode(CORNER);
  image(bgImg, 0, 0, width, height);
}

function drawZombie() {
  imageMode(CENTER);
  image(zombieImg, targetX, targetY, 150, 150);
}

function updateCursorPosition() {
  if (gameState === "height") {
    pointerY = map(sensorData[0], 0, 15.4, 0, height);
    pointerX = width / 2;
  } else if (gameState === "width") {
    pointerX = map(sensorData[1], 0, 15.4, width, 0);
    pointerY = recordedY || height / 2;
  }
}

function drawCrosshair(x, y) {
  stroke(255, 0, 0);
  strokeWeight(2);
  line(x - 10, y, x + 10, y);
  line(x, y - 10, x, y + 10);
}

function displayLives() {
  fill(255);
  textSize(24);
  textAlign(LEFT);
  text(`Lives: ${lives}`, 10, 30);
}

function displayMessages() {
  fill(255);
  textSize(24);
  textAlign(CENTER);

  if (gameState === "height") {
    text("Choose the height. Press the button.", width / 2, height - 50);
  } else if (gameState === "width") {
    text("Choose the width. Press the button.", width / 2, height - 50);
  } else if (gameState === "zombie_killed") {
    textSize(48);
    text("Zombie Killed!", width / 2, height / 2);
  } else if (gameState === "retry") {
    text("Missed! Try Again.", width / 2, height / 2);
  } else if (gameState === "gameover") {
    textSize(48);
    fill(255, 0, 0);
    text("Game Over", width / 2, height / 2);
  }
}

function serialEvent() {
  let data = serial.readLine();
  if (data.length > 0) {
    let parsedData = data.split(",").map(Number);
    if (parsedData.length === 3) {
      sensorData = parsedData;

      if (sensorData[2] === 0 && !buttonPressed) {
        buttonPressed = true;
        recordCoordinate();
      } else if (sensorData[2] === 1) {
        buttonPressed = false;
      }
    }
  }
}

function recordCoordinate() {
  if (gameState === "height") {
    recordedY = pointerY;
    gameState = "width";
  } else if (gameState === "width") {
    recordedX = pointerX;
    checkAlignment();
  }
}

function checkAlignment() {
  const distance = dist(recordedX, recordedY, targetX, targetY);
  if (distance < 50) {
    hitSound.play();
    fadeIn = true;
    gameState = "zombie_killed";
  } else {
    missSound.play();
    loseLife();
  }
}

function loseLife() {
  lives--;


  if (lives === 2) serial.write("LED_OFF,5\n");
  if (lives === 1) serial.write("LED_OFF,3\n"); 
  if (lives === 0) {
    serial.write("LED_OFF,4\n"); 
    serial.write("RED_BLINK\n"); 
    gameState = "gameover";
  } else {
    gameState = "height";
  }
}

function drawFadeAnimation() {
  fadeAlpha += 10;
  fill(255, 0, 0, fadeAlpha); 
  rect(0, 0, width, height);

  if (fadeAlpha >= 255) {
    fadeAlpha = 0; 
    fadeIn = false;
  }
}

function mousePressed() {
  userStartAudio(); 
  if (!bgMusic.isPlaying()) {
    bgMusic.loop();
    console.log("Background music started.");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
