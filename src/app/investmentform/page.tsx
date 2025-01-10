"use client";

import React, { useEffect, useState } from "react";
import { useDisconnect } from "wagmi";


const InvestmentForm: React.FC = () => {
  const { disconnect } = useDisconnect();

  const [isClient , setIsClient] = useState<boolean>(false);

  useEffect(() => {

    setIsClient(true);

  } , [])

  const handleLogout = async () => {
    try {
      // Disconnect MetaMask
      disconnect();
      //window.location.reload();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  // const { isConnected, address } = useAccount();
  // const { isConnected } = useAccount();

  if(!isClient) return null; 
  return (
    <div onClick={handleLogout} className='min-h-screen bg-[#0D0D0D]'>
      ok
    </div>
  );
};

export default InvestmentForm;
