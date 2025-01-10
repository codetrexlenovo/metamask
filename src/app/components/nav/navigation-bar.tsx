"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/app/components/nav/mobile-nav";

export const NavigationBar: React.FC = () => {
  return (
    <nav className="bg-[#0D0D0D] sticky top-0 z-[1000]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-6 md:px-4 sm:px-4 px-4">
        <Link
          href="https://jumbochain.org/"

          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/images/logo/newlogoimg.svg"
            height={39}
            width={182}
            alt="Logo"
          />
        </Link>
        <div className="">
          <MobileNav />
        </div>
        <div
          className="hidden w-full xl:block lg:w-auto navMenuLevel"
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-[#0D0D0D]">
          <li className="relative group">
              <button className="group-hover:text-[#7E97FF] group-hover:transition-all flex items-center justify-between w-full py-2 px-3 md:border-0 md:p-0 md:w-auto text-white hover:text-[#7E97FF] focus:text-white dark:hover:bg-black-700 md:dark:hover:bg-transparent">
                Network
                <svg
                  className="w-2.5 h-2.5 ms-2.5 rotate-0 group-hover:transition-all group-hover:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div className="absolute opacity-0 invisible pointer-events-none group-hover:transition-all group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 z-10 font-normal rounded divide-y divide-gray-100 border-[#ffffff26] border-[1px] shadow w-48 bg-[#0D0D0D] md:bg-[#0D0D0D]">
                <ul className="py-2 text-sm text-gray-700 font-medium">
                  <li className="relative group child-group">
                    <button className="flex items-center justify-between w-full px-4 py-2 child-group-hover:text-[#7E97FF] text-white hover:text-[#7E97FF]">
                      ProtoJumbo
                      <svg
                        // className="w-2.5 h-2.5 ms-2.5"
                        className="w-2.5 h-2.5 ms-2.5 rotate-0 child-group-hover:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div className="absolute opacity-0 invisible pointer-events-none child-group-hover:visible child-group-hover:pointer-events-auto child-group-hover:opacity-100 left-full top-0 z-10 rounded bg-[#0d0d0d] border-[1px] border-[#ffffff26] divide-y divide-gray-100 shadow w-48">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <Link
                            target="_blank"
                            href="https://protojumbo.jumbochain.org/"
                            className="block px-4 py-2 text-white hover:text-[#7E97FF]"
                          >
                            Explorer
                          </Link>
                        </li>
                        <li>
                          <Link
                            target="_blank"
                            href="https://protojumbo.jumbochain.org/faucet-smart"
                            className="block px-4 py-2 text-white hover:text-[#7E97FF]"
                          >
                            Faucet
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="relative group child-group">
                    <button className="flex items-center justify-between w-full px-4 py-2 text-white child-group-hover:text-[#7E97FF] hover:text-[#7E97FF]">
                      Mainnet
                      <svg
                        className="w-2.5 h-2.5 ms-2.5 rotate-0 child-group-hover:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div className="absolute opacity-0 invisible pointer-events-none child-group-hover:visible child-group-hover:pointer-events-auto child-group-hover:opacity-100 rounded left-full top-0 z-10 divide-y border-[#ffffff26] border-[1px] divide-gray-100 shadow w-48 bg-[#0d0d0d]">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <Link
                            target="_blank"
                            href="https://jumboscan.jumbochain.org/"
                            className="block px-4 py-2 text-white hover:text-[#7E97FF]"
                          >
                            JumboScan
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="relative group">
              <button className="group-hover:text-[#7E97FF] flex items-center justify-between w-full py-2 px-3 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto text-white hover:text-[#7E97FF] focus:text-white">
                Developers
                <svg
                  className="w-2.5 h-2.5 ms-2.5 group-hover:rotate-180 rotate-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div className="absolute opacity-0 invisible pointer-events-none group-hover:transition-all group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 z-10 rounded font-normal divide-y divide-gray-100 border-[#ffffff26] border-[1px] shadow w-48 bg-[#0D0D0D]">
                <ul className="py-2 text-sm text-gray-700 font-medium">
                  <li className="relative group child-group">
                    <button className="flex items-center justify-between w-full px-4 py-2 child-group-hover:text-[#7E97FF] text-white hover:text-[#7E97FF]">
                      Developer Tools
                      <svg
                        className="w-2.5 h-2.5 ms-2.5 child-group-hover:rotate-180 rotate-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    <div className="absolute opacity-0 invisible pointer-events-none child-group-hover:visible child-group-hover:pointer-events-auto child-group-hover:opacity-100 rounded left-full top-0 z-10 divide-y divide-gray-100 border-[1px] border-[#ffffff26] shadow w-48 bg-[#0d0d0d]">
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                          <Link
                            href="https://docs.jumbochain.org/"
                            className="block px-4 py-2 text-white hover:text-[#7E97FF]"
                            target="_blank"
                          >
                            Documentation
                          </Link>
                        </li>
                        <li>
                          <a
                            href="mailto:operations@jumbochain.org"
                            className="block px-4 py-2 text-white hover:text-[#7E97FF]"
                          >
                            Report a Bug
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="https://jumbochain.org/whitePaper"
                      className="block px-4 py-2 text-white hover:text-[#7E97FF]"
                    >
                      White Paper
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="https://jumbochain.org/utillity"
                className="block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 md:p-0 text-white hover:text-[#7E97FF] dark:hover:bg-[#383737] md:dark:hover:bg-transparent"
              >
                Our Solutions
              </a>
            </li>
            <li className="relative group">
              <button className="group-hover:text-[#7E97FF] flex items-center justify-between w-full py-2 px-3 md:hover:bg-transparent md:border-0 md:p-0 md:w-auto text-white hover:text-[#7E97FF] focus:text-white dark:hover:bg-[#383737] md:dark:hover:bg-transparent">
                Community
                <svg
                  className="w-2.5 h-2.5 ms-2.5 group-hover:rotate-180 rotate-0"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div className="absolute  opacity-0 invisible pointer-events-none group-hover:transition-all group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 rounded z-10 font-normal border-[1px] divide-y divide-gray-100 border-[#ffffff26] shadow w-48 bg-[#0D0D0D] dark:divide-gray-600">
                <ul className="py-2 text-sm text-gray-700 font-medium">
                  <li>
                    <a
                      href="https://jumbochain.org/validator"
                      className="block px-4 py-2 text-white hover:text-[#7E97FF]"
                    >
                      Become a Validator
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://jumbochain.org/developer"
                      className="block px-4 py-2  text-white hover:text-[#7E97FF]"
                    >
                      Developer Advocate
                    </a>
                  </li>
                  <li>
                    <Link
                      href="https://jumbochain.org/grant"
                      className="block px-4 py-2  text-white hover:text-[#7E97FF]"
                    >
                      Grant Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://jumbochain.org/airdrop"
                      className="block px-4 py-2  text-white hover:text-[#7E97FF]"
                    >
                      Airdrop
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a
                href="https://jumbochain.org/#teamId"
                className="block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 md:p-0 text-white hover:text-[#7E97FF] dark:hover:bg-[#383737] md:dark:hover:bg-transparent"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="/"
                className="block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 md:p-0 text-white hover:text-[#7E97FF] dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Investment Portfolio
              </a>
            </li>
            <li>
              <a
                href="https://jumbochain.org/news"
                className="block py-2 px-3 rounded  md:hover:bg-transparent md:border-0 md:p-0 text-white hover:text-[#7E97FF] dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                News And Media
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
