let serial;
let latestData = "";
let distance;

function setup() {
  createCanvas(400, 400);
  background(220);

  serial = new p5.SerialPort();
  serial.open("/dev/tty.usbmodem14101");
  serial.on("data", serialEvent);
}

function draw() {
  background(220);
  textSize(16);
  text("Distance: " + latestData + " cm", 10, 30);

  if (distance > 50) {
    fill(0, 255, 0);
  } else if (distance > 20) {
    fill(255, 255, 0);
  } else {
    fill(255, 0, 0);
  }
  ellipse(width / 2, height / 2, 100, 100);
}

function serialEvent() {
  latestData = serial.readLine().trim();
  if (!isNaN(latestData)) {
    distance = int(latestData);
  }
}
