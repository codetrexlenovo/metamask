"use client";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  coinbaseWallet,
  metaMaskWallet,
  trustWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { Chain } from "viem/chains";
import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { ProtoJumbo, JumboChain } from "@/lib/config/chain";

const projectId = "3fcc6bba6f1de962d911bb5b5c3dba68";

const connectors = connectorsForWallets(
  [
    {
      groupName: "Recommended",
      wallets: [metaMaskWallet],
    },
    {
      groupName: "Others",
      wallets: [trustWallet, coinbaseWallet],
    },
  ],
  {
    appName: "Jumbo Blockchain",
    projectId,
  }
);
export default createConfig({
  chains:
    process.env.NODE_ENV === "development"
      ? [JumboChain as Chain, ProtoJumbo as Chain]
      : [JumboChain as Chain],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  connectors,
  transports: {
    [ProtoJumbo.id]: http(),
    [JumboChain.id]: http(),
  },
});
