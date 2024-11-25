# Gesture-Controlled Cover with Song Playback
## Description:
Build a system where gestures control animations on the website (e.g., moving the "Dropout Bear"), while buttons connected to the Arduino allow users to play specific songs on the website. This combines gesture-based interaction with music playback, tying into the musical and artistic themes of the Graduation album.

##Arduino Responsibilities:
###Gesture Control:
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
