 interface NavItem {
    title: string;
    href?: string;
    items?: NavItem[];
    label?: string; // Optional label field if needed
  }
  
interface DocsConfig {
    sidebarNav: NavItem[];
  }



export const docsConfig: DocsConfig = {
  sidebarNav: [
    {
      title: "Network",
      items: [
        {
          title: "ProtoJumbo",
          items: [
            {
              title: "Explorer",
              href: "https://protojumbo.jumbochain.org/",
            },
            {
              title: "Faucet",
              href: "https://protojumbo.jumbochain.org/faucet-smart",
            },
          ],
        },
        {
          title: "Mainnet",
          items: [
            {
              title: "Jumbo Scan",
              href: "https://jumboscan.jumbochain.org/",
            },
            
          ],
        },
      ],
    },
    {
      title: "Developers",
      items: [
        {
          title: "Developer Tools",
          items: [
            {
              title: "Documentation",
              href: "https://docs.jumbochain.org/",
            },
            {
              title: "Bug Report",
              href:"mailto:operations@jumbochain.org",
            },
          ],
        },
        {
          title: "Whitepaper",
          href: "https://jumbochain.org/whitePaper",
        },
      ],
    },
    // {
    //   title: "Our Solution",
    //   href: "/utility",
    // },
    {
      title: "Community",
      items: [
        {
          title: "Become a Validator",
          href: "https://jumbochain.org/validator",
        },
        {
          title: "Developer Advocate",
          href: "https://jumbochain.org/developer",
        },
        {
          title: "Grant Program",
          href: "https://jumbochain.org/grant",
        },
        {
          title: "Airdrop",
          href: "https://jumbochain.org/airdrop",
        },
      ],
    },
    // {
    //   title: "Investment Portfolio",
    //   href: "#",
    // },
  ],
};
