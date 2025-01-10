import React from "react";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
  return (
    <>
      <div className="bg-[#0D0D0D] py-12 md:pt-12 px-4 sm:px-6 lg:px-8  pb-6">
        <div className="max-w-7xl mx-auto text-white">
          <div className="flex flex-col sm:flex-row ">
            <div className=" sm:w-[30%] lg:w-[45%] flex flex-col items-center justify-center sm:items-start sm:justify-start  m-5">
              <div className="w-[100px] h-[100px] sm:h-[150px] sm:w-[150px]">
                <Image
                  src="/images/footer/footer-logo.png"
                  alt="Jumbologo"
                  width={150}
                  height={150}
                />
              </div>
              <div className="pt-4 hidden lg:block">
                &copy; Jumbo Blockchain 2024 All Rights Reserved
              </div>
            </div>
            <div className="sm:w-[70%] lg:w-[55%] flex justify-between m-5  ">
              <div className="pr-5">
                <div className="text-lg sm:text-xl lg:text-2xl font-semibold pb-4 lg:pb-5">
                  Pages
                </div>

                <ul>
                  {internalLinks.map((item, index) => (
                    <Link href={item.href} key={index} target="_blank">
                      <li className="text-[#CCCCCC] text-[10px] sm:text-sm lg:text-lg font-medium pt-2">
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
              <div className="pr-5">
                <div className="text-lg sm:text-xl lg:text-2xl font-semibold pb-4 lg:pb-5">
                  Community
                </div>
                <ul>
                  {socialMedia.map((item, index) => (
                    <Link href={item.href} key={index} target="_blank">
                    <li className="text-[#CCCCCC] text-[10px] sm:text-sm lg:text-lg font-medium pt-2">
                      {item.name}
                    </li>
                  </Link>
                  ))}
                </ul>
              </div>
              <div>
                <div className="text-lg sm:text-xl lg:text-2xl font-semibold pb-4 lg:pb-5">
                  Legal
                </div>
                <ul>
                  {legalLinks.map((item, index) => (
                   <Link href={item.href} key={index} target="_blank">
                   <li className="text-[#CCCCCC] text-[10px] sm:text-sm lg:text-lg font-medium pt-2">
                     {item.name}
                   </li>
                 </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="relative pt-6">
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#C980FF] "></div>
          </div>
          <div className="text-[10px] sm:text-base pt-4 text-center lg:hidden">
            &copy; Jumbo Blockchain 2024 All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

const internalLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Explorer",
    href: "https://jumboscan.jumbochain.org/",
  },
  {
    name: "Documentation",
    href: "https://docs.jumbochain.org/",
  },
  {
    name: "White Paper",
    href: "/whitePaper",
  },
  {
    name: "Become Validator",
    href: "/validator",
  },
  {
    name: "Investment Portfolio",
    href: "https://portfolio.jumbochain.org/",
  },
  {
    name: "News & Media",
    href: "/news",
  },
];

const socialMedia = [
  {
    name: "X (Twitter)",
    href: "https://x.com/jumboblockchain",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/company/jumboblockchain/",
  },
  {
    name: "Medium",
    href: "https://jumbochain.medium.com",
  },
  {
    name: "Discord",
    href: "https://discord.com/invite/CXhPJvhR9b",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/jumbochainglob",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jumboblockchain/",
  },

  {
    name: "Telegram",
    href: "https://t.me/jumbochainofficial",
  },
];

const legalLinks = [
  {
    name: "Privacy Policy",
    href: "/privacy",
  },
  {
    name: "Terms of Use",
    href: "/terms",
  },
];