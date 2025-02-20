import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/global/ThemeProvider";
import { SidebarProvider } from "@/context/SidebarContext";
import { Sidebar } from "./components/main/Navbar/Sidebar";
import StarsCanvas from "./components/main/StarBackground";
import Navbar from "./components/main/Navbar/Navbar";

const inter = Inter({
  variable: "--inter-sans",
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} overflow-y-auto overflow-x-hidden antialiased font-inter`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <Sidebar />
            <StarsCanvas />
            <Navbar />
            <div className="mx-auto relative">{children}</div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
