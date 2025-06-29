import { useEffect, useRef, useState } from "react";

/**
 * Typewriter effect with fast delete, loop and custom colors.
 * @param {string[]} texts - Array of strings to type and delete in sequence.
 * @param {number} speed - Typing speed in ms per char.
 * @param {number} eraseSpeed - Deleting speed in ms per char.
 * @param {number} delay - Delay before erasing/typing next in ms.
 * @param {string} className - Extra classes for the span.
 * @param {string} cursorClass - Extra classes for the cursor.
 */
export default function Typewriter({
  texts = [],
  speed = 60,
  eraseSpeed = 30,
  delay = 1200,
  className = "",
  cursorClass = "",
}) {
  const [display, setDisplay] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);
  const timeoutRef = useRef();

  useEffect(() => {
    if (texts.length === 0) return;
    if (!deleting && subIndex < texts[index].length) {
      timeoutRef.current = setTimeout(
        () => setSubIndex((v) => v + 1),
        speed
      );
    } else if (!deleting && subIndex === texts[index].length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), delay);
    } else if (deleting && subIndex > 0) {
      timeoutRef.current = setTimeout(
        () => setSubIndex((v) => v - 1),
        eraseSpeed
      );
    } else if (deleting && subIndex === 0) {
      timeoutRef.current = setTimeout(() => {
        setDeleting(false);
        setIndex((v) => (v + 1) % texts.length);
      }, 300);
    }
    setDisplay(texts[index].substring(0, subIndex));
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line
  }, [subIndex, index, deleting, texts, speed, eraseSpeed, delay]);

  // Blinking cursor
  useEffect(() => {
    const blinkInt = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkInt);
  }, []);

  return (
    <span className={`typewriter ${className}`}>
      {display}
      <span
        className={`typewriter-cursor ${cursorClass}`}
        style={{
          display: "inline-block",
          width: "1ch",
          marginLeft: "2px",
          color: "inherit",
          opacity: blink ? 1 : 0.3,
        }}
      >
        |
      </span>
    </span>
  );
}
