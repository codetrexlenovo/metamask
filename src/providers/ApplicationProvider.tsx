import React from "react";

// import { ReactNode } from "react";
import RainbowKitProvider from "./RainbowKitProvider";
import { cookieToInitialState } from "wagmi";
import providerConfig from "@/lib/config/providerConfig";
import { headers } from "next/headers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// type ProvidersProps = {
//   children: ReactNode;
// };

const ApplicationProvider = ({ children }: Readonly<{children: React.ReactNode}>) => {
  const headersStore = headers();
  const cookie = headersStore.get("cookie");

  const initialState = cookieToInitialState(providerConfig, cookie);

  return (
    <RainbowKitProvider initialState={initialState} >
      {children}
      {/* <Toaster /> */}
      <ToastContainer />
    </RainbowKitProvider>
  );
}

export default ApplicationProvider
