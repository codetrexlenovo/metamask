"use client";

import React from "react";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Button } from "../ui/button";

const ConnectButtonMeta = () => {
  return (
    <>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  return (
                    <Button
                      onClick={openConnectModal}
                      type="button"
                      className="bg-[#C980FF] text-white  hover:bg-[#C980FF] font-montserrat text-[14px] sm:text-[16px] md:text-[16px] font-semibold py-2 px-4 rounded-[8px] mr-4"
                    >
                      Connect Wallet
                    </Button>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <Button
                      variant={"destructive"}
                      onClick={openChainModal}
                      type="button"
                    >
                      Wrong network
                    </Button>
                  );
                }

                return (
                  <div style={{ display: "flex", gap: 12 }}>
                    <Button
                      variant={"secondary"}
                      onClick={openChainModal}
                      className=" bg-[#C980FF] text-white font-montserrat text-[14px] sm:text-[16px] md:text-[20px] font-medium py-2 px-4 rounded-[8px]"
                      style={{ display: "flex", alignItems: "center" }}
                      type="button"
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            overflow: "hidden",
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              style={{ width: 12, height: 12 }}
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                    </Button>

                    <Button
                      variant={"default"}
                      onClick={openAccountModal}
                      type="button"
                      className="bg-[#C980FF] text-white font-montserrat text-[14px] sm:text-[16px] md:text-[20px] font-medium py-2 px-4 rounded-[8px]"
                    >
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ""}
                    </Button>
                    {/* <Button
                      onClick={() => {
                        disconnect(); // This will handle the wallet disconnection
                      }}
                      type="button"
                      className="bg-red-500 text-white font-montserrat text-[14px] sm:text-[16px] md:text-[20px] font-medium py-2 px-4 rounded-[8px]"
                    >
                      Logout
                    </Button> */}
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </>
  );
};

export default ConnectButtonMeta;
