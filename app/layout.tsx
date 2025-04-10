import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Zen_Dots, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/global/ThemeProvider";
import { SidebarProvider } from "@/context/SidebarContext";
import { Sidebar } from "./components/main/sections/Navbar/Sidebar";
import Navbar from "./components/main/sections/Navbar/Navbar";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--inter-sans",
  subsets: ["latin"],
  preload: false,
});

const zen_dots = Zen_Dots({
  variable: "--zen-dots",
  weight: ["400"],
  subsets: ["latin"],
  preload: false,
});

const orbitron = Orbitron({
  variable: "--orbitron",
  subsets: ["latin"],
  preload: false,
});

const dotFont = localFont({
  src: "./fonts/dot.otf",
  variable: "--dot-font",
  preload: false,
});

const yapari = localFont({
  src: "./fonts/Yapari.ttf",
  variable: "--Yapari",
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
        className={`${inter.variable} ${orbitron.variable} ${dotFont.variable} ${yapari.variable} overflow-y-auto overflow-x-hidden antialiased font-inter`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <Sidebar />
            <Navbar />
            <div className="mx-auto relative">{children}</div>
          </SidebarProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
