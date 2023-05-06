import React, { useState, useEffect } from "react";
import FlipNumbers from "react-flip-numbers";

function Countdown() {
  const [countdown, setCountdown] = useState(
    parseInt(localStorage.getItem("countdown")) || 1 * 60 * 60
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown]);

  useEffect(() => {
    localStorage.setItem("countdown", countdown.toString());
    if (countdown === 0) {
      setCountdown(1 * 60 * 60);
    }
  }, [countdown]);

  const hours = Math.floor(countdown / (60 * 60));
  const minutes = Math.floor((countdown % (60 * 60)) / 60);
  const seconds = countdown % 60;

  return (
    <div>
      <FlipNumbers
        height={20}
        width={20}
        play
        durationSeconds={0.5}
        numbers={`${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`}
      />
    </div>
  );
}

export default Countdown;
