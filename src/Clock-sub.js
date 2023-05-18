import React, { useEffect, useState } from "react";

function Clock() {
  let [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2,"0");
      const seconds = String(date.getSeconds()).padStart(2,"0");
      setTime(hours + ":" + minutes);
    }, 1000);
  })
  return (
    <div id="clock-sub">
      {time}
    </div>
    
  );
}

export default Clock;
