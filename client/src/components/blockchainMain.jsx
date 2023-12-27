import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import ConnectWallet from "./connectWallet";
import abi from "../ContractJson/lottery.json";

const blockchainMain = () => {
  const [part, setPart] = useState(false);
  const [connect, setConnect] = useState("Connect wallet");
  const [add, setAdd] = useState("0x0000000000000...");
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const requestAcc = async () => {
    const { ethereum } = window;
    if (window.ethereum) {
      console.log("Wallet Detected");
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        setAdd(accounts[0]);
        setConnect("Connected");
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("install Metamask");
    }
  };

  const ConnectWalletAndSM = async () => {
    if (typeof window.ethereum !== "undefined") {
      requestAcc();

      // SM

      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contracAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";
      const contractAbi = abi.abi;

      const contract = new ethers.Contract(contracAddress, contractAbi, signer);
      setState({ provider, signer, contract });
    }
  };
  useEffect(() => {
    ConnectWalletAndSM();
  }, [add]);

  return (
    <div className="h-screen w-screen items-center justify-center flex">
      {!part && (
        <button
          onClick={ConnectWalletAndSM}
          className="absolute top-[70px] hover:bg-yellow-400 shadow-2xl shadow-gray-700  bg-indigo-600 text-white font-semibold  font-2xl p-4 rounded-2xl "
        >
          {connect}
        </button>
      )}

      <ConnectWallet add={add} state={state} part={part} setPart={setPart} />
    </div>
  );
};

export default blockchainMain;
