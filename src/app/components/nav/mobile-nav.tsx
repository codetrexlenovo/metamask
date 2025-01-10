"use client";

import * as React from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { docsConfig } from "@/lib/config/docs";
import { cn } from "@/lib/utils";
import { Button } from "@/app/components/ui/button";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  // Cross,
  // CrossIcon,
  X,
} from "lucide-react";

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 xl:hidden"
        >
          <svg
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M3 5H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 12H16"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M3 19H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="px-2 pt-24 bg-black z-[900] blur-0 outline outline-1 outline-white ">
        <button className="flex items-center z-[1000]" onClick={() => setOpen(false)}>
          <X className="h-6 w-6 mr-2" />
        </button>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6 z-[1000]">
          <div className="flex flex-col space-y-3">
            {docsConfig.sidebarNav?.map((item, index) => (
              <MobileDropdownLink
                key={index}
                item={item}
                onOpenChange={setOpen}
              />
            ))}
            <div className="flex flex-col space-y-3">
              {/* {docsConfig.sidebarNav?.map((item, index) => (

              <MobileDropdownLink
                key={index}
                item={item}
                onOpenChange={setOpen}
              />
            ))} */}

              <div className="flex flex-col space-y-3 justify-start w-full">
                <button onClick={() => setOpen(false)} className="text-left">
                  <Link href="https://jumbochain.org/#teamId">Team</Link>
                </button>
                <button onClick={() => setOpen(false)} className="text-left">
                  <Link href="/">Investment Portfolio</Link>
                </button>
                <button onClick={() => setOpen(false)} className="text-left">
                  <Link href="https://jumbochain.org/news">News and Media</Link>
                </button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps extends LinkProps {
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </Link>
  );
}

interface MobileDropdownLinkProps {
  item: any;
  onOpenChange?: (open: boolean) => void;
}

function MobileDropdownLink({ item, onOpenChange }: MobileDropdownLinkProps) {
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="flex flex-col space-y-2">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className="text-muted-foreground text-white">{item.title}</span>
        {dropdownOpen ? (
          <ChevronUpIcon className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronDownIcon className="h-4 w-4 text-muted-foreground" />
        )}
      </div>
      {dropdownOpen &&
        item?.items?.map((subItem: any) => (
          <React.Fragment key={subItem.href}>
            {!subItem.disabled && subItem.href && (
              <MobileLink
                href={subItem.href}
                onOpenChange={onOpenChange}
                className="pl-4 text-muted-foreground text-white bg-[#0d0d0d]"
              >
                {subItem.title}
                {subItem.label && (
                  <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                    {subItem.label}
                  </span>
                )}
              </MobileLink>
            )}
            {subItem.items && (
              <MobileDropdownLink item={subItem} onOpenChange={onOpenChange} />
            )}
          </React.Fragment>
        ))}
    </div>
  );
}