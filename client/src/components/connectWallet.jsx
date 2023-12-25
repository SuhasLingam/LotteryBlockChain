import React, { useEffect, useState } from "react";
import Participate from "./Participate.jsx";

const connectWallet = ({ add, state }) => {
  const addressOf = add;
  const { contract } = state;
  const [contractAddress, setContractAddress] = useState("0x000000000....");

  const setConAdd = async () => {
    setContractAddress(await contract.getAddress());
  };

  useEffect(() => {
    setConAdd();
  });

  return (
    <div className="text-center flex flex-col h-screen w-screen justify-center items-center bg-purple-300">
      <p className="text-4xl font-extrabold">
        Wallet Address is : <br /> {addressOf}
      </p>
      <br />
      <p className="text-4xl font-extrabold">
        Contract address is : {contractAddress}
      </p>

      <button className="absolute bottom-[70px] hover:bg-yellow-400 shadow-2xl shadow-gray-700  bg-indigo-600 text-white font-semibold  font-2xl p-4 rounded-2xl">
        Go To Auction
      </button>
    </div>
  );
};

export default connectWallet;
