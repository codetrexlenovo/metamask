"use client";

import React, { useEffect, useState } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
// import { formatDate } from "@/lib/utils/formatters";
import VestingCardDetails from "../components/shared/VestingCardDetails";
import TokenCardDetails from "../components/shared/TokenCardDetails";
import { useDisconnect, useAccount } from "wagmi";
import Link from "next/link";

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
  const { isConnected } = useAccount();

  if(!isClient) return null; 
  return (
    <div className='min-h-screen bg-[#0D0D0D]'>
      <div className='text-center relative'>
        <div className='min-h-[90vh] relative mx-auto flex flex-col justify-center md:gap-10 lg:gap-16 gap-4  items-center px-4 '>
          <div className='absolute inset-0 -z-1'>
            <img
              src='/images/investmentPortfolio/InvestmentPortfoliohero.png'
              alt='background gif'
              className='-z-10 w-full h-full object-cover'
            />
          </div>
          <div className='text-center z-[100] flex flex-col gap-10'>
            <h2 className=' mt-2 text-white font-montserrat font-bold lg:text-6xl md:text-4xl text-3xl leading-tight'>
              Investment Portfolio
            </h2>
            <div className='text-slate-200 font-montserrat font-semibold lg:text-xl md:text-lg text-md leading-tight mt-2'>
              <p className='font-medium'>
                {" "}
                Enjoy unparalleled security, real-time insights, and seamless
                management
              </p>
              <p className='font-medium'>
                Step into the future of investment with Jumbo Blockchain, where
                innovation meets precision.
              </p>
              <p className="font-base mt-4">
              Checkout JNFTC  On <Link href="https://www.bitmart.com/trade/en-US?symbol=JNFTC_USDT" target="_blank" className="underline font-bold text-yellow-500">Bitmart</Link>
              <br/>Find Us On <Link href="https://coinmarketcap.com/currencies/jumbo-blockchain/" target="_blank" className="font-bold underline text-yellow-500">CoinMarketCap</Link> 
              <br/>& <br/> On <Link href="https://www.coingecko.com/en/coins/jumbo-blockchain" target="_blank" className="font-bold underline text-green-400 mb-8">Coingecko</Link>
            </p>
            <p className="font-bold flex flex-col items-center justify-center flex-wrap md:flex-row mt-7">
              Claim Your Tokens :- 
              <Link href={`https://docs.jumbochain.org/docs/Claim%20Reward`} target="_blank" className="underline text-sm md:text-xl px-2">Guide For Claiming Your Tokens</Link>
  
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className='relative mb-8'>
        <div className='absolute bottom-0 left-0 w-full h-[3px] bg-[#C980FF]'></div>
      </div>
      <div className='text-white bg-transparent flex justify-end max-w-6xl container mx-auto'>
        {isConnected && (
          <button
            onClick={handleLogout}
            className='bg-transparent border border-white  text-white px-4 py-2 rounded-[6px]'
          >
            Logout
          </button>
        )}
      </div>
      <div>
        <Tabs
          defaultValue='token'
          className='max-w-6xl container mx-auto mt-8 mb-8'
        >
          <TabsList className='grid w-full grid-cols-2'>
            <TabsTrigger value='token' >Token Details</TabsTrigger>
            <TabsTrigger value='vesting'>Vesting Details</TabsTrigger>
          </TabsList>
          <TabsContent value='token'>
            <TokenCardDetails />
          </TabsContent>
          <TabsContent value='vesting'>
            <VestingCardDetails />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InvestmentForm;
