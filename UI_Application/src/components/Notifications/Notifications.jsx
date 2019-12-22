import React, { useState, useEffect } from 'react';

function Notifications() {
  const [triggerCount, setTrigger] = useState(0);
  const [description, setDesc] = useState('Yet to fetch');

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        setDesc(myObj.timestamp);
    }
};
  xmlhttp.open("GET", "https://www.bitstamp.net/api/ticker/", true);
  xmlhttp.send();
  }, [triggerCount]);
  console.log(triggerCount);
  return (
    <div>
      <p>{description}</p>
      <button onClick={() => setTrigger(triggerCount + 1)}>Re-Trigger</button>
      {/* <button onClick={() => setCount(count + 1)}>
        
      </button> */}
    </div>
  );
}

export default Notifications;
