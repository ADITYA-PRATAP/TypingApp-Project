<h1 align="center">Typing speed App</h1>






<p align="center">
  <strong>Improve your typing speed and accuracy with Chabi Typing App!</strong>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#demo">Demo</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#license">License</a> •
  <a href="#credits">Credits</a>
</p>

---

## Key Features

- Test your typing skills by typing random keys displayed on the screen.
- Measure your typing accuracy and total key presses.
- Time-based challenge with a 5-minute countdown timer.
- Audio feedback for correct and incorrect key presses.
- Responsive design for a seamless experience on different devices.
- Simple and intuitive user interface.

## Demo

[View Demo](https://6484bb5c42bbea0a153c9b49--loquacious-snickerdoodle-d374bd.netlify.app/)

## Installation

To run the Chabi Typing App locally, follow these steps:

1. Clone the repository: `git clone https://github.com/ADITYA-PRATAP/ChabiProject.git`
2. Navigate to the project directory: `cd ChabiProject`
3. Install the dependencies: `npm install`

## Usage

1. Start the typing app by running: `npm start`
2. Access the app in your browser at: `http://localhost:3000`
3. Click the "Start" button to begin the typing challenge.
4. Type the displayed keys accurately and swiftly.
5. Monitor your total key presses, accuracy, and remaining time.
6. After the timer ends, your accuracy percentage will be displayed.
7. Click the "Reset" button to start a new typing session.

## Function Explanations

### `handleKeyPress(event)`

- This function is called when a key is pressed while the typing app is running.
- It compares the pressed key with the current key displayed on the screen.
- If the pressed key matches the current key, the correct key presses counter is incremented, and a correct sound effect is played.
- If the pressed key does not match the current key, an incorrect sound effect is played.
- A new random key is generated and set as the current key for the next typing challenge.

### `handleStart()`

- This function is called when the "Start" button is clicked.
- It initializes the typing app by setting the initial values for key presses, correct key presses, accuracy, timer, and the current key.
- The timer starts counting down from 5 minutes.
- The typing input is enabled, and the cursor is focused on the input field.

### `calculateAccuracy()`

- This function calculates the accuracy percentage based on the total key presses and correct key presses.
- The accuracy percentage is then set in the state.

### `playSound(audio)`

- This function plays the provided audio file.
- It resets the audio to the beginning and starts playing.

![chabi](https://github.com/ADITYA-PRATAP/ChabiProject/assets/72655723/f09b6668-2497-4457-8c1b-fcc53dc84d3f)
