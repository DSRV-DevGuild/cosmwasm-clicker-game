import "./App.css";
import { useState } from "react";
import networkInfo from "./wallet/network_info";
import connectWallet from "./wallet/connect";

function App() {
  // connectWallet에서 받아올 값
  const [client, setClient] = useState();
  const [address, setAddress] = useState();
  const [balance, setBalance] = useState();
  const [chainId, setChainId] = useState();

  // connectWallet 으로 전달할 함수
  const getInfo = (client, address, balance, chainId) => {
    setClient(client);
    setAddress(address);
    setBalance(balance);
    setChainId(chainId);
    // (debug)
    console.log(address);
  };
  // connectWallet 호출하는 방법 (debug)
  connectWallet(networkInfo["malaga-420"], { getInfo });

  return <div className="App"></div>;
}

export default App;
