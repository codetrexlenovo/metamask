"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { usePathname } from "next/navigation"
import NavigationBar from "@/app/components/nav/navigation-bar"
import { NavigationBarDoc } from "@/app/components/nav/DocNavbar";
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const pathname = usePathname()
  return <NextThemesProvider {...props}>
    {pathname === '/documentation' ? <><NavigationBarDoc /> </> : <>
      <NavigationBar />
    </>}
    {children}</NextThemesProvider>
}
