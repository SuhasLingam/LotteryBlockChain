import React, { useState } from "react";

const Participate = ({ state }) => {
  const { contract } = state;

  const [address, setAddress] = useState("0x000000....");

  const setAddressTrue = async () => {
    setAddress(await contract.getAddress());
  };

  return (
    <div>
      <div>
        <button
          onClick={setAddressTrue}
          className="text-2xl border-3 font-bold p-4 bg-black text-white rounded-2xl"
        >
          Get Address
        </button>
        <p className="text-4xl font-extrabold">{address}</p>
      </div>
    </div>
  );
};

export default Participate;
