import { useState, useEffect } from 'react';

/**
 * A custom React hook for replicating Typed.js text typing animation.
 * 
 * @param {string[]} strings - Array of strings to type.
 * @param {number} typeSpeed - Speed of typing in ms.
 * @param {number} backSpeed - Speed of deleting in ms.
 * @param {boolean} loop - Whether to loop the animation.
 * @returns {string} The currently typed text.
 */
export default function useTyped(strings, typeSpeed = 100, backSpeed = 60, loop = true) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(typeSpeed);

  useEffect(() => {
    let timer;
    
    const handleTyping = () => {
      const currentIdx = loopNum % strings.length;
      const fullText = strings[currentIdx];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(backSpeed);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(typeSpeed);
      }

      // If text is fully typed
      if (!isDeleting && text === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 1500); // Wait 1.5s before backspacing
        return;
      }

      // If text is fully deleted
      if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        if (!loop && (loopNum + 1) >= strings.length) {
          return; // Stop if loop is false and we reached the end
        }
      }

      timer = setTimeout(handleTyping, typingSpeed);
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, strings, typeSpeed, backSpeed, loop, typingSpeed]);

  return text;
}
