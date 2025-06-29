import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
// import { ThemeProvider } from "@/components/theme-provider"
export const revalidate = 3600;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leaderboards",
  description: "Track the top players across different categories",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} dark`}>
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange> */}
        <Navigation />
        <main>
          <div className="text-xs underline text-center font-semibold p-2">
            updates every 1 hour
          </div>
          {children}
        </main>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
