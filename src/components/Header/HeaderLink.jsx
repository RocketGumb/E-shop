import React, { useState, useEffect } from "react";

const randomWord = (length) => {
  const symbols = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  for (let i = 0; i < length; i++) {
    result = result + symbols[Math.floor(Math.random() * 26)];
  }

  return result;
};

const ScrumbEffect = ({ defaultWord, bool = false }) => {
  const [word, setWord] = useState(defaultWord);

  useEffect(() => {
    let interval = {};
    if (bool) {
      let count = 0;
      interval = setInterval(() => {
        setWord(randomWord(defaultWord.length));
        count++;
        if (count > 4) {
          clearInterval(interval);
          setWord(defaultWord);
        }
      }, 120);
    }
    return () => {
      clearInterval(interval);
      setWord(defaultWord);
    };
  }, [bool]);

  return <>{word}</>;
};

export default ScrumbEffect;
