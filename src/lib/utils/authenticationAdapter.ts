import { createSiweMessage } from 'viem/siwe';
import { eventEmitter } from "../config/eventEmitter";
import { EMITTER_EVENTS } from "../constants";
import { signInAction } from "../actions/auth";
import { createAuthenticationAdapter } from "@rainbow-me/rainbowkit";

export const authenticationAdapter = createAuthenticationAdapter({
  getNonce: async () => {
    const response = await fetch('/api/nonce');
    const data: { nonce: string; } = await response.json();

    return new Promise((resolve) => resolve(data.nonce));
  },
  createMessage: ({ nonce, chainId }) => {
    return createSiweMessage({
      domain: window.location.host,
      //address,
      statement: 'Sign in with Ethereum to the app.',
      uri: window.location.origin,
      version: '1',
      chainId,
      nonce,
      address: '0x'
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
  getMessageBody: function (): string {
    throw new Error('Function not implemented.');
  }
});