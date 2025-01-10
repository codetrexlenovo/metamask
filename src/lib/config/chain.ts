import { Chain } from "@rainbow-me/rainbowkit";

const JumboChain = {
  id: 1009,
  name: "JumboChain",
  // shortName: "JNFTC",
  iconUrl: "https://jumbochain.org/favicon.ico",
  iconBackground: "#000",
  nativeCurrency: {
    name: "JNFTC",
    symbol: "JNFTC",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://rpcpriv.jumbochain.org/"] },
  },
  blockExplorers: {
    default: { name: "Jumboscan", url: "https://jumboscan.jumbochain.org/" },
  },
} as const satisfies Chain;
const ProtoJumbo: Chain = {
  id: 234,
  name: "ProtoJumbo",
  // shortName: "PJNFTC",
  iconUrl: "https://jumbochain.org/favicon.ico",
  iconBackground: "#000",
  nativeCurrency: {
    name: "JNFTC",
    symbol: "JNFTC",
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ["https://inter-test.jumbochain.org"] },
  },
  blockExplorers: {
    default: { name: "protojumbo", url: "https://protojumbo.jumbochain.org/" },
  },
} as const satisfies Chain;

export { JumboChain, ProtoJumbo };
