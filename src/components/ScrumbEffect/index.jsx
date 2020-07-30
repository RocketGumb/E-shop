import React, { useState, useEffect } from "react";

const randomTitle = (defaultTitle) => {
  const symbols = "abcdefghijklmnopqrstuvwxyz";
  let title = "";
  for (let i = 0; i < defaultTitle.length; i++) {
    if (defaultTitle[i] === " ") {
      title = title + " ";
      continue;
    }
    title = title + symbols[Math.floor(Math.random() * 26)];
  }

  return title;
};

export const ScrumbEffect = ({ defaultTitle, bool = true, countMax = 10 }) => {
  const [title, setTitle] = useState(defaultTitle);

  useEffect(() => {
    let interval = {};
    if (bool) {
      let count = 0;
      interval = setInterval(() => {
        setTitle(randomTitle(defaultTitle));
        count++;
        if (count > countMax) {
          clearInterval(interval);
          setTitle(defaultTitle);
        }
      }, 100);
    }
    return () => {
      clearInterval(interval);
      setTitle(defaultTitle);
    };
  }, [bool]);

  return <>{title}</>;
};

export const ScrumbEffectHover = ({ defaultTitle }) => {
  const [bool, setBool] = useState(false);
  return (
    <span
      onMouseOver={() => {
        setBool(true);
      }}
      onMouseOut={() => {
        setBool(false);
      }}>
      <ScrumbEffect defaultTitle={defaultTitle} bool={bool} countMax={4} />
    </span>
  );
};
