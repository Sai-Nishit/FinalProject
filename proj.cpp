
const int greenLED = 4;
const int yellowLED = 3;
const int blueLED = 5;
const int redLED = 2;

const int trigRight = 7, echoRight = 8; 
const int pingTop = 11;                 
const int buttonPin = 6;                 

const float maxRange = 15.4;            
void setup() {
  Serial.begin(9600); 
  pinMode(greenLED, OUTPUT);
  pinMode(yellowLED, OUTPUT);
  pinMode(blueLED, OUTPUT);
  pinMode(redLED, OUTPUT);


  digitalWrite(greenLED, LOW);
  digitalWrite(yellowLED, LOW);
  digitalWrite(blueLED, LOW);
  digitalWrite(redLED, LOW);

  pinMode(trigRight, OUTPUT);
  pinMode(echoRight, INPUT);
  pinMode(pingTop, INPUT);
  pinMode(buttonPin, INPUT_PULLUP);
}


long readHCSR04(int trigPin, int echoPin) {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  return pulseIn(echoPin, HIGH) * 0.034 / 2; 
}

long readParallaxPing(int signalPin) {
  pinMode(signalPin, OUTPUT);
  digitalWrite(signalPin, LOW);
  delayMicroseconds(2);
  digitalWrite(signalPin, HIGH);
  delayMicroseconds(5);
  digitalWrite(signalPin, LOW);
  pinMode(signalPin, INPUT);
  return pulseIn(signalPin, HIGH) * 0.034 / 2; 


void processCommand(String command) {
  command.trim(); 
  if (command.startsWith("LED_ON")) {
    int led = command.substring(7).toInt();
    if (led == 4) digitalWrite(greenLED, HIGH);
    else if (led == 3) digitalWrite(yellowLED, HIGH);
    else if (led == 5) digitalWrite(blueLED, HIGH);
  } else if (command.startsWith("LED_OFF")) {
    int led = command.substring(8).toInt();
    if (led == 4) digitalWrite(greenLED, LOW);
    else if (led == 3) digitalWrite(yellowLED, LOW);
    else if (led == 5) digitalWrite(blueLED, LOW);
  } else if (command == "RED_BLINK") {
    blinkRedLED();
  }
}


void blinkRedLED() {
  for (int i = 0; i < 10; i++) {
    digitalWrite(redLED, HIGH);
    delay(500);
    digitalWrite(redLED, LOW);
    delay(500);
  }
}

void loop() {
  float top = readParallaxPing(pingTop);
  float right = readHCSR04(trigRight, echoRight);

  top = min(top, maxRange);
  right = min(right, maxRange);

  int buttonState = digitalRead(buttonPin);

  Serial.print(top);
  Serial.print(",");
  Serial.print(right);
  Serial.print(",");
  Serial.print(buttonState);
  Serial.println();

  if (Serial.available() > 0) {
    String command = Serial.readStringUntil('\n');
    processCommand(command);
  }

  delay(50); 
}
