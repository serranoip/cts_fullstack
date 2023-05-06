import React, { useState, useEffect } from "react";
import FlipNumbers from "react-flip-numbers";

function Clock() {
  const [time, setTime] = useState(new Date()); // Set the initial time to the current time

  useEffect(() => {
    // Create a new interval that updates the time every second
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Clear the interval on unmount
  }, []);

  // Convert the time to hours, minutes, and seconds
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // Output the result using the FlipNumbers component
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

export default Clock;
