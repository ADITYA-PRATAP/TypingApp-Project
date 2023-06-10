import React, { useState, useEffect, useRef } from 'react';
import './TypingApp.css'; // Import the CSS file for styling
import correctSound from '../Component/correct.mp3';
import wrongSound from '../Component/incorrect.mp3';

const Chaabi = () => {
  const [currentKey, setCurrentKey] = useState('');
  const [totalKeyPresses, setTotalKeyPresses] = useState(0);
  const [correctKeyPresses, setCorrectKeyPresses] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [timer, setTimer] = useState(500); // 5 min
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [correctAudio] = useState(new Audio(correctSound));
  const [wrongAudio] = useState(new Audio(wrongSound));
  const inputRef = useRef(null);

  useEffect(() => {
    let interval = null;
    if (isTimerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsTimerRunning(false);
      calculateAccuracy();
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timer]);

  useEffect(() => {
    if (isTimerRunning) {
      inputRef.current.focus();
    }
  }, [isTimerRunning]);

  const handleKeyPress = (event) => {
    const { key } = event;
    setTotalKeyPresses((totalKeyPresses) => totalKeyPresses + 1);

    if (key === currentKey) {
      setCorrectKeyPresses((correctKeyPresses) => correctKeyPresses + 1);
      playSound(correctAudio);
    } else {
      playSound(wrongAudio);
    }

    // Generate the next key
    const keys = ['a', 's', 'd', 'f', 'j', 'k', 'l', ';'];
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    setCurrentKey(randomKey);
  };

  const handleStart = () => {
    setIsTimerRunning(true);
    setCurrentKey('a'); // Initialize the first key
    setTotalKeyPresses(0); // Reset key presses
    setCorrectKeyPresses(0); // Reset correct key presses
    setAccuracy(0); // Reset accuracy
    setTimer(500); // Reset timer
  };

  const handleReset = () => {
    setIsTimerRunning(false);
    setCurrentKey('');
    setTotalKeyPresses(0);
    setCorrectKeyPresses(0);
    setAccuracy(0);
    setTimer(500);
  };

  const calculateAccuracy = () => {
    const accuracyPercentage = (correctKeyPresses / totalKeyPresses) * 100;
    setAccuracy(accuracyPercentage.toFixed(2));
  };

  const playSound = (audio) => {
    audio.currentTime = 0;
    audio.play();
  };

  return (
    <div className="typing-app">
      <div className="next-key">Next Key: <div className='ramu'>{currentKey}</div></div>
      <div className="typing-box">
        <input
          className="typing-input"
          type="text"
          onKeyDown={handleKeyPress}
          disabled={!isTimerRunning}
          autoFocus
          ref={inputRef}
        />
      </div>
      <div className="stats">
        <div>Total Key Presses: {totalKeyPresses}</div>
        <div>Accuracy: {accuracy}%</div>
        <div>Time Remaining: {timer} seconds</div>
      </div>
      {!isTimerRunning ? (
        <button className="start-button" onClick={handleStart}>
          Start
        </button>
      ) : (
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Chaabi;
