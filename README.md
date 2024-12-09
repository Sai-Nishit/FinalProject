# Milestone 3:-

## Objective :
To develop a functional prototype integrating the hardware components with interactive software, ensuring seamless communication between the Arduino and the web platform. This milestone demonstrates progress toward achieving an immersive, interactive experience by implementing key elements from previous milestones.

## Key Components:
### Hardware Integration :
Ultrasonic sensor for real-time proximity detection.
Joystick/buttons for character control or interaction.
LEDs for proximity and gameplay feedback.

### Software Development:
p5.js for dynamic animations and visual feedback on the web interface.
Arduino IDE for managing hardware logic and communication.
Communication protocols for data exchange between Arduino and the web platform.

### Pseudocode :
The following pseudocode outlines the main functions and their interactions for the prototype:

`Setup Function`

```
function setup() {
    configurePins(); // Initialize pins for ultrasonic sensor, buttons, and LEDs
    initializeSerialCommunication(); // Set up communication with the web platform
    initializeJoystick(); // Prepare joystick controls
    loadAssets(); // Load animations, sounds, and other assets for the web interface
}
```

`Loop Function`

```
function loop() {
    distance = readUltrasonicSensor(); // Get proximity data
    processProximityFeedback(distance); // Update LEDs based on distance
    handleJoystickInput(); // Control character movements using joystick
    handleButtonPresses(); // Trigger animations or sounds based on buttons
    updateWebInterface(distance); // Send updated data to the web platform
}

```
### Additional Functions:- 

`Proximity Detection`

```
function readUltrasonicSensor() {
    return getDistance(); // Measure distance using ultrasonic sensor
}

```

`LED Feedback`

```
function processProximityFeedback(distance) {
    if (distance > 50) {
        setLED(GREEN);
    } else if (distance > 20) {
        setLED(YELLOW);
    } else {
        setLED(RED);
    }
}

```

`Character Movement`

```
function handleJoystickInput() {
    xMovement = getJoystickX();
    yMovement = getJoystickY();
    updateCharacterPosition(xMovement, yMovement);
}


```

` Web Interface Updates`

```
function updateWebInterface(distance) {
    sendDataToWeb(distance); // Send data for animations or sound changes
}

```

## System Diagram :

## FSM Diagram :

## Circuit Diagram :

## Testing and Debugging:
### Prototype Testing:
Verified real-time updates from the ultrasonic sensor to the web interface.
Tested joystick movements for smooth character control.

### Challenges:
Fine-tuning proximity thresholds for LED feedback.
Synchronizing web animations with hardware inputs.

### Next Steps:
Integrate sound effects for enhanced immersion.
Finalize animations and refine visual effects.
Optimize code for performance and modularity.

## Relevance:
This milestone builds upon the planning and concepts from Milestone 1 and 2. By integrating hardware and software, it showcases progress toward creating an interactive and immersive project, aligning with the objectives of the course and personal goals of combining creativity with technology.

# Milestone 2:- Project Proposal, Planning, and Organizing
This milestone, I finalized the project's structure and identified the key components needed for development. I outlined the code's organization, explaining each part in terms of its purpose and functionality. The structure is designed to ensure modularity and clarity, allowing smooth integration of hardware and web interface components.

## Objective:
Develop an interactive experience by combining the best elements of the submitted ideas:
Proximity Interaction: Inspired by Idea 1, use an ultrasonic sensor for real-time interaction.
Gaming Elements: Adapt aspects of Ideas 2 and 3 to include character movement and game mechanics.
Visual and Audio Feedback: Integrate LED indicators, animations, and sound to enhance immersion.

## Organizing Resources:

### Hardware:
Arduino microcontroller.
Ultrasonic sensor.
Joystick/buttons.
LEDs.

### Software:
Arduino IDE.
p5.js for web development.
Audio editing tools for sound effects/music.

## Proposed Features:

### Input Mechanisms:
Ultrasonic Sensor: Detect hand movement or proximity to trigger animations.
Joystick/Buttons: Control characters or interact with the game environment.
Outputs:
Visuals: Dynamic animations on a web platform.
Audio: Background music changes or sound effects based on inputs.
LEDs: Feedback on proximity or game events (e.g., green/yellow/red for closeness).

## Code Structure and Elements Explanation

### Setup Function

Purpose: Initializes the hardware components and prepares the system for interaction.
Functionality: Configures pins for the ultrasonic sensor, LEDs, and buttons; starts serial communication for web interface integration.
Example:

setup() {
    configurePins();
    initializeSerialCommunication();
}

### Loop Function

Purpose: Continuously monitors inputs and updates outputs accordingly.
Functionality: Reads sensor data, processes input from buttons, and sends updates to the web interface.
Example:

loop() {
    int distance = readUltrasonicSensor();
    processProximityFeedback(distance);
    checkAndHandleButtonPresses();
    updateWebInterface(distance);
}

### Ultrasonic Sensor Input

Purpose: Measures the proximity of the user's hand or object.
Functionality: Returns the distance as a numerical value.
Example:

int readUltrasonicSensor() {
    // Code to read and calculate distance from ultrasonic sensor
    return distance;
}

### Proximity Feedback

Purpose: Uses the distance from the ultrasonic sensor to determine LED feedback.
Functionality: Lights up green, yellow, or red LEDs based on proximity thresholds.
Example:

void processProximityFeedback(int distance) {
    if (distance > 50) {
        setLED(GREEN);
    } else if (distance > 20) {
        setLED(YELLOW);
    } else {
        setLED(RED);
    }
}

### Button Input

Purpose: Detects button presses and triggers corresponding actions.
Functionality: Checks if specific buttons are pressed and initiates animations or sound changes.
Example:

void checkAndHandleButtonPresses() {
    if (isButton1Pressed()) {
        triggerAnimation("Jump");
    } else if (isButton2Pressed()) {
        changeBackgroundMusic();
    }
}

### Web Interface Communication

Purpose: Facilitates data exchange between the Arduino and the web platform.
Functionality: Sends sensor data to the web interface and receives commands for animations or other updates.
Example:

void updateWebInterface(int distance) {
    // Send distance data to the web

### Animation Control

Purpose: Manages visual changes on the web interface.
Functionality: Triggers specific animations or effects based on input.
Example:

void triggerAnimation(String animationType) {
    if (animationType == "Jump") {
        // Code to send "Jump" animation trigger to web
    }
}

### LED Feedback

Purpose: Provides visual cues to the user based on proximity or gameplay state.
Functionality: Changes the LED color dynamically.
Example:

void setLED(int color) {
    // Code to turn on the appropriate LED
}

## Explanation of Key Elements
### setup() and loop():

setup(): Prepares the hardware for operation.
loop(): Continuously monitors and responds to inputs, ensuring real-time interaction.

### Sensor and Button Functions:
Focus on handling inputs from the ultrasonic sensor and buttons efficiently.
Output Functions:

processProximityFeedback() and triggerAnimation() provide dynamic responses to user interactions.
Communication Functions:

Establish two-way communication between Arduino and the web platform for seamless integration.

# Milestone 1:-
## Idea 1 : 
The project concept involves creating a digital art installation using **p5.js** combined with an **Arduino microcontroller**, equipped with an **ultrasonic sensor** and **buttons** to create an interactive website experience. The interaction occurs as follows: when a user moves their hand closer to the ultrasonic sensor, the digital images on the website become animated, adding dynamic visual effects. Additionally, pressing the buttons triggers changes in the background music, creating an immersive multimedia experience.

### Why I Chose This Topic
This topic aligns with my interest in combining technology and creativity to enhance user engagement through interactive art. It allows for exploring the integration of hardware and software to create a multisensory experience, blending digital art with real-world interactions. This project also provides an opportunity to deepen my understanding of sensors, microcontrollers, and interactive web design.

### Inputs and Outputs
Inputs:
Ultrasonic Sensor: Detects the proximity of the user's hand.
Buttons: Serve as input triggers to change the music tracks.

Outputs:
Visual Output: Animated changes in the digital art displayed on the website.
Audio Output: Transition or switching of background music based on button presses.

This integration of tactile and motion-based interaction with digital elements ensures a unique and engaging user experience.

# Idea 2 :
The second project idea is to develop a website inspired by my favorite anime, Monster, featuring two interactive characters: one representing the killer and the other the escaper. The entire webpage adopts a dark theme to match the suspenseful atmosphere of the story. The killer is highlighted with a lit circular area to add dramatic focus.

### Interactive Elements
I plan to integrate an Arduino and a PlayStation joystick to control the movement of both characters. The joystick will enable real-time control of the characters, enhancing the interactive experience.

### LED Feedback Mechanism
Additionally, I will include an LED system connected to the Arduino to provide visual feedback about the proximity of the killer to the escaper:

Green LED: Lights up when the killer is far from the escaper.
Yellow LED: Indicates that the killer is approaching the escaper.
Red LED: Warns that the killer is very close to the escaper.

## Why I Chose This Topic
This idea stems from my love for Monster and its psychological depth. It allows me to create an engaging, suspenseful environment while combining my interest in web development, hardware integration, and interactive storytelling. The project also serves as an opportunity to explore proximity-based interaction and hardware-software synergy.

## Inputs and Outputs
### Inputs:
PlayStation Joystick: Controls the movements of the characters.
Proximity Data: Tracked via the game's logic or sensors to measure the distance between the killer and the escaper.

### Outputs:
Visual Output: Dynamic movement of the characters and the lit circular area for the killer.
LED Feedback: Color changes (green, yellow, red) to indicate proximity.
This project brings together storytelling, design, and technology to create an immersive gaming-like experience on a web platform.

# Idea 3 :- 

The third project idea is to develop a website-based penalty shootout game featuring a penalty taker and a goalkeeper. The game will be interactive, with character movements controlled using Arduino and buttons, simulating a real penalty shootout scenario.

### Interactive Gameplay
The penalty taker will aim to score goals by adjusting their shot direction and power using the buttons.
The goalkeeper will move side to side to block the penalty shots, also controlled by buttons.
### Why I Chose This Topic
This project combines my interest in sports and interactive technology, offering a fun and engaging way to simulate a popular sports scenario. It also provides an opportunity to explore character motion and game mechanics while integrating hardware controls. By merging web development with Arduino, I aim to create a dynamic, skill-based game that enhances the user experience.

## Inputs and Outputs
### Inputs:
Buttons:
For the penalty taker: Control shot direction and power.
For the goalkeeper: Control lateral movements to block the shots.

### Outputs:
Visual Output: Movement of the penalty taker, goalkeeper, and ball animation on the website.
Game Feedback: Success or failure of the penalty shot displayed on the screen.
This project will effectively merge creative web development with hardware interaction, providing an enjoyable and interactive gaming experience
