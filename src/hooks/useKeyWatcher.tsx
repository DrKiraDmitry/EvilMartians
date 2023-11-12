import { useEffect, useState } from "react";

export const useKeyWatcher = () => {
  const [key, setKey] = useState("");

  const keyDown = (e: KeyboardEvent) => {
    setKey(e.key);
  };

  const keyUp = () => {
    setKey("");
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDown);
    window.addEventListener("keyup", keyUp);
    return () => {
      window.removeEventListener("keydown", keyDown);
      window.removeEventListener("keyup", keyUp);
    };
  }, []);

  return key;
};
