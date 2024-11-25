# Gesture-Controlled Cover with Song Playback
## Description:
Build a system where gestures control animations on the website which i built for my Midterm Project (e.g., moving the "Dropout Bear"), while buttons connected to the Arduino allow users to play specific songs on the website. This combines gesture-based interaction with music playback, tying into the musical and artistic themes of the Graduation album.

## Arduino Responsibilities:
### Gesture Control:
Use an ultrasonic sensor to detect hand movement.
Send distance data to p5.js via serial communication.

### Button Input:
Connect multiple push buttons (one for each song).
Detect button presses and send corresponding signals to p5.js.

## p5.js Responsibilities:
### Animation Control:
Receive distance data from the Arduino.
Adjust animations (e.g., "Dropout Bear" floats up or down based on hand movement).

### Song Playback:
Play specific songs based on the signal received for button presses.
Use the p5.Sound library to manage audio playback on the website.

## Wiring Diagram for Arduino:
### Ultrasonic Sensor:
Trigger pin and Echo pin connected to digital pins.
Power and ground connected to Arduino.

### Buttons:
Each button connected to a separate digital pin.
Use pull-down resistors to prevent floating inputs.

## Code Overview
### Arduino Code:
Read ultrasonic sensor distance.
Detect button presses.
Send signals via Serial communication (e.g., "Gesture: <distance>", "Button: <song_number>").

### p5.js Code:
Receive signals via Serial.
Map distance to animation properties (e.g., y-coordinate of "Dropout Bear").
Play songs based on button input (use p5.Sound).

## How It Works
### Gesture Control:
Place your hand over the ultrasonic sensor to control animations like moving the "Dropout Bear."

### Song Playback:
Press a button to select and play a specific song related to the album (e.g., tracks from Graduation).
