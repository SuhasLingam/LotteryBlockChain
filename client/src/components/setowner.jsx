import React, { useState } from "react";

const setowner = () => {
  const [owner, setOwner] = useState("0x0000000......");

  return (
    <div>
      <p>{owner}</p>
      <p>Click To Set Owner</p>
      <button>Set Owner</button>
    </div>
  );
};

export default setowner;
