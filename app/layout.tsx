import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
export const metadata: Metadata = {
  title:"Muhammad Amjid | Sales × Data × Technology",
  description:"Muhammad Amjid, Senior FMCG Sales Leader focused on GT, RTM, distribution, analytics and digital transformation.",
  metadataBase:new URL("https://amjidofficial.github.io/Profile/")
};
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en" suppressHydrationWarning><body><ThemeProvider>{children}</ThemeProvider></body></html>;
}