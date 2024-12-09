// Arduino Code for Milestone 3

// Pin Definitions
const int trigPin = 9;    // Ultrasonic sensor trigger
const int echoPin = 10;   // Ultrasonic sensor echo
const int buttonPin1 = 2; // Button 1
const int buttonPin2 = 3; // Button 2
const int ledGreen = 4;   // Green LED
const int ledYellow = 5;  // Yellow LED
const int ledRed = 6;     // Red LED

// Variables
long duration;
int distance;

void setup() {
  // Initialize pins
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(buttonPin1, INPUT_PULLUP);
  pinMode(buttonPin2, INPUT_PULLUP);
  pinMode(ledGreen, OUTPUT);
  pinMode(ledYellow, OUTPUT);
  pinMode(ledRed, OUTPUT);

  // Start Serial Communication
  Serial.begin(9600);
}

void loop() {
  // Read ultrasonic sensor
  distance = readUltrasonicSensor();

  // Update LED feedback
  processProximityFeedback(distance);

  // Check button inputs
  handleButtonPresses();

  // Send data to web interface
  Serial.println(distance);

  // Delay for stability
  delay(100);
}

int readUltrasonicSensor() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);
  
  duration = pulseIn(echoPin, HIGH);
  return duration * 0.034 / 2; // Calculate distance in cm
}

void processProximityFeedback(int distance) {
  if (distance > 50) {
    digitalWrite(ledGreen, HIGH);
    digitalWrite(ledYellow, LOW);
    digitalWrite(ledRed, LOW);
  } else if (distance > 20) {
    digitalWrite(ledGreen, LOW);
    digitalWrite(ledYellow, HIGH);
    digitalWrite(ledRed, LOW);
  } else {
    digitalWrite(ledGreen, LOW);
    digitalWrite(ledYellow, LOW);
    digitalWrite(ledRed, HIGH);
  }
}

void handleButtonPresses() {
  if (digitalRead(buttonPin1) == LOW) {
    Serial.println("Button1_Pressed");
  }
  if (digitalRead(buttonPin2) == LOW) {
    Serial.println("Button2_Pressed");
  }
}
