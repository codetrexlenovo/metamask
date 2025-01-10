import React from "react";

import Image from "next/image";
import  Logo  from "../../../../public/images/logo/logo.svg";
import {MobileNav} from "@/app/components/nav/mobile-nav";

const Header = () => {
  return (
    <div className="bg-white text-black dark:bg-[#0d0d0d] dark:text-white px-20 py-3 flex flex-row gap-2 w-full items-center justify-between sticky top-0 z-50">
      <div className="flex items-center">
        <Image
          src={Logo}
          alt="Logo"
          width={182}
          height={40}
          className="h-20 w-20"
        />
        <div className="ml-2 dark:text-white dark:bg-dark  text-black">
          <div className="text-lg font-bold">Jumbo BlockChain</div>
          <div className="text-sm">Powered by Digi195</div>
        </div>
      </div>

      <div>
        {/* <Index /> */}
        <MobileNav/>
      </div>
    </div>
  );
};

export default Header;
