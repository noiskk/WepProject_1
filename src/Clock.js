import React, { useEffect, useState } from "react";

function Clock() {
  let [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      setTime(`${hours}:${minutes}`);
    }, 1000)
  })
  return (
    <div id="clock">
      {time}
    </div>
    
  );
}

export default Clock;
