import React from "react";

import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import { ThemeProvider } from "@/lib/theme/themeProvider";
import Footer from "@/app/components/shared/Footer";
import ApplicationProvider from "@/providers/ApplicationProvider";
// const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "Jumbo Blockchain | Scalable and Secure for a Greener Future",
  description:
    "Jumbo Blockchain delivers unparalleled scalability, security, and speed. A cost-efficient Layer 1 solution designed for a sustainable, tech-driven future.",
};
function Analytics() {
  return (
    <>
      {/* Google Tag Manager */}
      <script
        async
        defer
        src="https://www.googletagmanager.com/gtag/js?id=G-TWY16T374K"
      ></script>
      <script
        async
        defer
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TWY16T374K');
          `,
        }}
      />
      <script
        type="application/ld+json"
        async
        defer
        dangerouslySetInnerHTML={{
          __html: `{
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Jumbo Blockchain",
            url: "https://jumbochain.org",
            logo: "https://jumbochain.org/images/logo.png",
            sameAs: [
              "https://x.com/jumboblockchain",
              "https://www.linkedin.com/company/jumboblockchain/",
              "https://www.instagram.com/jumboblockchain/",
              "https://www.facebook.com/jumbochainglob",
              "https://t.me/jumbochainofficial",
              "https://discord.com/invite/CXhPJvhR9b",
              "https://jumbochain.medium.com/",
              "https://podcasters.spotify.com/pod/show/jumbochain-innovative-blo",
              "https://www.youtube.com/@JumboBlockchainOfficial",
              "https://in.pinterest.com/jumboBlockchain/",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91 92895 47284",
              contactType: "Customer Service",
              areaServed: "Global",
              availableLanguage: ["English"],
            },
          }`,
        }}
      />
    </>
  );
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://jumbochain.org/" />
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <Analytics />
      </head>
      <body className={`${montserrat.className}  bg-[#0d0d0d] text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          // enableSystem
          disableTransitionOnChange
        >
          <ApplicationProvider>
            {/* <Header /> */}
            {/* <NavigationBar /> */}
            {children}
            <Footer />
          </ApplicationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
