// src/app/investment/page.tsx
"use client";
// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
// import { useParams, usePathname, useRouter } from "next/navigation";
//import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { w3, contract } from "@/lib/web3";
import ConnectWalletButton from "@/app/components/shared/ConnectWalletButton";
import { useAccount } from "wagmi";
import Link from "next/link";

const InvestmentPortfolio = () => {
  // const [beneficiaryAddress, setBeneficiaryAddress] = useState("");
  //const router = useRouter();
  const { isConnected, address } = useAccount();

  useEffect(() => {
    if (isConnected) {
      //router.push(`/investmentform?beneficiary=${address}`);
    }
  }, [isConnected, address]);

  return (
    <div className="bg-[#0D0D0D] relative">
      <div className="min-h-[90vh] relative mx-auto flex justify-center flex-col md:gap-10 lg:gap-16 gap-4  items-center px-4 ">
        <div className="absolute inset-0 -z-1">
          <img
            src="/images/investmentPortfolio/InvestmentPortfoliohero.png"
            alt="background gif"
            className="-z-10 w-full h-full object-cover"
          />
        </div>
        <div className="text-center z-[1] flex flex-col gap-10">
          <h2 className=" mt-2 text-white font-montserrat font-bold lg:text-6xl md:text-4xl text-3xl leading-tight">
            Investment Portfolio
          </h2>
          <div className="text-slate-200 font-montserrat font-semibold lg:text-xl md:text-lg text-md leading-tight mt-2">
            <p className="font-medium">
              {" "}
              Enjoy unparalleled security, real-time insights, and seamless
              management
            </p>
            <p className="font-medium">
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
          <ConnectWalletButton />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:pb-0 pb-12 px-4 mt-8">
        <p className="text-center text-white md:text-lg text-base font-normal">
          For a deeper dive into our tokenomics and to understand how our
          economic model drives
        </p>
        <p className="text-center text-white md:text-lg text-base font-normal">
          sustainable growth, visit our Tokenomics Page.
        </p>
        <div className="mt-8">
          <Link href="https://docs.jumbochain.org/docs/Tokenomics" passHref>
            <button className="text-center font-semibold min-w-[143px] text[#C980FF] self-center rounded-[6px] px-6 py-2">
              Know More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPortfolio;
