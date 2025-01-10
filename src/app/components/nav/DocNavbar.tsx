"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export const NavigationBarDoc= () => {

  return (
    <nav className="bg-[#0D0D0D] sticky top-0" style={{ zIndex: "999" }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 px-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/images/logo.png" height={39} width={182} alt="Logo" />
          {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            JumboChain
          </span> */}
        </a>
        <div className="flex space-x-6">
            <Link href="/" className="text-white hover:text-purple-600 text-lg font-semibold">Home</Link>
            <Link href="https://protojumbo.jumbochain.org" target="_blank" rel='noopener noreferrer ' className="text-white hover:text-purple-600 text-lg font-semibold">Protojumbo</Link>
        </div>
       </div>
    </nav>
  );
};
