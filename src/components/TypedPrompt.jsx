import { useEffect, useState } from "react";

/** Cycles through terminal-style commands with a typing/deleting effect. */
const TypedPrompt = ({ commands, typingSpeed = 55, pause = 1400 }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = commands[index];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length + 1)),
        typingSpeed
      );
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(
        () => setText(current.slice(0, text.length - 1)),
        typingSpeed / 2
      );
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % commands.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, commands, typingSpeed, pause]);

  return (
    <span className="prompt-label">
      {text}
      <span className="inline-block w-1.5 h-4 bg-primary animate-blink" />
    </span>
  );
};

export default TypedPrompt;
