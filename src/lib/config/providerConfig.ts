import { Chain } from "viem/chains";
import { cookieStorage, createConfig, createStorage, http } from "wagmi";
import { JumboChain, ProtoJumbo } from "@/lib/config/chain";

export default createConfig({
  chains:
    process.env.NODE_ENV === "development"
      ? [JumboChain as Chain, ProtoJumbo as Chain]
      : [JumboChain as Chain],
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [ProtoJumbo.id]: http(),
    [JumboChain.id]: http(),
  },
});
