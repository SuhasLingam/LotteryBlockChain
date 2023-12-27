import React, { useState } from "react";
import Setowner from "./setowner";
import { ethers } from "ethers";

const Participate = ({ state }) => {
  const { contract } = state;
  const [owner, setOwner] = useState("0x0000000......");
  const [address, setAddress] = useState("0x000000....");

  const setOwnerAddress = async () => {
    const tx = await contract.random();
    console.log(tx);
  };

  const setAddressTrue = async () => {
    setAddress(await contract.getAddress());
  };

  return (
    <div className="flex flex-col">
      <div>
        <p>Manager Address is : {owner} </p>
        <button
          onClick={setOwnerAddress}
          className="text-2xl rounded-2xl font-bold p-4 bg-black text-white"
        >
          Set Manager
        </button>

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
