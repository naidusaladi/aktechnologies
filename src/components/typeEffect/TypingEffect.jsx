// TypingEffect.js
import React, { useState, useEffect } from 'react';

const TypingEffect = ({ textArray, typingSpeed, deletingSpeed, pauseTime }) => {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timer;

    const typeText = () => {
      setIsTyping(true);
      const currentText = textArray[currentIndex];
      if (isTyping) {
        if (text !== currentText) {
          setText((prevText) => currentText.slice(0, prevText.length + 1));
          timer = setTimeout(typeText, typingSpeed);
        } else {
          setIsTyping(false);
          timer = setTimeout(deleteText, pauseTime);
        }
      } else {
        timer = setTimeout(deleteText, pauseTime);
      }
    };

    const deleteText = () => {
      setIsTyping(false);
      const currentText = textArray[currentIndex];
      if (!isTyping) {
        if (text !== '') {
          setText((prevText) => currentText.slice(0, prevText.length - 1));
          timer = setTimeout(deleteText, deletingSpeed);
        } else {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
          setIsTyping(true);
          timer = setTimeout(typeText, typingSpeed);
        }
      } else {
        timer = setTimeout(typeText, typingSpeed);
      }
    };

    timer = setTimeout(typeText, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, currentIndex, isTyping, typingSpeed, deletingSpeed, pauseTime, textArray]);

  return <span>{text}</span>;
};

export default TypingEffect;
