// import { createAuthenticationAdapter } from "@rainbow-me/rainbowkit";
// import { SiweMessage } from "siwe";
// import { signInAction } from "../actions/auth";
// import { signInAction, signOutAction } from "../actions/auth";
// import { eventEmitter } from "../config/eventEmitter";
// import { EMITTER_EVENTS } from "../constants";

// import { useSignMessage } from "wagmi";

// export const authenticationAdapter = createAuthenticationAdapter({
//   getNonce: async () => {
//     const response = await fetch("/api/nonce");
//     const data: { nonce: string } = await response.json();

//     return new Promise((resolve) => resolve(data.nonce));
//   },
//   createMessage: ({ nonce, address, chainId }) => {
//     return new SiweMessage({
//       domain: window.location.host,
//       address,
//       statement: "Sign in with your wallet",
//       uri: window.location.origin,
//       version: "1",
//       chainId,
//       nonce,
//     });
//   },
//   // getMessageBody: ({ message }: {message: SiweMessage}) => {
//   //   return message.prepareMessage();
//   // },
//   verify: async ({ message, signature }) => {
   
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_TOKEN_SALE_URL}/api/verify`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message:message.toMessage(), signature }),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to verify signature");
//     }
//     const data = await response.json();
//     await signInAction({ jwt: data.jwt });

//     eventEmitter.emit(EMITTER_EVENTS.SIGN_IN);

//     return true;
//   },
//   signOut: async () => {
//     await fetch("/api/logout");
//     await signOutAction();
//     eventEmitter.emit(EMITTER_EVENTS.SIGN_OUT);
//   },
// });


import { createSiweMessage } from 'viem/siwe';
import { eventEmitter } from "../config/eventEmitter";
import { EMITTER_EVENTS } from "../constants";
import { signInAction } from "../actions/auth";
import { createAuthenticationAdapter } from "@rainbow-me/rainbowkit";

export const authenticationAdapter = createAuthenticationAdapter({
  getNonce: async () => {
    const response = await fetch('/api/nonce');
    const data: { nonce: string } = await response.json();

    return new Promise((resolve) => resolve(data.nonce));
  },
  createMessage: ({ nonce, address, chainId }) => {
    return createSiweMessage({
      domain: window.location.host,
      address,
      statement: 'Sign in with Ethereum to the app.',
      uri: window.location.origin,
      version: '1',
      chainId,
      nonce,
    });
  },
  verify: async ({ message, signature }) => {
    const verifyRes = await fetch(`${process.env.NEXT_PUBLIC_TOKEN_SALE_URL}/api/verify`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, signature }),
    });

    if (!verifyRes.ok) {
            throw new Error("Failed to verify signature");
          }
          const data = await verifyRes.json();
          await signInAction({ jwt: data.jwt });
      
          eventEmitter.emit(EMITTER_EVENTS.SIGN_IN);
      
          return true;
  },
  signOut: async () => {
    await fetch('/api/logout');
  },
});